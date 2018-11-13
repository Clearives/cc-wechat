const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const http = require('http')
const {normalizePort, onError, onListening} = require('./server/utils/serverUtils').serverUtils
const port = normalizePort(process.env.PORT || '4009');
const index = require('./server/routes/index')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['text'],
  extendTypes: {
      text: ['text/xml']
  }
}))
app.use(json())
app.use(require('koa-static')('./dist'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

const server = http.createServer(app.callback());
server.listen(port);
server.on('error', onError);
server.on('listening', function () {
    onListening(server)
});

