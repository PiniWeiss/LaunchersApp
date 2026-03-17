import { useEffect } from "react"
import { useState } from "react"

const BASE_URL = "http://localhost:3000/api/auth/users"

export const useUsers = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadusers = async () => {
            setIsLoading(true)
            try {
                const res = await fetch(BASE_URL, {
                    credentials: "include"
                })
                if (!res.ok) throw new Error("Faild to fetch users")
                const data = await res.json()
                setUsers(data.data)

            } catch (err) {
                console.log(err.message)
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }
        loadusers()
    }, [])



    return { users, error, isLoading }
}