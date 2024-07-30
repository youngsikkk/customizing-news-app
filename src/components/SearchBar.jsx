"use client"
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
    const [search, setSearch] = useState();
    const buttonClick = (e) => {
        e.preventDefault();
        const $searchbar = document.querySelector("#searchbar");
        $searchbar.style.display = "block";
        // $searchbar.style.display = "block";
    }

    return(
        <>
            <form className="p-2 flex">
                <input id="searchbar" className="border-2 rounded-xl w-50 h-10 hidden" type="text" />
                <button onClick={buttonClick}><IoIosSearch className="text-3xl "/></button>
            </form>
        </>
    )
}

export default SearchBar;