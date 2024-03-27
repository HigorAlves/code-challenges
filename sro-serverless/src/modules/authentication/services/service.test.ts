import { UserService } from '../../user/services/user.service'
import { AuthService } from './auth.service'

jest.mock('../../user/services/user.service', () => {
  return {
    UserService: jest.fn().mockImplementation(() => {
      return {
        checkUserExists: jest.fn().mockResolvedValue(null),
        create: jest.fn().mockResolvedValue(true),
        checkUserDoesntExists: jest.fn(),
        findById: jest.fn(),
        addToken: jest.fn(),
        updateLoginAttempts: jest.fn()
      }
    })
  }
})

describe('AuthService', () => {
  let authService: AuthService
  let userService: UserService

  beforeEach(() => {
    authService = new AuthService()
    userService = new UserService()
  })

  describe('register method', () => {
    it('should successfully register a new user', async () => {
      const user = {
        email: 'test@example.com',
        password: 'password123',
        name: 'Test User',
        dob: '1990-01-01',
        role: 1000
      }

      const response = await authService.register(user)

      expect(response.statusCode).toBe(200)
    })

    it('should successfully log in a user and return a token', async () => {
      const email = 'test@example.com'
      const password = 'correctPassword'

      userService.checkUserDoesntExists = jest.fn()

      const response = await authService.login({ email, password })

      expect(response.statusCode).toBe(200)
    })
  })
})
