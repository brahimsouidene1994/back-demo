1- installation node 
 - https://nodejs.org/en
2- install nodemon
 -> npm install nodemon 
3- node:http recieve data body:
    ```
        var body = "";
        req.on('data', (chunk) => {
        body+=chunk.toString();
        }).on('end', () => {
        console.log(body);
        });
    ```
4- expresss
    https://www.npmjs.com/package/express

5- dbeaver

5- install postgresql:

    https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

    - sudo apt install postgresql postgresql-contrib
    - sudo systemctl status postgresql
    - sudo systemctl enable postgresql
    - sudo systemctl start postgresql
    - sudo -i -u postgres -- switch to user postgres
    - psql

 CMD:
    - CREATE DATABASE mydb;
    - CREATE USER mydb_user WITH ENCRYPTED PASSWORD '123456';
    - GRANT ALL PRIVILEGES ON DATABASE mydb TO mydb_user;
    - \c mydb
    - GRANT USAGE, CREATE ON SCHEMA public TO mydb_user;        -- grant the necessary permissions to demo_user for the public schema:
    - \q

 Important: connect to db to all user
    - sudo nano /etc/postgresql/17/main/pg_hba.conf
        local   all             all                                     md5
    - hit "ctrl+x" 
    - hit "y"
    - hit "enter"
    - sudo systemctl restart postgresql

 query:

    CREATE TABLE book (
        id SERIAL PRIMARY KEY,                     -- Unique identifier for the book
        title VARCHAR(255) NOT NULL,               -- Title of the book (required)
        author VARCHAR(255) NOT NULL,              -- Author's name (required)
        genre VARCHAR(100),                        -- Genre of the book
        published_year INT,                        -- Year the book was published
        price NUMERIC(10, 2),                      -- Price of the book (up to 10 digits, 2 decimal places)
        rating NUMERIC(2, 1) CHECK (rating <= 5),  -- Rating (max 5.0, single decimal place)
        description TEXT                           -- Description of the book
    );

    INSERT INTO book (title, author, genre, published_year, price, rating, description)
    VALUES (
        'The Lost Kingdom',
        'Emily Carter',
        'Fantasy',
        2020,
        12.99,
        4.5,
        'A thrilling journey through a forgotten realm filled with magic and mystery.'
    );


6- dbeaver
7- install docker and docker compose:
8- docker run postgresql:
    -> docker run --name my-postgres -e POSTGRES_USER=your_user -e POSTGRES_PASSWORD=your_password -e POSTGRES_DB=your_database -p 5432:5432 -d postgres
9- run by docker compose:
    -> sudo docker compose -f ./deploy/docker-compose.yaml up -d
    -> sudo docker compose -f ./deploy/docker-compose.yaml ps
    -> sudo docker compose -f ./deploy/docker-compose.yaml down

    NB: in case of port 5432 reserved:
     -> sudo lsof -i:5432
     -> sudo kill -p <PID>

10- Sequelize with node:
    - install Sequelize
        -> npm install --save sequelize
        -> npm install --save pg pg-hstore

    - install Sequelize-cli
        -> npm install --save-dev sequelize-cli
        -> cd ./app/db && npx sequelize-cli init

    - cd ./app/db && npx sequelize-cli init
    - file .sequelizerc:
        const path = require('path');

        module.exports = {
            config: path.resolve('app/config', 'config.js'),
            'models-path': path.resolve('app/db', 'models'),
            'seeders-path': path.resolve('app/db', 'seeders'),
            'migrations-path': path.resolve('app/db', 'migrations'),
        };
    - creating book migration:
        -> npx sequelize-cli migration:generate --name book
    - running migrations:
        -> npx sequelize-cli db:migrate
    - undo migrations:
        -> npx sequelize-cli db:migrate:undo
    - seed:
        -> npx sequelize-cli seed:generate --name demo-books3
    - running seed:
        -> npx sequelize-cli db:seed:all
    - undo seed:
        -> npx sequelize-cli db:seed:undo