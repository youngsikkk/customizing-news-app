import React from "react";
import { TbMoon } from "react-icons/tb";
const MenuBar = () => {
    return(
        <div>
            <ul>
                <li className="p-4 text-gray-600/60 font-bold duration-200 hover:bg-slate-200"><a className="block" href="/">Home</a></li>
                <li className="p-4 text-gray-600/60 font-bold duration-200 hover:bg-slate-200"><a className="block" href="/mostpopular">Most Popular</a></li>
                <li className="p-4 text-gray-600/60 font-bold duration-200 hover:bg-slate-200"><a className="block" href="/articlesearch">Article Search</a></li>
                <li className="p-4 text-gray-600/60 font-bold duration-200 hover:bg-slate-200"><a className="block" href="/books">Books</a></li>
                <li className="p-4 text-gray-600/60 font-bold duration-200 hover:bg-slate-200"><a className="block" href="/about">About</a></li>
                <li className="p-4 text-gray-600/60 font-bold duration-200 hover:bg-slate-200"><a className="block" href="login">Sign In</a></li>
                <li className="p-4 text-gray-600/60 font-bold duration-200 hover:bg-slate-200"><a className="block" href="/signup">Sign Up</a></li>
            </ul>
        </div>
    )
}

export default MenuBar;