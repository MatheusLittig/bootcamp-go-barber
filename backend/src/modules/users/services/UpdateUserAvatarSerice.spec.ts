import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider'
import AppError from '@shared/errors/AppError'
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'

import UpdateUserAvatarService from './UpdateUserAvatarService'

describe('UpdateUserAvatar', () => {
  it('should be able to create a user with avatar', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const fakeStorageProvider = new FakeStorageProvider()

    const updateUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider
    )

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johdoe@example.com',
      password: '12345'
    })

    await updateUserAvatar.execute({
      user_id: user.id,
      filename: 'new_avatar.jpg'
    })

    expect(user.avatar).toBe('new_avatar.jpg')
  })

  it('should NOT be able to update user avatar from non existing user', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const fakeStorageProvider = new FakeStorageProvider()

    const updateUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider
    )

    expect(
      updateUserAvatar.execute({
        user_id: 'non-existing-user',
        filename: 'avatar-not-updated.jpg'
      })
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should delete old avatar when updating a new one', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const fakeStorageProvider = new FakeStorageProvider()

    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile')

    const updateUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider
    )

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johdoe@example.com',
      password: '12345'
    })

    await updateUserAvatar.execute({
      user_id: user.id,
      filename: 'new-avatar.jpg'
    })

    await updateUserAvatar.execute({
      user_id: user.id,
      filename: 'new-avatar2.jpg'
    })

    expect(deleteFile).toHaveBeenCalledWith('new-avatar.jpg')
    expect(user.avatar).toBe('new-avatar2.jpg')
  })
})
