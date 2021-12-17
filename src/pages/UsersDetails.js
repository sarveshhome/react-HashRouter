import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const UsersDetails = ({ match }) => {
  const {
    params: { id },
  } = match;
  alert(id);
  const pathnames = props.location;
  alert(props.match.params.id);
  const [data, setData] = useState(props.data);

  return (
    <div>
      <h1>React Dynamic Routing</h1>
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

export default UsersDetails;
