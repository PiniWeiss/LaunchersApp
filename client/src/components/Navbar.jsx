import React from "react";
import { Link } from 'react-router'

function Navbar() {
  return (
    <div>
      <h1>LauncherApp</h1>
      <Link to={"/"}>Home</Link>
    </div>
  );
}

export default Navbar;
