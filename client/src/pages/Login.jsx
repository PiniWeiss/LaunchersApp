
import { useEffect, useState } from 'react'
import { useAuthStore } from '../store/auth.store'
import { useNavigate } from 'react-router'

function Login() {

    const { user, isLoggedIn, isLoading, error, login } = useAuthStore()
    const [formData, setFormData] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn && user) {
            navigate(`/${user.userType}`)
        }
    }, [isLoggedIn, user])

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const userFromFrtch = login(formData.userName, formData.password)
        if (userFromFrtch.userType === "admin") navigate("/admin")
        if (userFromFrtch.userType === "airSoldier") navigate("/airSoldier")
        if (userFromFrtch.userType === "intelligenceSoldier") navigate("/intelligenceSoldier")
    }

    return (
        <div>
            <h2>Log In </h2>
            <p>Enter your username and password to access</p>

            {error && <h2>Wrong username or password</h2>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label >User Name</label>
                    <input name='userName' type="text" onChange={handleChange} />

                </div>
                <div>
                    <label>Password</label>
                    <input name='password' type="password" onChange={handleChange} />
                </div>
                <button type='submit'>{isLoading ? "Loading.." : "Submit"}</button>
            </form>
        </div>
    )
}

export default Login