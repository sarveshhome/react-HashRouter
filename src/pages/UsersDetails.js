import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
const UsersDetails = (props) => {
  console.log('i want to id find ');
  return (
    <div>
      <h1>React Dynamic Routing</h1>
      <p>
        <strong>Match Props: </strong>
        <code>{JSON.stringify(match, null, 2)}</code>
      </p>
      <p>
        <strong>Location Props: </strong>
        <code>{JSON.stringify(location, null, 2)}</code>
      </p>
      <ul>
        {/* {data.filter((item) => (
          <div>
            <li>
              <p>{item.name}</p>
            </li>
          </div>
        ))} */}
      </ul>
      {/* <h3>This is current user id: {data.id}</h3> */}
    </div>
  );
};

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

export default UsersDetails;
