#!/usr/bin/env node

if (process.argv[2] !== "start") {
  process.argv.splice(2, 0, "start");
}

const suffix = "";
require("@nuxt/cli" + suffix)
  .run()
  .catch(error => {
    require("consola").fatal(error);
    process.exit(2);
  });
