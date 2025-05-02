import express from 'express'
import { getuserData } from '../controllers/user.controller.js'
import { requestPasswordReset } from '../controllers/user.controller.js'
import { resetPassword } from '../controllers/user.controller.js'
const router = express.Router()

router.post('/' , getuserData)
router.post('/request-reset', requestPasswordReset )
router.post('/reset-password', resetPassword)



export default router;