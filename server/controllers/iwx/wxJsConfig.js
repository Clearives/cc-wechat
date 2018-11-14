const Base64 = require("js-base64").Base64
const sign = require("../../utils/sign.js")
const {Http} = require('../../utils/http')
const {config} = require('../../config')
const base = {
  appid: config.appid,
  secret: config.appsecret,
  wxapi: "https://api.weixin.qq.com/cgi-bin"
};

/**
 * 根据appid,secret获取access_token
 */

const getAccessToken = () => {
  return new Promise((resolve, reject) => {
    Http.get(`${base.wxapi}/token?grant_type=client_credential&appid=${base.appid}&secret=${base.secret}`).then((res) => {
      const result = JSON.parse(res.body)
      if (result.access_token !== undefined) {
        resolve(result)
      } else {
        reject("获取access_token失败 检查getAccessToken函数")
      }
    })
  })
}

/**
 * 根据access_token获取api_ticket
 *
 * @param  {String} access_token
 * @return {Promise}
 */

const getTicket = (access_token) => {
  return new Promise((resolve, reject) => {
    Http.get(`${base.wxapi}/ticket/getticket?access_token=${access_token}&type=jsapi`).then((res) => {
      const result = JSON.parse(res.body)
      if (result.errcode === 0) {
        resolve(result)
      } else {
        reject("获取api_ticket失败 检查getTicket函数")
      }
    })
  })
}

exports.wxJsConfig = async (ctx) => {
  let configData;
  try {
    const accessTokenData = await getAccessToken();
    const ticketData = await getTicket(accessTokenData.access_token);
    const decodeHref = Base64.decode(ctx.query.href);
    configData = sign(ticketData.ticket, decodeHref);
    configData.appid = base.appid;
  } catch (err) {
    console.log(err);
    configData = {};
  }
  ctx.body = configData;
}
