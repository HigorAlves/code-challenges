import httpErrorHandler from '@middy/http-error-handler'
import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '~/libs/api-gateway'
import { middyfy } from '~/libs/lambda'
import { loggingMiddleware } from '~/middleware/logging.middleware'
import { schema } from '~/modules/authentication/controllers/signup/schema'
import { AuthService } from '~/modules/authentication/services/auth.service'
import { Database } from '~/services/database'

interface Body {
  email: string
  password: string
}

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  try {
    await Database.getConnection()

    const data = event.body as Body
    const service = new AuthService()

    return await service.login(data)
  } catch (e) {
    return formatJSONResponse({
      statusCode: 500,
      message: e.message
    })
  }
}

export const main = middyfy(handler).use(loggingMiddleware()).use(httpErrorHandler())
