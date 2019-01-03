exports.demo = async (ctx, next) => {
  ctx.body = {
    success: true,
    data: {
      msg: 'ok'
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
