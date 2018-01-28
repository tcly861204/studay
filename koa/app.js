const Koa = require('koa');
const app = new Koa();
app.use(async ctx => {
  console.log(ctx.request.origin);
  console.log(ctx.request.path);
  switch (ctx.path) {
    case "/":
    case "/index":
    case "/home":
      ctx.body = "hello world";
      break;
    case "/about":
      ctx.body = {
        "name": "abs"
      };
      break;
    default:
      ctx.throw(404, "当前内容未找到");
  }
});

app.listen(3000);