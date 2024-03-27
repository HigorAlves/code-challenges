import { LoginAttempts, Token, User, UserInterface, UserType } from '~/modules/user/models/user.model'

export class UserRepository {
  /**
   * Create a new user document.
   * @param userData Data for the new user.
   * @returns The created user document.
   */
  async create(userData: Partial<UserInterface> | UserType): Promise<UserInterface> {
    const user = new User(userData)
    return await user.save()
  }

  /**
   * Find a user by their email.
   * @param email The email of the user to find.
   * @returns The found user document or null if not found.
   */
  async findByEmail(email: string): Promise<UserInterface | null> {
    return await User.findOne({ email })
  }

  /**
   * Find a user by their ID.
   * @param id The ID of the user to find.
   * @returns The found user document or null if not found.
   */
  async findById(id: string): Promise<UserInterface | null> {
    return await User.findById(id)
  }

  /**
   * Update a user document by ID.
   * @param id The ID of the user to update.
   * @param updateData The data to update in the user document.
   * @returns The updated user document.
   */
  async updateById(id: string, updateData: Partial<UserInterface>): Promise<UserInterface | null> {
    return await User.findByIdAndUpdate(id, updateData, { new: true })
  }

  /**
   * Delete a user document by ID.
   * @param id The ID of the user to delete.
   * @returns The result of the delete operation.
   */
  async deleteById(id: string): Promise<{ deletedCount?: number }> {
    return await User.deleteOne({ _id: id })
  }

  /**
   * Get the login attempts for a specific user by their ID.
   * @param id The ID of the user.
   * @returns The loginAttempts object of the user.
   */
  async getLoginAttemptsById(id: string): Promise<LoginAttempts | null> {
    const user = await User.findById(id, 'loginAttempts')
    return user ? user.loginAttempts : null
  }

  /**
   * Get the tokens for a specific user by their ID.
   * @param id The ID of the user.
   * @returns The tokens array of the user.
   */
  async getTokensById(id: string): Promise<Token[] | null> {
    const user = await User.findById(id, 'tokens')
    return user ? user.tokens : null
  }

  async addToken(userId, newToken: Token) {
    try {
      const result = await User.findByIdAndUpdate(
        userId,
        {
          $push: { tokens: newToken }
        },
        { new: true, runValidators: true }
      )

      if (!result) {
        throw new Error('User not found')
      }

      return result // The updated user document
    } catch (error) {
      console.error('Error adding token to user:', error)
      throw error
    }
  }

  async updateLoginAttempts(userId) {
    try {
      const result = await User.findByIdAndUpdate(
        userId, // The unique identifier of the user document to update
        {
          $inc: { 'loginAttempts.attemptCount': 1 }, // Increment attemptCount by 1
          $set: { 'loginAttempts.lastAttempt': new Date() } // Update lastAttempt to current date and time
        },
        { new: true, runValidators: true } // Options to return the updated document and run schema validators
      )

      if (!result) {
        throw new Error('User not found')
      }

      return result // The updated user document
    } catch (error) {
      console.error('Error updating login attempts:', error)
      throw error
    }
  }
}
