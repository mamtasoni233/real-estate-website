import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';
// import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [user, setUser] = useState({})
  const navigate = useNavigate();
  // const API_BASE_URL = 'http://192.168.3.190:63181/';
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (localStorage.getItem('token') === "" || localStorage.getItem('token') === null) {
      navigate("/");
    }
  });
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 33) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /*  const getUser = () => {
     let userData = localStorage.getItem('user');
     setUser(userData);
   } */
  const logoutAction = () => {
    console.log('logout api');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // localStorage.removeItem('welcomed');
    navigate("/");
    /*   if (!localStorage.getItem('welcomed')) {
        toast.error('Please log in to access further.....');
      } */

    // let uData = localStorage.getItem('token');
    /*  if (!uData) {
       toast.error("Please log in to access further.....");
       // Router.push('/');
       navigate("/");
       return;
     } */
    // axios.delete(API_BASE_URL + 'Auth/logout')
    //   .then((r) => {
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('user');
    //     navigate("/");
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //   });
  }

  return (
    <>
      <div
        className={`fixed top-0 z-50 w-full h-[70px] flex justify-between items-center px-4  text-black ${isScrolled ? 'bg-white' : 'bg-transparent'}`}
      >
        <div className="text-4xl cursor-pointer inline-flex items-center text-amber-800" >
          <Link to="/home">
            Real Estate
          </Link>
        </div>
        <div className="md:hidden" onClick={handleMenuClick}>
          {showMenu ? (
            <svg
              className="h-6 w-6 text-black cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.95 5.879l-1.414-1.414L10 8.586 6.464 5.05 5.05 6.464 8.586 10l-3.536 3.536 1.414 1.414L10  11.414l3.536 3.536 1.414-1.414L11.414 10l3.536-3.536z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 text-black cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <ul className="hidden md:flex">
          <li>
            <Link to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/features">
              Our Features
            </Link>
          </li>
          <li>
            <Link to="/sales">
              On Sale
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex">
          <button onClick={logoutAction} className="px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-900 hover:text-white mx-2">
            Logout
          </button>
        </div>
        <div className={`${showMenu ? 'flex' : 'hidden'} md:hidden flex flex-col bg-amber-800 text-white  w-full absolute top-16 left-0 z-10`} >
          <Link
            to="home"
            className="p-4 hover:bg-gray-700 cursor-pointer"
            onClick={handleMenuClick}
          >
            Home
          </Link>
          <Link
            to="about"
            className="p-4 hover:bg-gray-700 cursor-pointer"
            onClick={handleMenuClick}
          >
            About Us
          </Link>
          <Link
            to="feature"
            className="p-4 hover:bg-gray-700 cursor-pointer"
            onClick={handleMenuClick}
          >
            Our Features
          </Link>
          <Link
            to="sale"
            className="p-4 hover:bg-gray-700 cursor-pointer"
            onClick={handleMenuClick}
          >
            On Sale
          </Link>
          <button
            className="p-4 hover:bg-gray-700 cursor-pointer"
            onClick={logoutAction}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
