let mongoose = require('mongoose');
let Product = mongoose.model('Product');

exports.list = async (ctx, next) => {
  let query = ctx.query;
  let pageSize = +query.pageSize;
  let pageNo = +query.pageNo;
  let res = await Product.find().limit(pageSize).skip(pageSize * (pageNo - 1)).exec();
  let totalRecord = await Product.count().exec();
  ctx.body = {
    code: '200',
    data: {
      content: res,
      pagination: {
        current: pageNo || 1,
        pageSize: pageSize || 10,
        total: totalRecord,
        totalPage: Math.ceil(totalRecord / pageSize),
      }
    },
    msg: '成功~',
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

