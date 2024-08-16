import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-1/4 mb-4">
                    <h2 className="text-lg font-semibold mb-2">Site Link</h2>
                    <ul>
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/about" className="hover:underline">About</a></li>
                    <li><a href="/mostpopular" className="hover:underline">Most Popular</a></li>
                    <li><a href="/articlesearch" className="hover:underline">Article Search</a></li>
                    <li><a href="/books" className="hover:underline">Books</a></li>
                    <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="w-full md:w-1/4 mb-4">
                    <h2 className="text-lg font-semibold mb-2">Contact</h2>
                    <p>Email: <a href="mailto:hys7309.dev@gmail.com" className="hover:underline">hys7309.dev@gmail.com</a></p>
                </div>

                <div className="w-full md:w-1/4 mb-4">
                    <h2 className="text-lg font-semibold mb-2">Social</h2>
                    <div className="flex space-x-4">
                    <a href="https://github.com/youngsikkk" target="_blank" className="text-white hover:text-gray-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61a3.17 3.17 0 00-1.33-1.75c-1.09-.74.08-.73.08-.73a2.51 2.51 0 011.84 1.24 2.54 2.54 0 003.48 1 2.53 2.53 0 01.75-1.6c-2.67-.3-5.48-1.33-5.48-5.94a4.64 4.64 0 011.24-3.23 4.32 4.32 0 01.12-3.19s1-.32 3.26 1.23a11.28 11.28 0 015.94 0C16.38 5.8 17.38 6.1 17.38 6.1a4.32 4.32 0 01.12 3.19 4.64 4.64 0 011.24 3.23c0 4.61-2.81 5.64-5.49 5.93a2.83 2.83 0 01.81 2.2v3.24c0 .32.21.69.82.58A12 12 0 0012 0z"/></svg>
                    </a>
                    </div>
                </div>
                </div>

                <div className="text-center mt-4 border-t border-gray-700 pt-4">
                <p>&copy; 2024 NewsFeed. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

