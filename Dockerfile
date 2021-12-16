FROM node:14-alpine

WORKDIR /usr/src/app

COPY . .
RUN yarn install
RUN yarn add --dev eslint

RUN yarn build