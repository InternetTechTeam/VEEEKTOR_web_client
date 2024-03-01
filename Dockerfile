FROM node:16-alpine

WORKDIR /.
COPY . .
EXPOSE 3000

RUN npm i
RUN npm run
