  import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";     
   import {BookAll,BookSel} from './Book.js'
   const router = new Router();
   router
     .get("/", async (context) => {
       await send(context, context.request.url.pathname, {
         root: `${Deno.cwd()}/dist`,
         index: "index.html",
       });
    })
    .get("/books", async(ctx) => {
    const res=await BookAll();
  console.log(res.rows)
  ctx.response.body=res.rows;
    })
  .get("/book/:id", async(ctx)=>{
  if(ctx.params && ctx.params.id){
  const {id} =ctx.params;
  const res =await BookSel(id);
  console.log("res: ",res.rows)
  ctx.response.body=res.rows;
     }
  })

