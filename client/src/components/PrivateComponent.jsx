import { Navigate } from "react-router"
import { useAuthStore } from "../store/auth.store"


function PrivateComponent({userTypes, children}) {
    const { user, isLoggedIn, isLoading } = useAuthStore()

    if(isLoading){
        return <div>isLoading...</div>
    }
    if(!isLoggedIn){
        return <Navigate to={"/login"}/>
    }
    
    if(!userTypes.includes(user?.userType)){
        return <Navigate to={`/${userType}`}/>
    }

  return (
    <div>{children}</div>
  )
}

export default PrivateComponent