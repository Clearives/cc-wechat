const router = require('koa-router')()
const api = require('./api')
const iwx = require('./iwx')
const { serverVerify } = require('../controllers/serverVerify')


router.get('/serverVerify', serverVerify)
router.use('/api', api.routes(), api.allowedMethods())
router.use('/iwx', iwx.routes(), iwx.allowedMethods())


module.exports = router
