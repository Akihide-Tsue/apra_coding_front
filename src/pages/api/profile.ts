import { NextApiRequest, NextApiResponse } from "next"

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    id: "93f5e529-ce45-481b-9d77-ed5ed009cc8f",
    displayName: "自分の名前",
  })
}
