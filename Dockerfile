FROM node:lts as builder

# create destination directory

WORKDIR /app

COPY . .

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore

RUN npm install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

FROM node:lts

WORKDIR /app

COPY --from=builder /app  .

ENV HOST 0.0.0.0
EXPOSE 3001
CMD [ "npm", "start" ]

