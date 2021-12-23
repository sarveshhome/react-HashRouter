import React from 'react';

import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
  MemoryRouter,
} from 'react-router-dom';
import { createStore } from 'redux';
import './style.css';
import { Layout } from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import usersData from './Data.js';
import UsersDetails from './pages/UsersDetails.js';
import User from './pages/Users.js';
import ValueStore from './pages/ReduxCall.js';
import UseRefDemo from './pages/UseRefDemo.js';
export default function App() {
  const [data, setData] = React.useState('data');

  React.useEffect(() => {
    setData(usersData);
  }, []);
  const ids = 12;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact index element={<Home />} />
          <Route exact path="blogs" element={<Blogs />} />
          <Route exact path="contact" element={<Contact />} />
          <Route path="Redux" element={<ValueStore />} />
          <Route exact path="Users" element={<User data={data} />} />
          <Route
            path="UsersDetails/:id"
            element={<UsersDetails data={data} />}
          />
          <Route exact path="userefdemo" element={<UseRefDemo />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <HashRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="blogs" element={<Blogs />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </HashRouter>
    // <MemoryRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="blogs" element={<Blogs />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </MemoryRouter>
  );
}
