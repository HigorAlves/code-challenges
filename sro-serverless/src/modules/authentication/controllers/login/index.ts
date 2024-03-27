import { schema } from './schema'
import { handlerPath } from '~/libs/handler-resolver'

export const login = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'login',
        request: {
          schemas: {
            'application/json': schema
          }
        }
      }
    }
  ]
}
