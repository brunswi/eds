const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const fs = require('fs');
const app = new Koa();
const port = 9091;

app.use(serve(__dirname + '/'));

app.use(async (ctx) => {
    // when no other route matches the requested url, send the custom 404 page
    ctx.status = 404
    ctx.type = 'html'
    ctx.body = fs.createReadStream(path.join(__dirname, '/404.html'))
});

app.listen(port, () => {
    console.log('Listening on port ' + port)
});
