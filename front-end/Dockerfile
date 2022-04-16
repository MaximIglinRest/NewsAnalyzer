FROM node:12-alpine as builder
WORKDIR /front-end
COPY ./package.json /front-end/package.json
RUN npm install --only=prod
COPY . /front-end
RUN npm run build
CMD ['npm', 'run', 'start']