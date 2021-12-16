import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
  MemoryRouter,
} from 'react-router-dom';
import './style.css';
import { Layout } from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import usersData from './Data.js';
import UsersDetails from './pages/UserDetails.js';
export default function App() {
  const [data, setData] = React.useState('data');

  React.useEffect(() => {
    console.log(JSON.stringify(usersData));
    setData(usersData);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="UsersDetails" element={<UsersDetails data={data} />} />
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
