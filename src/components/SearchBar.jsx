"use client"
import React, { useState, useRef, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
    const [search, setSearch] = useState();
    const [isVisible, setIsVisible] = useState(false);
    const formRef = useRef(null);
    const inputRef = useRef(null);

    const handleClickOutside = (e) => {
        if(formRef.current && !formRef.current.contains(e.target)) {
            setIsVisible(false);
        }
    }

    const buttonClick = (e) => {
        e.preventDefault();
        setIsVisible(!isVisible);
        if(!isVisible) {
            inputRef.current.focus();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return(
        <>
            <form className="p-2 flex relative" ref={formRef}>
                <input
                    id="searchbar"
                    ref={inputRef}
                    className={`border-2 rounded-xl w-50 h-10 transition-all duration-300 ease-in-out transform ${
                        isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'
                    }`}type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={buttonClick} type="button">
                    <IoIosSearch className="text-3xl" />
                </button>
            </form>
        </>
    )
}

export default SearchBar;