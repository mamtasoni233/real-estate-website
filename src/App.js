import Navbar from './Components/Navbar';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Features from './Pages/Feature';
import Sales from './Pages/Onsale';
import About from './Pages/About';
import Page404 from './Pages/Page404';

import './index.css';
// import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import { Outlet, Route, BrowserRouter, Routes } from 'react-router-dom';
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
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Auth Layout Routes */}
          <Route element={<AuthLayout />}>
            <Route
              path="/register"
              element={<Register />}
              activeclassname="active"
            />
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Page404 />} />
          </Route>

          {/* Main Layout Routes */}
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/sales" element={<Sales />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
