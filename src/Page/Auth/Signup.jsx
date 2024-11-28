import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [consfirmPassword, setConsfirmPassword] = useState('')
    const [username, setUsername] = useState('')
    const { signup } = useAuth()
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (consfirmPassword !== password) {
            alert('password does not match')
            return;
        }
        try {

            await signup(username, password)
            alert('signup successful')
            navigate('/home')


        } catch (error) {
            alert('signup failed' + error.message)

        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-orange-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-700">Signup</h2>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                            onChange={e => {
                                setUsername(e.target.value)

                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"

                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                            onChange={e => {
                                setConsfirmPassword(e.target.value)

                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 mt-4 text-white bg-orange-500 rounded-lg hover:bg-orange-600"

                    >
                        Signup
                    </button>
                </form>
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Already have an account?{' '}
                    <a href="/login" className="text-orange-500 hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
