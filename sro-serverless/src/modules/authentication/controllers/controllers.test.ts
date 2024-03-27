import axios from 'axios'

const BASE_URL = 'http://localhost:3000/dev' // Adjust the port if necessary
enum Endponits {
  signup = 'signup',
  login = 'login',
  validateToken = 'validateToken'
}

const payload = {
  email: 'test@example.com',
  password: 'password123',
  name: 'John Doe',
  dob: '1990-01-01',
  role: 100
}
describe('Integration Tests for My Serverless Application', () => {
  it('should create a new user inside the database', async () => {
    const response = await axios.post(`${BASE_URL}/${Endponits.signup}`, payload)
    expect(response.data.statusCode).toBe(200)
    expect(response.data.message).toBe('User created successfully')
  })

  it('should not let duplicate user emails inside the database', async () => {
    const payload = {
      email: 'test@example.com',
      password: 'password123',
      name: 'John Does',
      dob: '1990-01-02',
      role: 1000
    }

    const response = await axios.post(`${BASE_URL}/${Endponits.signup}`, payload)
    expect(response.data.statusCode).toBe(400)
    expect(response.data.message).toBe('This user already exists')
  })

  it('should not let create users with missing required fields', async () => {
    const payload = {
      email: 'test@example.com',
      password: 'password123',
      dob: '1990-01-02',
      role: 1000
    }

    const response = await axios.post(`${BASE_URL}/${Endponits.signup}`, payload)
    expect(response.data.statusCode).toBe(400)
  })

  it('should login the user that exists', async () => {
    const response = await axios.post(`${BASE_URL}/${Endponits.login}`, payload)
    expect(response.data.statusCode).toBe(200)
    expect(response.data.message.message).toBeDefined()
    expect(response.data.message.token).toBeDefined()
  })

  it('should login user with wrong data', async () => {
    const response = await axios.post(`${BASE_URL}/${Endponits.login}`, {
      email: 'test@example.com',
      password: 'wrong'
    })
    console.log(response.data)
    expect(response.data.statusCode).toBe(400)
  })
})
