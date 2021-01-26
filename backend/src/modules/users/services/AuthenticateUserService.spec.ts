import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider'

import AuthenticateUserService from './AuthenticateUserService'
import CreateUserService from './CreateUserService'

describe('CreateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const fakeHashProvider = new FakeHashProvider()

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider
    )
    const authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider
    )

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johdoe@example.com',
      password: '12345'
    })

    const response = await authenticateUser.execute({
      email: 'johdoe@example.com',
      password: '12345'
    })

    expect(response).toHaveProperty('token')
    expect(response.user).toEqual(user)
  })
})
