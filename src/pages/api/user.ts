import type { NextApiRequest, NextApiResponse } from "next"

import { User } from "@/feature/user/type"
import { mockData } from "@/mock"

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<User[]>,
) {
  // ランダムに6個のユーザーを取得するための関数
  const getRandomUsers = (data: User[], count: number): User[] => {
    const shuffled = data.sort(() => 0.5 - Math.random())

    return shuffled.slice(0, count)
  }

  const users = getRandomUsers(mockData, 6)

  return res.status(200).json(users)
}
