import React from 'react';
import { TbFaceIdError } from "react-icons/tb";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <TbFaceIdError className='w-full h-28'/>
                <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
                <p className="text-lg text-gray-700 mb-6">Something went wrong. We can't seem to find the page you're looking for.</p>
                <p className="text-gray-600 mb-6">Error code: 404</p>
                <a href="/" className="text-blue-600 hover:underline">Go back to the homepage</a>
            </div>
        </div>
    );
};

export default ErrorPage;
