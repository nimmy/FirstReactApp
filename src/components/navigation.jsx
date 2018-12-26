import React from "react";

const Navbar = ({ totalCount }) => {
  return (
    <React.Fragment>
      <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <h2 className="label label-default"><span>Cart Items: </span>{totalCount}</h2>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
