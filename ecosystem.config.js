module.exports = {
  apps: [
    {
      name: "atfrg.online",
      port: 3000,
      restart_delay: 5000,
      instances: 2, // How many app do we need ?
      max_restarts: 1000, // then we have a problem ?!
      script: "./node_modules/nuxt-start/bin/nuxt-start.js",
      env: {
        NODE_ENV: "production",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
