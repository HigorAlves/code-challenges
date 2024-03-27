import { middyfy } from '~/libs/lambda'
import { AuthService } from '~/modules/authentication/services/auth.service'
import { Database } from '~/services/database'

const handler = async (event) => {
  await Database.getConnection()

  const tokenHeader = event.headers.Authorization || event.headers.authorization || event.headers['X-Refresh-Token']
  if (!tokenHeader) throw new Error('Refresh token not provided')
  const refreshToken = tokenHeader.split(' ')[1] || tokenHeader

  const service = new AuthService()

  return await service.refreshToken(refreshToken)
}

export const main = middyfy(handler)
