import { schema } from './schema'
import { handlerPath } from '~/libs/handler-resolver'

export const validateToken = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'validateToken',
        request: {
          schemas: {
            'application/json': schema
          }
        }
      }
    }
  ]
}
