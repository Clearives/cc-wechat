const router = require('koa-router')()
const { serverVerify } = require('../controllers/serverVerify')

router.get('/serverVerify', serverVerify)


module.exports = router
