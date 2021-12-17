import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
const UsersDetails = ({ props, match, location }) => {
  console.log('i want to id find ' + JSON.stringify(props));
  const {
    params: { id },
  } = match;
  return (
    <>
      <p>
        <strong>User ID: </strong>
        {id}
      </p>
      <p>
        <strong>User Name: </strong>
      </p>
    </>
  );
};

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

export default UsersDetails;
