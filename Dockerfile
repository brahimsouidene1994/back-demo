ARG NODE_VERSION=18.0.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]