import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/mobiles"> mobiles </Link> |<Link to="/laptops"> laptops </Link>
    </div>
  );
};

export default NavBar;
