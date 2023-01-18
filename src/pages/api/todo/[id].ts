import type { NextApiRequest, NextApiResponse } from 'next'
import { ICommonResponse, ITodoItem } from 'src/interfaces'
import { prismaClient } from 'src/prismaClient'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICommonResponse<ITodoItem>>
) {
  const { query, method } = req

  switch (method) {
    case 'GET':
      const getData = await prismaClient.get(Number(query.id))
      if (getData) res.status(200).json({ ok: true, data: getData })
      else res.status(204).json({ ok: false, message: 'Item not found' })
      break
    case 'DELETE':
      const deletedData = await prismaClient.delete(Number(query.id))
      res.status(200).json({ ok: true, data: deletedData })
      break
    default:
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
