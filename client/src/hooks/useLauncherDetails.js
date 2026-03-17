import { useEffect, useState } from "react"
import { useNavigate } from "react-router"


export const useLaunchersDetails = (url) => {
    const [error, setError] = useState()
    const [data, setData] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchLauncher = async () => {
            try {
                const res = await fetch(url)
                const { data } = await res.json()
                setData(data)
            } catch (error) {
                setError(error)
            }
        }
        fetchLauncher()
    }, [])

    const deleteLauncher = async (url) => {
        const res = await fetch(url, {
            method: "DELETE"
        })
        const data = await res.json()
        setData(data)
        navigate("/home")
    }

    return { error, data, deleteLauncher }
}