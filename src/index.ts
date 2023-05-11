import * as dotenv from "dotenv";
import express from "express";
import chalk from "chalk";

dotenv.config();
const port = process.env.PORT ?? 4006;

const app = express();

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on ${chalk.green(`http://localhost:${port}`)}`);
});
