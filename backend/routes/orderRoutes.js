import express from 'express'
const router = express.Router()
import { addOrderItems, getOrderById } from '../controllers/orderControler.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)

export default router
