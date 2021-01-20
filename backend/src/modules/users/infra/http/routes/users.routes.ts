import { Router } from 'express'
import multer from 'multer'

import uploadConfig from '@config/upload'

import CreateUserService from '@modules/users/services/CreateUserService'
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService'

import ensureAuthenticate from '../middlewares/ensureAuthenticate'
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'

const usersRouter = Router()
const upload = multer(uploadConfig)

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body

  const usersRepository = new UsersRepository()
  const createUser = new CreateUserService(usersRepository)

  const user = await createUser.execute({
    name,
    email,
    password
  })

  return response.json(user)
})

usersRouter.patch(
  '/avatar',
  ensureAuthenticate,
  upload.single('avatar'),
  async (request, response) => {
    const usersRepository = new UsersRepository()
    const updateUserAvatar = new UpdateUserAvatarService(usersRepository)

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      filename: request.file.filename
    })

    return response.json(user)
  }
)

export default usersRouter