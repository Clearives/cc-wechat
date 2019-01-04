let mongoose = require('mongoose');
let Product = mongoose.model('Product');

exports.list = async (ctx, next) => {
  let res = await Product.find({}).exec();
  ctx.body = {
    code: '200',
    data: res,
    msg: '成功~'
  };
};

exports.create = async (ctx, next) => {
  const body = ctx.request.body;
  const name = body.name;
  const description = body.description;
  const price = body.price;
  let result = {
    code: '-1',
    msg: '',
  };
  if (!name) {
    result = {
      code: '400',
      msg: '产品名称不能为空~',
    };
    ctx.body = result;
    return;
  }
  if (!description) {
    result = {
      code: '400',
      msg: '产品描述不能为空~',
    };
    ctx.body = result;
    return;
  }
  if (!price) {
    result = {
      code: '400',
      msg: '产品价格不能为空~',
    };
    ctx.body = result;
    return;
  }
  const product = new Product({
    name: name,
    description: description,
    price: price,
  });
  try {
    user = await product.save();
    ctx.body = {
      code: '200',
      msg: '成功~',
    };
  }
  catch (e) {
    ctx.body = {
      code: '500',
      msg: e.errmsg,
    };
  }
};

