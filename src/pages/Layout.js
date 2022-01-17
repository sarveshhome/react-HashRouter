import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/Users">Users</Link>
          </li>
          <li>
            <Link to="/Redux">Redux Call</Link>
          </li>
          <li>
            <Link to="/userefdemo">UseRef demo</Link>
          </li>
          <li>
            <Link to="/APICalltest">APICall</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export { Layout };
