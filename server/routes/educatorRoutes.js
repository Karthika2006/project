
import express from 'express'
//import { requireAuth } from "@clerk/express"
import { updateRoleToEducator } from '../controllers/educatorController.js';

const educatorRouter = express.Router()

//add educator role
//educatorRouter.get('/update-role',updateRoleToEducator)
educatorRouter.post(
  '/update-role',
  updateRoleToEducator
)

export default educatorRouter;