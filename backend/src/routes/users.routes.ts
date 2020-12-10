import { Router } from 'express'
import CreateUserService from '../services/CreateUserService'

import ensureAuthenticate from '../middlewares/ensureAuthenticate'

const usersRouter = Router()

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body

    const createUser = new CreateUserService()

    console.log(request.body)

    const user = await createUser.execute({
      name,
      email,
      password
    })

    // delete user.password

    return response.json(user)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

usersRouter.patch('/avatar', ensureAuthenticate, async (request, response) => {
  return response.json({ ok: true })
})

export default usersRouter