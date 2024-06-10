import { useRouter } from "next/router"

export default function User() {
  const router = useRouter()

  return (
    <div style={{ minHeight: "100vh", padding: "40px" }}>
      <div>{router.query.userId}です</div>
    </div>
  )
}
