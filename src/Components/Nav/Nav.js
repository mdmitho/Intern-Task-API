import React from 'react';
import { Link } from "react-router-dom";
const Nav = () => {
    return (
      <div>
        <h1 className="fs-1 fw-bold mt-5">Manage Comments</h1>
        <Link to="/accordion" type="button" class="btn btn-dark mt-3">
          Active Comments
        </Link>
        <button type="button" class="btn btn-dark ms-5 mt-3">
          Deleted Comments
        </button>
      </div>
    );
};

export default Nav;