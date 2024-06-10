import { User } from "@/feature/user/type"
import { getProfile, getUsersList } from "@/feature/user/userRepositories"
import { useQueryWrapper } from "@/libs/reactQuery"

export const useUserList = () => {
  const { data, isLoading } = useQueryWrapper<User[], Error>({
    queryKey: ["userListKey"],
    queryFn: () => getUsersList(),
    refetchInterval: 10000, // 10秒ごとに再フェッチ
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
    refetchInterval: 10000, // 10秒ごとに再フェッチ
  })

  return {
    isLoading,
    profile: data,
  }
}
