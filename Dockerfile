FROM node:8
MAINTAINER Tom Darneix

WORKDIR ../

COPY package*.json ./

RUN apt update
RUN apt install -qq -y python2.7 python-pip curl wget git
RUN npm install
RUN pip install -U pip
RUN pip install -U robotframework
RUN pip install -U robotframework-seleniumLibrary

FROM node:8-alpine

COPY  . .
EXPOSE 1047
CMD [ "npm", "start" ]
