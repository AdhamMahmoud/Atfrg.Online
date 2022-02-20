FROM node:lts as builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build



FROM node:lts

WORKDIR /app

COPY --from=builder /app  .

EXPOSE 3001
ENV HOST 0.0.0.0
ENV NUXT_PORT=3001


CMD [ "npm", "start" ]