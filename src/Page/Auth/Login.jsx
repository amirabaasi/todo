import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password)
            navigate('/')

        } catch (error) {
            alert('login failed' + error.message)
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-orange-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                            onChange={e => setUsername(e.target.value)}
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
                    <button
                        type="submit"
                        className="w-full px-4 py-2 mt-4 text-white bg-orange-400 rounded-lg hover:bg-orange-500"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Don't have an account?{' '}
                    <a href="/signup" className="text-orange-500 hover:underline">
                        Signup
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
