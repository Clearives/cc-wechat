const router = require('koa-router')()
const demo = require('../controllers/api/demo')

router.get('/demo', demo.demo)
router.post('/demo2', demo.demo2)

module.exports = router
