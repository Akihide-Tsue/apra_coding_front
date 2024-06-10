import { User } from "@/feature/user/type"
import { getProfile, getUsersList } from "@/feature/user/userRepositories"
import { useQueryWrapper } from "@/libs/reactQuery"

export const useUserList = () => {
  const { data, isLoading } = useQueryWrapper<User[], Error>({
    queryKey: ["userListKey"],
    queryFn: () => getUsersList(),
  })

  return {
    isLoading,
    userList: data ? data : [],
  }
}

export const useProfile = () => {
  const { data, isLoading } = useQueryWrapper<User[], Error>({
    queryKey: ["profileKey"],
    queryFn: () => getProfile(),
  })

  return {
    isLoading,
    profile: data ? data : [],
  }
}
