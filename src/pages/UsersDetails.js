import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
const UsersDetails = (props) => {
  const locations = useLocation();
  console.log(locations);
  console.log(locations.pathname.split('/')[2]);
  const id = locations.pathname.split('/')[2];
  console.log(JSON.stringify(props.data));
  const [data, setData] = useState(props.data);
  const filterdata =
    !data &&
    data.filter((e) => {
      return e.id == id;
    });
  console.log(JSON.stringify(filterdata));
  return (
    <>
      <ul>
        {filterdata.length > 0 &&
          filterdata.map((item, index) => (
            <div>
              <li key={index}>
                <>{item.id}</> | <>{item.name}</> | <>{item.email}</>
              </li>
            </div>
          ))}
      </ul>
    </>
  );
};

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

export default UsersDetails;
