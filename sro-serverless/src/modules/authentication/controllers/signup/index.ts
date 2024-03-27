import { schema } from './schema'
import { handlerPath } from '~/libs/handler-resolver'

export const signup = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'signup',
        request: {
          schemas: {
            'application/json': schema
          }
        }
      }
    }
  ]
}
