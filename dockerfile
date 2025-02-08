FROM node:18-alpine
WORKDIR /MSWeb
COPY . .

RUN npm i
ENTRYPOINT [ "npm", "run", "preview" ]