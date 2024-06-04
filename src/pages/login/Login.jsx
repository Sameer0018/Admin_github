import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://6scc5any5zshy5w475dnipwtzq0whivl.lambda-url.ap-south-1.on.aws/api/User/UserLogin', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userName, password })
            });
            const data = await response.json();

            if (response.ok) {
                console.log(data.token);
                console.log(data.data.role);
                console.log('Successfully logged in, welcome');

                // Store user credentials in sessionStorage
                sessionStorage.setItem('token', data.token);
                sessionStorage.setItem('role', data.data.role);

                const logoutTime = Date.now() + 120000; // Set logout time 2 minutes from now

                // Set a timeout to remove user credentials after 2 minutes
                setTimeout(() => {
                    sessionStorage.removeItem('token');
                    sessionStorage.removeItem('role');
                    console.log("Session expired, user logged out");
                }, 120000);

                navigate('/RegionsTable');
            } else {
                // Handle error
                console.error('Login failed');
            }
        } catch (error) {
            console.log('error', error);
        }
    };

    return (
          <div className="rounded-2xl mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 xl:p-6 dark:bg-gray-800 dark:border-gray-700" style={{ backgroundColor: "#e9f8f9" }}>
                <h1 className="text-center font-bold text-3xl mt-8">Welcome to Airhub!</h1>
                <h4 className="text-center font-semibold text-lg mt-4">Please Sign in to continue</h4>
                <label className="block">Email</label>
                <input
                    style={{ backgroundColor: "#e9f8f9" }}
                    type="text"
                    id='username'
                    placeholder="Email Address"
                    name="email" required
                    className="w-full p-4 border-2 border-black rounded-lg bg-e9f8f9"
                    onChange={handleUserNameChange}
                />
                <br /><br />
                <div className="flex items-center justify-between">
                    <label className="block">Password </label>
                    <span className="text-aqua-700">Forgot Password?</span>
                </div>
                <input
                    style={{ backgroundColor: "#e9f8f9" }}
                    type="password"
                    id="password"
                    placeholder="Enter your Password" name="password" required
                    className="w-full p-4 border-2 border-black rounded-lg bg-e9f8f9"
                    onChange={handlePasswordChange}
                />
                <br />
                <div className="btn flex items-center justify-between">
               
                    <button
                        className='rounded-full m-2 text-white w-3/6 px-4 py-4 shadow-md hover:bg-white transition duration-200 ease-in'
                        style={{ background: 'linear-gradient(to bottom right, #e8cd4d, #eebc3a, #f1b230, #f8a01c)' }}
                        onClick={handleSubmit}
                    >
                        Sign In
                    </button>
                </div>
                <h4 className="text-center pt-8 text-9ebbbf">Don't have an Account? <span className="text-2c8686 font-semibold">Signup</span></h4>
            </div>
    );
}

export default Login;