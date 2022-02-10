import Router from "koa-router";
const router = new Router();
import { Context } from "koa";

router.get("/ping", async (ctx: Context) => {
  try {
    ctx.body = {
      status: "success",
      data: "pong",
    };
  } catch (error) {}
});

export default router;
