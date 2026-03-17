import { Link } from 'react-router'
import "./NavBar.css"
import { useAuthStore } from '../store/auth.store';

function Navbar() {
  const { user, isLoggedIn, logOut } = useAuthStore()
  return (
    <div className='navbar'>
      <h1 >LauncherApp</h1>
      <ul className='navbar-links'>
     {user && <li> <Link className='link' to={"/"}>Home</Link></li>}
      {user?.userType === "admin"&& <li><Link className='link' to={"/addlauncher"}>Add Launcher</Link></li>}
      {isLoggedIn && <li><button onClick={logOut}>LogOut</button></li>}
      </ul>
    </div>
  );
}

export default Navbar;
