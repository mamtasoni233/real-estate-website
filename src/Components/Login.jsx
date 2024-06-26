import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validationErrors, setValidationErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const API_BASE_URL = 'http://127.0.0.1:57173/';

    /* useEffect(() => {
        if (localStorage.getItem('token') !== "" && localStorage.getItem('token') !== null) {
            navigate("/");
        }
        console.log(localStorage.getItem('token'))
    }, []); */
    /* const onSubmit = (data: any) => {

        loginApi(data).then(function (response: any) {
            let result = response.data.data;
            localStorage.setItem('token', result.token);
            localStorage.setItem('user', JSON.stringify(result.user));
            router.push('/');
            toast.current?.show({ severity: 'success', summary: 'success', detail: response.data.messages[0] });
        }).catch(function (error) {
            toast.current?.show({ severity: 'error', summary: 'Error', detail: error.messages && error.messages[0] });
        });
    }; */
    /*   const loginApi = async (userData) => {
          return new Promise((resolve, reject) => {
              axios.post(API_BASE_URL + 'Login/index', userData)
                  .then((response) => {
                      if (response.data.error) {
                          reject(response.data);
                      } else {
                          resolve(response);
                      }
                  })
                  .catch((error) => {
                      reject(error);
                  });
          });
      }; */
    const loginAction = (e) => {
        setValidationErrors({})
        e.preventDefault();
        setIsSubmitting(true)
        let payload = {
            email: email,
            password: password,
        }
        axios.post(API_BASE_URL + 'Login/index', payload)
            .then((r) => {
                setIsSubmitting(false)
                localStorage.setItem('token', r.data.token)
                navigate("/home");
                // Router.push('/home');
                toast.success("Welcome you are logged in....");
            })
            .catch((e) => {
                setIsSubmitting(false)
                if (e.response.data.errors !== undefined) {
                    setValidationErrors(e.response.data.errors);
                }
                if (e.response.data.error !== undefined) {
                    setValidationErrors(e.response.data.error);
                }
            });
        /* loginApi(payload).then(function (response) {
            let result = response.data.data;
            localStorage.setItem('token', result.token);
            localStorage.setItem('user', JSON.stringify(result.user));
            Router.push('/');
            toast.current?.show({ severity: 'success', summary: 'success', detail: response.data.messages[0] });
        }).catch(function (error) {
            toast.current?.show({ severity: 'error', summary: 'Error', detail: error.messages && error.messages[0] });
        }); */

    }

    // REACT_APP_API_URL = "http://127.0.0.1:57173/Login/index/"
    /* let getLogin = () => {
        axios
            .get('https://dummyjson.com/products/categories')
            .then((res) => res.data)
            .then((finalRes) => {
                setFinalCategory(finalRes);
            });
    }; */
    return (
        <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
            <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
                <div
                    className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
                    style={{
                        backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
                    }}
                ></div>
                <div className="w-full p-8 lg:w-1/2">
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                    <form onSubmit={(e) => { loginAction(e) }} >
                        {Object.keys(validationErrors).length !== 0 &&
                            <p className='text-center '><small className='text-danger'>Incorrect Email or Password</small></p>
                        }
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email Address
                            </label>
                            <input
                                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </div>
                        <div className="mt-4 flex flex-col justify-between">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Password
                                </label>
                            </div>
                            <input
                                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                type="password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                required
                            />
                            <button
                                className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
                            >
                                Forget Password?
                            </button>
                        </div>
                        <div className="mt-8">
                            <button type='submit' disabled={isSubmitting} className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
                                Login
                            </button>
                        </div>
                        <div className="mt-4 flex items-center w-full text-center">
                            <p
                                className="text-xs text-gray-500 capitalize text-center w-full"
                            >
                                Don&apos;t have any account yet?
                                <Link to="/register"> <span className="text-blue-700"> Sign Up</span></Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
