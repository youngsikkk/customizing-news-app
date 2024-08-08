"use client"
import React from "react";
import { TbMoon } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import { useMenuStore } from "../store/store"
const Header = () => {
    const { menu, setMenu, closeMenu } = useMenuStore();

    return(
        <nav className="flex justify-between border-b-2 items-center">
            <div className="flex">
            <h1 className="text-3xl p-6 font-bold"><a href="/">Hello world</a></h1>
            <ul className="p-4 hidden lg:flex">
                <li className="p-4 text-gray-600/60 font-bold"><a href="/">Home</a></li>
                <li className="p-4 text-gray-600/60 font-bold"><a href="/mostpopular">Most Popular</a></li>
                <li className="p-4 text-gray-600/60 font-bold"><a href="/archive">Archive</a></li>
                <li className="p-4 text-gray-600/60 font-bold"><a href="/articlesearch">Article Search</a></li>
                <li className="p-4 text-gray-600/60 font-bold"><a href="/books">Books</a></li>
                <li className="p-4 text-gray-600/60 font-bold"><a href="/about">About</a></li>
            </ul>
            </div>
            <div className="flex">
                <div className="flex p-4 justify-center items-center">
                    <button className="p-4 lg:hidden" onClick={setMenu}><IoMenu className="text-3xl"/></button>
                    <button className="p-4 hidden lg:block"><TbMoon className="text-2xl"/></button>
                    <button className="hidden lg:block p-4"><a className="block" href="/signup">Sign Up</a></button>
                    <button className="hidden lg:block p-4"><a className="block" href="login">Sign In</a></button>
                </div>
            </div>
        </nav>
    )
}

export default Header;
