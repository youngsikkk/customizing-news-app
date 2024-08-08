"use client"
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useCallback } from "react";
import { IoIosSearch } from "react-icons/io";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const SearchPage = () => {
    const [search, setSearch] = useState("");
    const [tempSearch, setTempSearch] = useState("");
    const [newsData, setNewsData] = useState([]);
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    
    const createQueryString = useCallback((name, value) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(name, value);
        return params.toString();
    }, [searchParams])

    const handleClick = (e) => {
        e.preventDefault();
        setSearch(tempSearch);
        router.push(pathname + "?" + createQueryString("search", tempSearch));
    }

    useEffect(() => {
        const getResult = async() => {
            try {
                const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${API_KEY}`);
                const data = await response.json();
                setNewsData(data.response.docs);
                setTempSearch("");
            } catch(e) {
                alert(e);
            }
        }
        getResult();
    }, [search])

    return (
        <div className="flex flex-col items-center">
            <h1 className="mt-10 text-2xl">Article Search</h1>
            <form className="mb-10 p-10 flex">
                <input type="text" onChange={(e) => {setTempSearch(e.target.value)}} className="bg-slate-200 rounded-full w-[400px] md:w-[500px] h-10 p-4"/>
                <button onClick={handleClick} type="submit">
                    <IoIosSearch className="text-3xl" />
                </button>
            </form>
            <div>
                {newsData && newsData.map((item, idx) => (
                    <div key={item._id} className="p-4 border-2 m-4 rounded-xl duration-150 hover:shadow-md">
                        <div className="flex flex-col">
                            <p className="p-2 text-lg">{item.abstract}</p>
                            <p className="p-2 text-sm">{item.byline.original}</p>
                        </div>
                        <div className="flex">
                            <p className="p-2 text-sm">{item.section_name},</p>
                            <p className="p-2 ml-[-10px] text-sm">{item.type_of_material}</p>
                        </div>
                        <a className="p-2 text-blue-500 hover:underline" target="_blank" href={`${item.web_url}`}>{item.web_url}</a>
                        <p className="p-2">{item.pub_date.substring(0,10)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchPage;