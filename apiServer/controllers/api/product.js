let mongoose = require('mongoose');
let Product = mongoose.model('Product');

exports.list = async (ctx, next) => {
  let res = await Product.find({}).exec();
  ctx.body = {
    success: true,
    data: res,
  };
};

exports.create = async (ctx, next) => {
  const body = JSON.parse(ctx.request.body);
  const name = body.name;
  const description = body.description;
  const price = body.price;
  const product = new Product({
    name: name,
    description: description,
    price: price,
  });
  try {
    user = await product.save();
    ctx.body = {
      code: 200,
      data: '添加成功',
    };
  }
  catch (e) {
    ctx.body = {
      code: 400,
      msg: e
    };
  }
}

