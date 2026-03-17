
import { useParams } from "react-router"
import { useUserDetails } from "../hooks/useUserDetails"
import { useAuthStore } from "../store/auth.store"

const URL = "http://localhost:3000/api/Users"

function UserDetails() {
    const { id } = useParams()
    const { user } = useAuthStore()
    const { error, data, deleteUser } = useUserDetails(URL + "/" + id)
    if (error) {
        return (
            <p>{error.message}</p>
        )
    }
    return (
        <div>
            <h3>User Name: {data?.name}</h3>
            <p>City: {data?.city}</p>
            <p>Rocket Type: {data?.rocketType}</p>
            <p>Latitude: {data?.latitude}</p>
            <p>Longitude: {data?.longitude}</p>
            <p>Uploaded Date: {data?.createdAt}</p>
            {user.userType === "airSoldier" ? <div></div> : <button onClick={() => deleteUser}>delete</button>}
        </div>
    )
}

export default UserDetails