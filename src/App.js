import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Features from './Components/Feature';
import Sales from './Components/Onsale';
import About from './Components/About';
import Page404 from './Components/Page404';

import './index.css';
// import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';

// A wrapper component to include Navbar and Footer for every route
const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);
const AuthLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
/* let AllRoutes = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <About />,
      },
      {
        path: '/features',
        element: <Features />,
      },
      {
        path: '/sales',
        element: <Sales />,
      },
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
]); */
function App() {
  /*  return <RouterProvider router={AllRoutes} />; */
  return (
    <>
      <Router>
        <Routes>
          {/* Auth Layout Routes */}
          <Route element={<AuthLayout />}>
            <Route
              path="/register"
              element={<Register />}
              activeclassname="active"
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Page404 />} />
          </Route>

          {/* Main Layout Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/sales" element={<Sales />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
