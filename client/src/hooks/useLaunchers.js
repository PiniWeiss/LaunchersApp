import { useEffect } from "react"
import { useState } from "react"

const BASE_URL = "http://localhost:3000/api/launchers"

export const useLaunchers = () => {
    const [launchers, setLaunchers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [filters, setFilters] = useState({ city: "", rocketType: "" })

    useEffect(() => {
        const loadLaunchers = async () => {
            setIsLoading(true)
            try {
                const res = await fetch(BASE_URL, {
                    credentials: "include"
                })
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

    const handleSearchChange = (e) => {
        setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSearchClick = (e) => {
        e.preventDefault()
        const updatedList = launchers.filter(l =>
            filters.city && filters.rocketType ?
                l.city.toLowerCase().includes(filters.city.toLowerCase()) &&
                l.rocketType.toLowerCase().includes(filters.rocketType.toLowerCase()) : filters.city ?
                    l.city.toLowerCase().includes(filters.city.toLowerCase()) :
                    l.city.toLowerCase().includes(filters.city.toLowerCase())
        )
        console.log(filters)
        setLaunchers(updatedList)
    }

    return { launchers, error, isLoading, handleSearchChange, handleSearchClick }
}