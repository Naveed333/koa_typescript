import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import healthCheckModules from "./routes/healthcheck";
import codeReviewvideosModules from "./routes/codereviewvideos";
import { config } from "./config";
const app = new Koa();

const PORT = config.port;
app.use(bodyParser());
app.use(
  cors({
    origin: "*",
  })
);

app.use(logger());

app.use(healthCheckModules.routes());
app.use(codeReviewvideosModules.routes());

const server = app
  .listen(PORT, async () => {
    console.log(`Server listening on port : ${PORT}`);
  })
  .on("error", (err) => {
    console.log(err);
  });

export default server;
