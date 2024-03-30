import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <p className="navbar-brand mx-auto" href="#">Todo App</p>
      </div>
    </nav>
  );
};

export default Navbar;