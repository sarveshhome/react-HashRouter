import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UsersDetails(props) {
  const [data, setData] = useState(props.data);
  const [isfound, setIsFound] = useState(true);
  return (
    <div>
      <h1>React Dynamic Routing</h1>
      <ul>
        {data.map((item) => (
          <div>
            <li>
              <Link to={'/user/' + item.id}>{item.name}</Link>
            </li>
          </div>
        ))}
      </ul>
      <h3>This is current user id: {data.id}</h3>
    </div>
  );
}

export default UsersDetails;
