import { useEffect } from "react"
import { useSelector } from "react-redux"
import Cards from "../components/Cards"

export default function Home() {
  const user = useSelector((state) => state.user.value)
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user.user))
  }, [user])

  return (
    <>
      <Cards />
    </>
  )
}
