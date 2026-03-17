import { useEffect, useState } from "react"
import { useNavigate } from "react-router"


export const useUserDetails = (url) => {
    const [error, setError] = useState()
    const [data, setData] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(url)
                const { data } = await res.json()
                setData(data)
            } catch (error) {
                setError(error)
            }
        }
        fetchUser()
    }, [])

    const deleteUser = async (url) => {
        const res = await fetch(url, {
            method: "DELETE"
        })
        const data = await res.json()
        setData(data)
        navigate("/users")
    }

    return { error, data, deleteUser }
}