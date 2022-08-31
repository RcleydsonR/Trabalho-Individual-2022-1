FROM node:lts-alpine

COPY package.json /
RUN npm install --silent

WORKDIR /app
COPY . /app

CMD ["npm", "start"]