import Link from "next/link"
import { useRouter } from "next/router"

export default function User() {
  const router = useRouter()

  return (
    <div style={{ minHeight: "100vh", padding: "40px" }}>
      <div>{router.query.userId}です</div>

      <Link href="/">
        <button
          style={{
            width: "100%",
            border: "1px solid #000",
            padding: "8px",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
        >
          戻る
        </button>
      </Link>
    </div>
  )
}
