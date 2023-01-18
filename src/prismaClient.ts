import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const prismaClient = {
  async getAll() {
    return await prisma.todo.findMany()
  },
  async get(id: number) {
    return await prisma.todo.findUnique({
      where: { id },
    })
  },
  async create(content: string) {
    return await prisma.todo.create({ data: { content } })
  },
  async delete(id: number) {
    return await prisma.todo.delete({
      where: { id },
    })
  },
}
