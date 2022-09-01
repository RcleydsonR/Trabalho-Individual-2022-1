# Multi-stage dockerfile
# Stage 1: Build react application
# Stage 2: Get react builded application and serve it on nginx

# Stage 1
FROM node:lts-alpine AS build

WORKDIR /app
COPY . .

RUN npm install --silent && npm run build

# Stage 2
FROM nginx:alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]