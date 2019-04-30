FROM node:alpine AS build

WORKDIR /app
COPY . /app
RUN npm install && \
  npm audit fix

EXPOSE 3000