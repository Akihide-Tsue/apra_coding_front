import { useMyProfile, useUserList } from "@/feature/user/user.hooks"

export default function Home() {
  const { userList } = useUserList()
  const { myProfile } = useMyProfile()

  console.log("userList", userList)
  console.log("myProfile", myProfile)

  return (
    <div style={{ padding: "40px" }}>
      <div>ここに追記して下さい 🚀</div>
    </div>
  )
}
