import * as crypto from 'crypto'
import * as jwt from 'jsonwebtoken'
import { Error } from 'mongoose'
import { formatJSONResponse } from '../../../libs/api-gateway'
import { Role, UserInterface, UserType, UserValidationSchema } from '../../user/models/user.model'
import { UserService } from '../../user/services/user.service'

export class AuthService {
  private hash = '71bbef39f9c4634c8d7538670fa466a1'
  private secret_key = '23bbef432f5c4634c8d7538670fa466a1'
  private userService = new UserService()

  async register(user: UserType) {
    try {
      UserValidationSchema.parse(user)
      await this.userService.checkUserExists(user.email)
      const hashedPassword = crypto.pbkdf2Sync(user.password, this.hash, 100, 64, 'sha512').toString('hex')
      await this.userService.create({
        email: user.email,
        password: hashedPassword,
        name: user.name,
        dob: user.dob,
        role: Role.Guest
      })

      return formatJSONResponse({
        statusCode: 200,
        message: 'User created successfully'
      })
    } catch (e) {
      return formatJSONResponse({
        statusCode: 400,
        message: e.message
      })
    }
  }

  async login({ email, password }: { email: string; password: string }) {
    try {
      const existingUser = await this.userService.checkUserDoesntExists(email)

      await this.checkIsValidPassword(existingUser, password)

      const token = await this.signToken(existingUser.id)

      return formatJSONResponse({
        statusCode: 200,
        message: { message: 'You are logged.', token }
      })
    } catch (e) {
      return formatJSONResponse({
        statusCode: 400,
        message: e.message
      })
    }
  }

  async refreshToken(token: string) {
    try {
      const decoded = jwt.verify(token, this.secret_key)
      const user = await this.userService.findById(decoded.id)
      const newToken = await this.signToken(user.id)

      return formatJSONResponse({
        statusCode: 200,
        message: {
          token: newToken,
          email: user.email
        }
      })
    } catch (e) {
      return formatJSONResponse({
        statusCode: 400,
        message: e.message
      })
    }
  }

  async resetPassword() {
    // TODO - Get the email, new email and reset token from param
    // TODO - Double check email and reset token are valid
    // TODO - Change the user password
  }

  private async checkIsValidPassword(user: UserInterface, password: string) {
    const hashedPassword = crypto.pbkdf2Sync(password, this.hash, 100, 64, 'sha512').toString('hex')
    const isPasswordValid = hashedPassword === user.password

    if (!isPasswordValid) {
      const { loginAttempts } = await this.userService.updateLoginAttempts(user.id)
      const { attemptCount } = loginAttempts

      if (attemptCount >= 3) {
        // EXTRA
        // TODO - Send email saying the account was lock
        throw new Error('You reached the maximum login attempts, please reset your password')
      }
      throw new Error('Invalid password')
    }
  }

  private async signToken(userId: string) {
    const token = jwt.sign({ id: userId }, this.secret_key, { expiresIn: '8h' })
    await this.userService.addToken(userId, token)
    return token
  }
}
