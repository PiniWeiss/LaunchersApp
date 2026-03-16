import { useState } from "react"

const BASE_URL = "http://localhost:3000/api/launchers"

export const createLaunchers = () => {
    const [formData, setFormData] = useState()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async () => {
        setIsLoading(true)
        try {
            const res = await fetch(BASE_URL, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            const { data } = await res.json()
            setSuccess(true)
            return data
        }
        catch (err) {
            console.log(err.message)
            setError(err)
        }finally{
            setForm({})
            setIsLoading(false)
        }
    }
    return { setFormData, error, isLoading, success, handleChange, handleSubmit }
} 
