"use client";
import React, { useState } from "react";
import { FaGoogle, FaApple, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // 회원가입 로직을 추가하세요
    };

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="passwordCheck" className="block text-sm font-medium text-gray-700">Password Recheck</label>
                        <input
                            id="passwordCheck"
                            type="password"
                            placeholder="Re-enter your password"
                            value={passwordCheck}
                            onChange={(e) => setPasswordCheck(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-6 space-y-4">
                    <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-[#fff] hover:bg-[#357ae8] focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <FcGoogle className="mr-2 text-black" />
                        Log in with Google
                    </button>
                    <button className="w-full flex items-center text-white justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-[#000000] hover:bg-[#333333] focus:outline-none focus:ring-2 focus:ring-gray-500">
                        <FaApple className="mr-2 text-white" />
                        Log in with Apple
                    </button>
                    <button className="w-full flex items-center justify-center py-2 px-4 border text-gray-300 border-gray-300 rounded-md shadow-sm bg-[#181717] hover:bg-[#333333] focus:outline-none focus:ring-2 focus:ring-gray-500">
                        <FaGithub className="mr-2 text-white" />
                        Log in with GitHub
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
