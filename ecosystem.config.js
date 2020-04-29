module.exports = {
  apps: [
    {
      name: "atfrg.online",
      port: 3000,
      restart_delay: 5000,
      max_memory_restart: "4G",
      instances: 2, // How many app do we need ?
      max_restarts: 1000, // then we have a problem ?!
      script: "/usr/src/nuxt-app/node_modules/nuxt-start/bin/nuxt-start.js",
      env: {
        HOST: "0.0.0.0",
        PORT: 3000,
        NODE_ENV: "production",
      },
      env_production: {
        HOST: "0.0.0.0",
        PORT: 3000,
        NODE_ENV: "production",
      },
    },
  ],
};
