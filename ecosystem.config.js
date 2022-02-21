module.exports = {
  apps: [
    {
      name: "atfrg.online",
      port: 3001,
      restart_delay: 5000,
      max_memory_restart: "2G",
      instances: 2, // How many app do we need ?
      max_restarts: 1000, // then we have a problem ?!
      script: "nuxt-start.js",
      cwd: "/usr/src/nuxt-app/",
      env: {
        HOST: "0.0.0.0",
        PORT: 3001,
        NODE_ENV: "production"
      },
      env_production: {
        HOST: "0.0.0.0",
        PORT: 3001,
        NODE_ENV: "production"
      }
    }
  ]
};
