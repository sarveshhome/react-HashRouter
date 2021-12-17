import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Users = (props) => {
  const pathnames = props.location;
  console.log(props.location);
  console.log(props.match);
  const [data, setData] = useState(props.data);
  const [isfound, setIsFound] = useState(true);
  return (
    <div>
      <h1>React Dynamic Routing</h1>
      <ul>
        {data.map((item) => (
          <div>
            <li>
              <Link to={'/UsersDetails/' + item.id}>{item.name}</Link>
            </li>
          </div>
        ))}
      </ul>
      <h3>This is current user id: {data.id}</h3>
    </div>
  );
};

export default Users;
