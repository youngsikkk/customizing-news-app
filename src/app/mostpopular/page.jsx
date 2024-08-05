"use client"
import React, { useState, useEffect } from "react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const MostPopular = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedPeriod, setSelectedPeriod] = useState("1");
    const [selectedMedia, setSelectedMedia] = useState("emailed");
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`http://api.nytimes.com/svc/mostpopular/v2/${selectedMedia}/${selectedPeriod}.json?api-key=${API_KEY}`);
                const data = await response.json();
                console.log(data.results);
                setNewsData(data.results);
            } catch (error) {
                setError(error);
                console.log(error);
            }
            setLoading(false);
        };
        fetchNews();
    }, [selectedPeriod, selectedMedia]);

    return (
        <>
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <h1 className="m-4 p-2 text-3xl font-bold">Most Popular</h1>
                    <div className="flex">
                        <div className="flex flex-col m-4 items-end">
                            <label htmlFor="topics" className="p-2 text-xl block text-gray-700">Select Period</label>
                            <select id="topics" className="p-2" onChange={(e) => setSelectedPeriod(e.target.value)}>
                                <option value="1">1 day</option>
                                <option value="7">7 days</option>
                                <option value="30">30 days</option>
                            </select>
                        </div>
                        <div className="flex flex-col m-4 items-end">
                            <label htmlFor="topics" className="p-2 text-xl block text-gray-700">Select Media</label>
                            <select id="topics" className="p-2" onChange={(e) => setSelectedMedia(e.target.value)}>
                                <option value="emailed">Emailed</option>
                                <option value="shared">Shared</option>
                                <option value="viewed">Viewed</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="m-4 p-2 grid grid-col-1 md:grid-cols-2 2xl:grid-cols-3">
                        {newsData.map((item,idx) => (

                            <div className="flex flex-col relative bg-white p-4 rounded-lg shadow-md m-4 duration-150 hover:shadow-lg hover:scale-105">
                                <div className="p-6 flex justify-center items-center w-[350px]" key={item.title}>
                                    <img className="w-[75px]" src= {item.media[0]?.["media-metadata"][0].url} alt="pic" title="pic"/>
                                    <a className="ml-4 hover:text-blue-400" href={item.url}><h1 className="text-lg font-bold">{item.title}</h1></a>
                                </div>
                                <div className='flex'>
                                    <p className="m-4 mb-0 text-gray-600">{item.published_date.substring(0,10)}</p>
                                    <p className="mt-2 text-gray-600 mb-6 ml-2">{item.published_date.substring(11,19)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MostPopular;