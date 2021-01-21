import { Router } from 'express'
import multer from 'multer'

import uploadConfig from '@config/upload'

import UsersControllers from '../controllers/UsersController'

import ensureAuthenticate from '../middlewares/ensureAuthenticate'
import UserAvatarController from '../controllers/UserAvatarController'

const usersRouter = Router()
const upload = multer(uploadConfig)

const usersController = new UsersControllers()
const userAvatarController = new UserAvatarController()

usersRouter.post('/', usersController.create)

usersRouter.patch(
  '/avatar',
  ensureAuthenticate,
  upload.single('avatar'),
  userAvatarController.update
)

export default usersRouter
