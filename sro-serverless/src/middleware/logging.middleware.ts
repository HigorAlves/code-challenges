import { logger } from '~/libs/logger'

export const loggingMiddleware = () => {
  return {
    before: (handler, next) => {
      logger.info('Request received', { event: handler.event })
      return next()
    },
    after: (handler, next) => {
      logger.info('Response sent', { response: handler.response })
      return next()
    },
    onError: (handler, next) => {
      logger.error('Error occurred', { error: handler.error })
      return next(handler.error)
    }
  }
}
