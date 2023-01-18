import type { NextApiRequest, NextApiResponse } from 'next'
import { ICommonResponse, ITodoItem } from 'src/interfaces'
import { prismaClient } from 'src/prismaClient'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICommonResponse<ITodoItem>>
) {
  const { body, method } = req

  switch (method) {
    case 'POST':
      const createdData = await prismaClient.create(body.content)
      res.status(201).json({ ok: true, data: createdData })
      break
    default:
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
