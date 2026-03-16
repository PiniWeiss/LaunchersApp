import { useEffect } from "react"
import { useState } from "react"

const BASE_URL = "http://localhost:3000/api/launchers"

export const useLaunchers = () => {
    const [launchers, setLaunchers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [filters, setFilters] = useState({ city: "", rocketType: "" })
    const [filteredLaunchers, setFilteredLaunchers] = useState([])

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

    const handleSearchChange = (e) => {
        setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSearchClick = (e) => {
        e.preventDefault()
        const updatedData = launchers.filter(l => l.city === filter.city && l.rocketType === filters.rocketType)
        setFilteredLaunchers(updatedData)
    }

    return { launchers, error, isLoading, handleSearchChange, handleSearchClick }
}