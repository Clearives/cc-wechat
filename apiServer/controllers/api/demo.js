let mongoose =  require('mongoose')
let Demo = mongoose.model('Demo')
exports.demo = async (ctx, next) => {
  let res = await Demo.find({}).exec()
  ctx.body = {
    success: true,
    data: {
      demo: res
    }
  }
}
exports.demo2 = async (ctx, next) => {
  ctx.body = {
    success: true,
    data: {
      msg: 'ok2'
    }
  }
}
