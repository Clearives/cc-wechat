const Koa = require('koa')
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const http = require('http')
const fs = require('fs')
const path = require('path')
const {normalizePort, onError, onListening} = require('./utils/serverUtils').serverUtils
const port = normalizePort(process.env.PORT || '4009');
const mongoose = require('mongoose')

const db = 'mongodb://localhost:27017/test'
mongoose.Promise = require('bluebird')
mongoose.connect(db, { useNewUrlParser: true }).then(() => {
  console.log('mongoDB is connected...')
})

/**
 * 获取数据库表对应的js对象所在的路径
 * @type {[type]}
 */
const models_path = path.join(__dirname, '/models')
console.log(models_path)


/**
 * 已递归的形式，读取models文件夹下的js模型文件，并require
 * @param  {[type]} modelPath [description]
 * @return {[type]}           [description]
 */
var walk = function(modelPath) {
  fs.readdirSync(modelPath)
    .forEach(function(file) {
      var filePath = path.join(modelPath, '/' + file)
      var stat = fs.statSync(filePath)

      if (stat.isFile()) {
        if (/(.*)\.(js|coffee)/.test(file)) {
          require(filePath)
        }
      }
      else if (stat.isDirectory()) {
        walk(filePath)
      }
    })
}
walk(models_path)

const app = new Koa()
const index = require('./routes/index')

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

