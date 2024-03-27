import mongoose, { Document, Schema } from 'mongoose'
import { z } from 'zod'

export enum Role {
  Admin = 1,
  Sales = 5,
  Support = 7,
  Owner = 10,
  Guest = 100
}

export interface Token {
  token: string
  createdAt: Date
  expired: boolean
}

export interface LoginAttempts {
  attemptCount: number
  lastAttempt: Date
}

export interface UserInterface extends Document {
  email: string
  password: string
  name: string
  dob?: Date // Optional
  role: Role
  tokens: Token[]
  loginAttempts: LoginAttempts
}

export const TokenSchema: Schema = new Schema({
  token: { type: String, required: true },
  createdAt: { type: Date, required: true },
  expired: { type: Boolean, required: true }
})

const LoginAttemptsSchema: Schema = new Schema({
  attemptCount: { type: Number, required: false },
  lastAttempt: { type: Date, required: false }
})

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  dob: { type: Date },
  role: { type: String, required: true },
  tokens: [TokenSchema],
  loginAttempts: {
    type: LoginAttemptsSchema,
    required: false,
    default: () => ({ attemptCount: 0 })
  }
})

export const UserValidationSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string(),
  dob: z.string().optional(),
  role: z.number()
})

export type UserType = z.infer<typeof UserValidationSchema>

export const User = mongoose.model<UserInterface>('User', UserSchema)
