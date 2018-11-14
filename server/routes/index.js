const router = require('koa-router')()
const { serverVerify } = require('../controllers/serverVerify')
const { wxJsConfig } = require('../controllers/iwx/wxJsConfig')

router.get('/serverVerify', serverVerify)
router.get('/iwx/wxJsConfig', wxJsConfig)


module.exports = router
