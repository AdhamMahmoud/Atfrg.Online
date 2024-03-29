FROM keymetrics/pm2:12-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

# expose 3000 on container
EXPOSE 3001

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=3001

# Used by pm2
COPY ecosystem.config.js .
COPY nuxt-start.js .
# start the app
CMD [ "pm2-runtime", "start", "npm", "--", "start"]