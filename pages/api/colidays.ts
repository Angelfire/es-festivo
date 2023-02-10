import type { NextApiRequest, NextApiResponse } from 'next'

import { getHolidays } from '@/utils/date'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const colidays = getHolidays()

  try {
    return res
      .status(200)
      .json(colidays)
  } catch (e: any) {
    return res
      .status(500)
      .json({ error: e?.message })
  }
}
