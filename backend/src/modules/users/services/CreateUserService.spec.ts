import AppError from '@shared/errors/AppError'

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider'
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'

import CreateUserService from './CreateUserService'

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const fakeHashProvider = new FakeHashProvider()

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider
    )

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johdoe@example.com',
      password: '12345'
    })

    expect(user).toHaveProperty('id')
  })

  it('should be NOT able to create a new user with allready used email', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const fakeHashProvider = new FakeHashProvider()

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider
    )

    await createUser.execute({
      name: 'John Doe',
      email: 'johdoe@example.com',
      password: '12345'
    })

    expect(
      createUser.execute({
        name: 'John Doe',
        email: 'johdoe@example.com',
        password: '12345'
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
