
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';

export default function Register() {
    const navigate = useNavigate();
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setName] = useState("");
    // const [name, setConfirmPassword] = useState("");
    const API_BASE_URL = 'http://192.168.3.190:63181/';
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    let getValue = (e) => {
        let oldData = { ...formData };
        let inputName = e.target.name;
        let inputValue = e.target.value;
        oldData[inputName] = inputValue;
        setFormData(oldData);
    };
    const resigterUser = (e) => {
        e.preventDefault();
        let payload = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
        }
        axios.post(API_BASE_URL + 'Auth/register', payload)
            .then((r) => {
                console.log(r)
                localStorage.setItem('token', r.data.data.oUser.api_token);
                localStorage.setItem('user', JSON.stringify(r.data.data.oUser));
                // localStorage.setItem('showWelcomeToast', 'true'); // Set the flag to true
                navigate("/");
                // toast.success('Welcome' + r.data.data.oUser.name);

                // Router.push('/home');
            })
            .catch((e) => {
                console.log(e);
            });

    }

    /*     useEffect(() => {
            if (localStorage.getItem('token') !== "" && localStorage.getItem('token') != null) {
                navigate("/home");
            }
        }) */

    return (
        <>
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
                        <form onSubmit={(e) => resigterUser(e)}>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    First Name
                                </label>
                                <input
                                    className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                    type="text"
                                    name='firstName'
                                    value={formData.firstName}
                                    onChange={getValue}
                                    required
                                />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Last Name
                                </label>
                                <input
                                    className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                    type="text"
                                    name='lastName'
                                    value={formData.lastName}
                                    onChange={getValue}
                                    required
                                />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Email Address
                                </label>
                                <input
                                    className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                    type="email"
                                    name='email'
                                    value={formData.email}
                                    onChange={getValue}
                                    required
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
                                    name='password'
                                    value={formData.password}
                                    onChange={getValue}
                                    required
                                />
                                <button
                                    className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
                                >
                                    Forget Password?
                                </button>
                            </div>
                            <div className="mt-8">
                                <button type='submit' className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
                                    Register
                                </button>
                            </div>
                            <div className="mt-4 flex items-center w-full text-center">
                                <p
                                    className="text-xs text-gray-500 capitalize text-center w-full"
                                >
                                    Have already an account?
                                    <Link to="/"> <span className="text-blue-700"> Login</span></Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    );
};
