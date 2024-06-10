import type { NextApiRequest, NextApiResponse } from "next"

import { User } from "@/feature/user/type"
import { mockData } from "@/mock"

export default function handler(_: NextApiRequest, res: NextApiResponse<User>) {
  const randomIndex = Math.floor(Math.random() * mockData.length)
  const user = mockData[randomIndex]

  return res.status(200).json(user)
}
