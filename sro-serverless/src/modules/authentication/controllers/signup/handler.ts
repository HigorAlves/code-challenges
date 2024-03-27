import httpErrorHandler from '@middy/http-error-handler'
import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '~/libs/api-gateway'
import { middyfy } from '~/libs/lambda'
import { loggingMiddleware } from '~/middleware/logging.middleware'
import { schema } from '~/modules/authentication/controllers/signup/schema'
import { AuthService } from '~/modules/authentication/services/auth.service'
import { UserType } from '~/modules/user/models/user.model'
import { Database } from '~/services/database'

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  try {
    await Database.getConnection()

    const data = event.body as UserType
    const service = new AuthService()

    return await service.register(data)
  } catch (e) {
    return formatJSONResponse({
      statusCode: 500,
      message: e.message
    })
  }
}

export const main = middyfy(handler).use(loggingMiddleware()).use(httpErrorHandler())
