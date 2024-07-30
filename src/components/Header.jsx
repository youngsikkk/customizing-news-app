import React from "react";
import SearchBar from "./SearchBar";
import { TbMoon } from "react-icons/tb";
const Header = () => {
    return(
        <nav className="flex justify-between border-b-2 items-center">
            <h1 className="text-3xl p-4 font-bold"><a href="/">Hello world</a></h1>
            
            <div className="flex">
                <ul className="p-4 hidden lg:flex">
                    <li className="p-4 text-gray-600/60 font-bold"><a href="/service">서비스</a></li>
                    <li className="p-4 text-gray-600/60 font-bold"><a href="/tech">기술</a></li>
                    <li className="p-4 text-gray-600/60 font-bold"><a href="/media">미디어</a></li>
                    <li className="p-4 text-gray-600/60 font-bold"><a href="/story">스토리</a></li>
                </ul>
                <div className="flex p-4 justify-center items-center">
                    <SearchBar/>
                    <button className="p-4"><TbMoon className="text-2xl"/></button>
                    <button className="p-4"><a href="/signup">Sign Up</a></button>
                    <button className="p-4"><a href="login">Sign In</a></button>
                </div>
            </div>
        </nav>
    )
}

export default Header;