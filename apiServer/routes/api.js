const router = require('koa-router')()
const demo = require('../controllers/api/demo')
const product = require('../controllers/api/product')

router.get('/demo', demo.demo)
router.post('/demo2', demo.demo2)
router.get('/product/list', product.list)
router.post('/product/create', product.create)

module.exports = router
