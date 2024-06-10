import { useProfile, useUserList } from "@/feature/user/user.hooks"

export default function Home() {
  const { userList } = useUserList()
  const { profile } = useProfile()

  console.log("userList", userList)
  console.log("profile", profile)

  const isProfileInUserList = userList.some((user) => user.id === profile?.id)

  const filteredUserList =
    profile && "id" in profile
      ? userList.filter((user) => user.id !== profile.id)
      : userList

  const users =
    profile && isProfileInUserList
      ? [profile, ...filteredUserList].slice(0, 6)
      : filteredUserList

  return (
    <div style={{ padding: "40px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {users.map((user) => {
          const isProfileId = user.id === profile?.id

          return (
            <a
              href={`users/${profile?.id}`}
              key={user.id}
              style={{
                height: "40px",
                border: "1px solid black",
                backgroundColor: isProfileId ? "yellow" : undefined,
                display: "flex",
                alignItems: "center",
                padding: "0 8px",
              }}
            >
              {user.displayName}
            </a>
          )
        })}
      </div>
    </div>
  )
}
