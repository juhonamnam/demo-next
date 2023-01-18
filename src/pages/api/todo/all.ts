import type { NextApiRequest, NextApiResponse } from 'next'
import { ICommonResponse, ITodoItem } from 'src/interfaces'
import { prismaClient } from 'src/prismaClient'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICommonResponse<ITodoItem[]>>
) {
  const { method } = req

  if (method === 'GET') {
    const data = await prismaClient.getAll()
    return res.status(200).json({ ok: true, data })
  }

  res.status(405).end(`Method ${method} Not Allowed`)
}
