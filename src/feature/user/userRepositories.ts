export const getUsersList = async () => {
  const response = await fetch("/api/user")
  const data = await response.json()

  return data
}

export const getProfile = async () => {
  const response = await fetch("/api/profile")
  const data = await response.json()

  return data
}
