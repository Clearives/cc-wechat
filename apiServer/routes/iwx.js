const router = require('koa-router')()
const iwx = require('../controllers/iwx/wxJsConfig')

router.get('/wxJsConfig', iwx.wxJsConfig)

module.exports = router
