FROM node:16.3.0-alpine3.13
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node index.js
