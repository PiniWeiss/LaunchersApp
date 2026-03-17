
import { useParams } from "react-router"
import { useLaunchersDetails } from "../hooks/useLauncherDetails"
import { useAuthStore } from "../store/auth.store"

const URL = "http://localhost:3000/api/launchers"

function LauncherDetails() {
  const { id } = useParams()
  const { user } = useAuthStore()
  const { error, data, deleteLauncher } = useLaunchersDetails(URL + "/" + id)
  if (error) {
    return (
      <p>{error.message}</p>
    )
  }
  return (
    <div>
      <h3>Launcher Name: {data?.name}</h3>
      <p>City: {data?.city}</p>
      <p>Rocket Type: {data?.rocketType}</p>
      <p>Latitude: {data?.latitude}</p>
      <p>Longitude: {data?.longitude}</p>
      <p>Uploaded Date: {data?.createdAt}</p>
      {user.userType === "airSoldier" ? <div></div> : <button onClick={() => deleteLauncher}>delete</button>}
    </div>
  )
}

export default LauncherDetails