import Router from "koa-router";
import { Context } from "koa";
const router = new Router();

router.post("/codereviewvideos", async (ctx: Context) => {
  try {
    ctx.status = 201;
    ctx.body = {
      games: [ctx.request.body.game],
    };
  } catch (error) {
    console.log(error);
  }
});

export default router;
