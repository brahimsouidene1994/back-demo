import User from '../db/models/User';
import { hashSync, compareSync } from 'bcryptjs';
import {sign} from 'jsonwebtoken'
import { Request, RequestHandler, Response } from 'express';

const signup:RequestHandler = async (req:Request, res:Response):Promise<void> => {
    console.log("signup()")
    const { username, password } = req.body;
    if(!username || !password) {
        res.status(400).send({
            success: false,
            message: "Username and Password are required"
        });
    }
    try {
        const foundUser = await User.findOne({
            where: { username },
        })
        if (foundUser) {
            res.status(409).send({
                success: false,
                message: "Username already exists"
            });
        }
        const newUSer = await User.create({
            username: username,
            password: hashSync(password, 8)
        });

        const token = sign({id:newUSer.id},'demo-secret',{expiresIn:3600})
        
        res.status(200).send({
            success: true,
            message: "User registered successfully",
            accessToken: token
        });
        
    }
    catch (err) {
        console.error("Error ", err)
        res.status(401).send({
            success: false,
            message: "Registration failed: ",err
        });
    }
};

const signin :RequestHandler = async (req:Request, res:Response):Promise<void> => {
    console.log("signin()")
    const { username, password } = req.body;
    if(!username || !password){
        res.status(400).send({
            success: false,
            message: "Username and Password are required"
        });
    }
    try{
        const foundUser = await User.findOne({
            where: { username }
        })
    
        if (!foundUser) {
            res.status(401).send({ 
                success: false,
                message: "User Not found." 
            });
        }
        const isValidPassword = compareSync(password, foundUser!.password)

        if(!isValidPassword){
            res.status(401).send({ 
                success: false,
                message: "Password not valid." 
            });
        }

        const token = sign({id:foundUser!.id},'demo-secret',{expiresIn:3600})

        res.status(200).send({
            success: true,
            message: "User logged in successfully",
            accessToken: token
        });
    }
    catch(err){
        console.error("Error ", err)
        res.status(401).send({
            success: false,
            message: "Login failed: ",err
        });
    }
};

export default {
    signup,
    signin,
};