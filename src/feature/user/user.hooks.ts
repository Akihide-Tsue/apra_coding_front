import { User } from "@/feature/user/type"
import { getProfile, getUsersList } from "@/feature/user/userRepositories"
import { useQueryWrapper } from "@/libs/reactQuery"

export const useUserList = () => {
  const { data, isLoading } = useQueryWrapper<User[], Error>({
    queryKey: ["userListKey"],
    queryFn: () => getUsersList(),
    refetchInterval: 8000, // 8秒ごとに再フェッチ
  })

  return {
    isLoading,
    userList: data ? data : [],
  }
}

export const useProfile = () => {
  const { data, isLoading } = useQueryWrapper<User, Error>({
    queryKey: ["profileKey"],
    queryFn: () => getProfile(),
    refetchInterval: 8000, // 8秒ごとに再フェッチ
  })

  return {
    isLoading,
    profile: data,
  }
}
