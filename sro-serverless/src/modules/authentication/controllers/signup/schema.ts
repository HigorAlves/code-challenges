export const schema = {
  type: 'object',
  properties: {
    email: { type: 'string' },
    password: { type: 'string' },
    name: { type: 'string' },
    dob: { type: 'string' },
    role: { type: 'number' }
  },
  required: ['email', 'password', 'name', 'role']
}
