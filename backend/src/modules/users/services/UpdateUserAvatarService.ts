import { inject, injectable } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import User from '../infra/typeorm/entities/User'

import IUsersRepository from '../repositories/IUsersRepository'
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider'

interface IRequest {
  user_id: string
  filename: string
}

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider
  ) {}

  public async execute({
    user_id,
    filename
  }: IRequest): Promise<User | undefined> {
    const user = await this.usersRepository.findById(user_id)

    if (!user) {
      throw new AppError('Only authenticated users can change avatar pic.', 401)
    }

    if (user.avatar) {
      await this.storageProvider.deleteFile(user.avatar)
    }

    const avatarFilename = await this.storageProvider.saveFile(filename)

    user.avatar = avatarFilename

    await this.usersRepository.save(user)

    return user
  }
}

export default UpdateUserAvatarService
