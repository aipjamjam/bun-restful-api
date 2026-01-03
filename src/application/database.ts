import { PrismaClient } from '@prisma/client'
import { logger } from './logging'

export const prismaClient = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'stdout',
      level: 'error',
    },
    {
      emit: 'stdout',
      level: 'info',
    },
    {
      emit: 'stdout',
      level: 'warn',
    },
  ],
})

prismaClient.$on('query', (e: any) => {
  logger.info(e)
})

prismaClient.$on('error', (e: any) => {
  logger.error(e)
})

prismaClient.$on('info', (e: any) => {
  logger.info(e)
})

prismaClient.$on('warn', (e: any) => {
  logger.warn(e)
})