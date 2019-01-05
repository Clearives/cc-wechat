let mongoose = require('mongoose');
let Task = mongoose.model('Task');

exports.list = async (ctx, next) => {
  let query = ctx.query;
  let pageSize = +query.pageSize;
  let pageNo = +query.pageNo;
  let res = await Task.find().limit(pageSize).skip(pageSize * (pageNo - 1)).sort({ '_id': -1 }).exec();
  let totalRecord = await Task.count().exec();
  ctx.body = {
    code: '200',
    data: {
      content: res,
      pagination: {
        current: pageNo || 1,
        pageSize: pageSize || 10,
        total: totalRecord,
        totalPage: Math.ceil(totalRecord / pageSize),
      },
    },
    msg: '成功~',
  };
};

exports.create = async (ctx, next) => {
  let body = ctx.request.body;
  let name = body.name;
  let createdAt = body.createdAt;
  let description = body.description;
  let owner = body.owner;
  let result = {
    code: '-1',
    msg: '',
  };
  if (!name || !description || !owner) {
    result = {
      code: '400',
      msg: '参数错误~',
    };
    ctx.body = result;
    return;
  }
  let task = new Task({ name, createdAt, description, owner });
  try {
    task = await task.save();
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

exports.update = async (ctx, next) => {
  let body = ctx.request.body;
  let name = body.name;
  let createdAt = body.createdAt;
  let description = body.description;
  let owner = body.owner;
  let _id = body._id;
  let result = {
    code: '-1',
    msg: '',
  };
  if (!name || !description || !owner) {
    result = {
      code: '400',
      msg: '参数错误~',
    };
    ctx.body = result;
    return;
  }
  try {
    let task = await Task.updateOne({ _id: _id }, { name, createdAt, description, owner });
    ctx.body = {
      code: '200',
      msg: '成功~',
    };
  }
  catch (e) {
    ctx.body = {
      code: '500',
      msg: e.message,
    };
  }
};

exports.delete = async (ctx, next) => {
  let body = ctx.request.body;
  let _id = body._id;
  let result = {
    code: '-1',
    msg: '',
  };
  try {
    let task = await Task.remove({ _id: _id });
    ctx.body = {
      code: '200',
      msg: '删除成功~',
    };
  }
  catch (e) {
    ctx.body = {
      code: '500',
      msg: e.message,
    };
  }
};

