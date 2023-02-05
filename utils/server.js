const express = require("express");
const next = require("next");
const compression = require('compression');
const color = require('console-log-colors');

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const PORT = 8000;
    const LOG_PORT = color.green(`http://localhost:${PORT}`);

    // aply gzip compression
    server.use(compression());

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on ${LOG_PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
