import Router from "koa-router";
import { createTextChangeRange } from "typescript";
const router = new Router();

router.get("/ping", async (ctx) => {
  try {
    ctx.body = {
      status: "success",
      data: "pang",
    };
  } catch (error) {}
});

export default router;
