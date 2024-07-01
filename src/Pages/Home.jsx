import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const HomePage = () => {
  const [user, setUser] = useState({});
  // let location = useLocation();

  const getUser = () => {
    let userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
    console.log(userData);

    // Check if the welcome message should be shown
    if (userData && localStorage.getItem('showWelcomeToast') === 'true') {
      toast.success('Welcome ' + userData.name);
      localStorage.setItem('showWelcomeToast', 'false'); // Set the flag to false
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <ToastContainer />

      <div
        id="home"
        className="w-full min-h-screen p-8 flex items-center bg-gradient-to-b from-white to-gray-400"
      >
        <div className="max-w-7xl mx-auto md:flex md:flex-row-reverse md:items-center">
          <div className="md:w-1/2 md:pr-8 my-11">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20240301104957/skyscraper.png"
              alt="Home"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                Find Your <span className="text-amber-800">Dream Home</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Welcome to our real estate agency, where finding your dream home
                is our top priority. Our team of experienced agents is dedicated
                to providing exceptional service and helping you navigate the
                complex process of buying or selling a property
              </p>

              <div className="text-center md:text-left">
                <form className="flex flex-col md:flex-row gap-4">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Your Email"
                    className="px-4 py-2 bg-white rounded-full shadow-lg focus:outline-none"
                  />
                  <button className="px-6 py-3 bg-amber-800 text-white rounded-full shadow-lg hover:bg-amber-900">
                    Get Started
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
