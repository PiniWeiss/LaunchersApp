import { useState } from "react"

const BASE_URL = "http://localhost:3000/api/launchers"

export const useCreateLauncher = () => {
    const [formData, setFormData] = useState()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [successData, setSuccessData] = useState()

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const res = await fetch(BASE_URL, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            const { data } = await res.json()
            setSuccess(true)
            setSuccessData(data)
        }
        catch (err) {
            console.log(err.message)
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }
    return { setFormData,setSuccess, error, isLoading, success,successData , handleChange, handleSubmit }
} 
