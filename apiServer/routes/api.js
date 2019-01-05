const router = require('koa-router')()
const demo = require('../controllers/api/demo')
const product = require('../controllers/api/product')
const task = require('../controllers/api/task')

router.get('/demo', demo.demo)
router.post('/demo2', demo.demo2)
router.get('/product/list', product.list)
router.post('/product/create', product.create)
router.get('/task/list', task.list)
router.post('/task/create', task.create)
router.post('/task/update', task.update)
router.post('/task/delete', task.delete)

module.exports = router
