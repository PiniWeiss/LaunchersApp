import { useEffect } from "react"
import { useState } from "react"

const BASE_URL = "http://localhost:3000/api/launchers"

export const useLaunchers = () => {
    const [launchers, setLaunchers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadLaunchers = async () => {
            setIsLoading(true)
            try {
                const res = await fetch(BASE_URL)
                if (!res.ok) throw new Error("Faild to fetch launchers")
                const data = await res.json()
                setLaunchers(data.data)

            } catch (err) {
                console.log(err.message)
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }
        loadLaunchers()
    }, [])
    return { launchers, error, isLoading }
}