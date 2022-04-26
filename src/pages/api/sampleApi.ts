// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Response = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const { query, method } = req

  switch (method) {
    case 'GET':
      res.status(200).json({ message: 'This is a GET request' })
      break
    case 'POST':
      res.status(200).json({ message: 'This is a POST request' })
      break
    case 'PUT':
      res.status(200).json({ message: 'This is a PUT request' })
      break
    case 'DELETE':
      res.status(200).json({ message: 'This is a DELETE request' })
      break
    default:
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
