import { Link } from 'react-router'
import "./NavBar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <h1 >LauncherApp</h1>
      <ul className='navbar-links'>
     <li> <Link className='link' to={"/"}>Home</Link></li>
      <li><Link className='link' to={"/addlauncher"}>Add Launcher</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
