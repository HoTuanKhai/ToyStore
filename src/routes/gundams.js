const express = require('express')
const router = express.Router()

const gundamController = require('../app/controllers/GundamController')

router.get('/create', gundamController.create)
router.post('/store', gundamController.store)
router.get('/:id/edit', gundamController.edit)
router.put('/:id', gundamController.update)
router.delete('/:id', gundamController.destroy)
router.get('/:slug', gundamController.show)

module.exports = router;