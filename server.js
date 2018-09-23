const Koa = require("koa");
const KoaRouter = require("koa-router");
const json = require("koa-json");
const app = new Koa();
const router = new KoaRouter();

//   Json middleware
app.use(json());
// if you see this message on local host 5000 then we are good to go
app.use(async ctx => (ctx.body = { msg: "this is the server" }));

// Router middleware
// this allows us to make routes with Koa like express

app.use(router.routes()).use(router.allowedMethods());

const PORT = 5000;
app.listen(PORT, () => console.log(`SERVER STARTED AT PORT ${PORT}`));
