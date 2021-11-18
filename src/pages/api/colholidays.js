// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getColombianHolidays from "@/utils/dateUtils"

function handler(req, res) {
  const { year } = req.query

  try {
    return res
      .status(200)
      .json(
        getColombianHolidays(year || new Date().getFullYear())
      )
  } catch (err) {
    console.error(err)
  }
}

export default handler
