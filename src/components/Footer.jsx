import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-1/4 mb-4">
                    <h2 className="text-lg font-semibold mb-2">사이트 링크</h2>
                    <ul>
                    <li><a href="/" className="hover:underline">홈</a></li>
                    <li><a href="/about" className="hover:underline">회사 소개</a></li>
                    <li><a href="/contact" className="hover:underline">연락처</a></li>
                    <li><a href="/privacy" className="hover:underline">개인정보 보호정책</a></li>
                    </ul>
                </div>

                <div className="w-full md:w-1/4 mb-4">
                    <h2 className="text-lg font-semibold mb-2">연락처</h2>
                    <p>이메일: <a href="mailto:contact@example.com" className="hover:underline">contact@example.com</a></p>
                    <p>전화번호: <a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a></p>
                </div>

                <div className="w-full md:w-1/4 mb-4">
                    <h2 className="text-lg font-semibold mb-2">소셜 미디어</h2>
                    <div className="flex space-x-4">
                    <a href="https://facebook.com" className="text-white hover:text-blue-500">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.07c0-5.52-4.48-10-10-10s-10 4.48-10 10c0 4.95 3.63 9.05 8.36 9.87v-6.98h-2.52v-2.42h2.52v-1.81c0-2.49 1.51-3.86 3.72-3.86 1.05 0 2.14.08 2.42.12v2.8h-1.66c-1.31 0-1.56.63-1.56 1.55v1.78h2.88l-.38 2.42h-2.5v6.97c4.76-.81 8.42-4.91 8.42-9.86z"/></svg>
                    </a>
                    <a href="https://twitter.com" className="text-white hover:text-blue-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.16 10.16 0 01-2.828.775A5.03 5.03 0 0022.357 2a10.14 10.14 0 01-3.212 1.227A5.067 5.067 0 0016.616.5c-2.82 0-5.105 2.263-5.105 5.04 0 .394.048.775.136 1.144A14.396 14.396 0 011.675 2.877 5.048 5.048 0 003.279 7.57 5.03 5.03 0 01.986 8.31c0 .194.017.385.048.573A5.056 5.056 0 001.7 10.15a5.063 5.063 0 01-2.31-.645v.061a5.043 5.043 0 004.063 4.97A5.096 5.096 0 01.99 16a5.08 5.08 0 001.046.139A5.077 5.077 0 005 21.57a10.112 10.112 0 01-6.305 1.7A10.197 10.197 0 012 20.43a14.248 14.248 0 007.837 2.293c9.404 0 14.529-8.171 14.529-15.3 0-.235-.004-.47-.014-.705A10.14 10.14 0 0023 3z"/></svg>
                    </a>
                    </div>
                </div>
                </div>

                <div className="text-center mt-4 border-t border-gray-700 pt-4">
                <p>&copy; 2024 뉴스피드. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

