import React from "react";
 import {NavLink} from 'react-router-dom'
const Nav = () => {
  const navStyle={
    color:'black'
  }
  return (
    <div>
      
      <nav>
        <ul className="nav-links">
         <NavLink style={{navStyle}} to="/about"> <li>About</li></NavLink>
         <NavLink style={{navStyle}} to="/shop"> <li>Shop</li></NavLink>
        
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
