FROM node:12.18
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
ENV APP_PORT 80
EXPOSE 80
CMD [ "yarn", "start" ]
