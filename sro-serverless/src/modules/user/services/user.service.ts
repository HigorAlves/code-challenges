import { Error } from 'mongoose'
import { UserType } from '~/modules/user/models/user.model'
import { UserRepository } from '~/modules/user/repositories/user.repository'

export class UserService {
  private repository = new UserRepository()

  async findById(id: string) {
    return this.repository.findById(id)
  }

  async checkUserExists(email: string) {
    const existingUser = await this.repository.findByEmail(email)

    if (existingUser) {
      throw new Error('This user already exists')
    }

    return existingUser
  }

  async checkUserDoesntExists(email: string) {
    const existingUser = await this.repository.findByEmail(email)

    if (!existingUser) {
      throw new Error('This user does not exists')
    }

    return existingUser
  }

  async addToken(userId: string, token: string) {
    await this.repository.addToken(userId, {
      token,
      expired: false,
      createdAt: new Date()
    })
  }

  create(user: UserType) {
    return this.repository.create(user)
  }

  async updateLoginAttempts(id: string) {
    return this.repository.updateLoginAttempts(id)
  }
}
