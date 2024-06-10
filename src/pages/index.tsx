import { useProfile, useUserList } from "@/feature/user/user.hooks"

export default function Home() {
  const { userList } = useUserList()
  const { profile } = useProfile()

  console.log("userList", userList)
  console.log("profile", profile)

  return (
    <div style={{ padding: "40px" }}>
      <div>ここに追記して下さい 🚀</div>
    </div>
  )
}
