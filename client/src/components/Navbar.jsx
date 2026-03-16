import React from "react";
import { Link } from 'react-router'
import LogOut from './LogOut'

function Navbar() {
  return (
    <div>
      <h1>Project Name</h1>
      <LogOut />
      <Link to={"/"}>Home</Link>
    </div>
  );
}

export default Navbar;
