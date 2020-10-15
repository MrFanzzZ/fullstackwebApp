import { Application, router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router
  .get("/",async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/dist`,
    index: "index.html",
  });
});

 

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8080 });
