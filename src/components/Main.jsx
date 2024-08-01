"use client"
import React, { useState, useEffect } from "react";
import NewsList from "./NewsList";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const MainPage = () => {
    const [newsData, setNewsData] = useState([]);
    const [today, setToday] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState('home');
    const date = new Date();
    
    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${selectedTopic}.json?api-key=${API_KEY}`);
                const data = await response.json();
                const day = date.getDate() >= 1 && date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate();
                const month = date.getMonth() + 1 >= 1 && date.getMonth() + 1 <= 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
                setNewsData(data.results);
                setToday(`${date.getFullYear()}-${month}-${day}`);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };
        fetchNews();
    }, [selectedTopic]);

    return(
        <section className="flex flex-col">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <h1 className="m-4 p-2 text-3xl font-bold">{selectedTopic.toUpperCase()}</h1>
                    <h3 className="m-4 mt-0 p-2 pt-0 text-xl">{today}</h3>
                </div>
                <div className="flex flex-col m-4 items-end">
                    <label htmlFor="topics" className="p-2 text-xl block text-gray-700">Select Subject</label>
                    <select 
                        id="topics" 
                        className="p-2 border rounded-lg"
                        value={selectedTopic}
                        onChange={(e) => setSelectedTopic(e.target.value)}
                    >
                        <option value="home">Home</option>
                        <option value="technology">Technology</option>
                        <option value="business">Business</option>
                        <option value="health">Health</option>
                        <option value="sports">Sports</option>
                        <option value="science">Science</option>
                        <option value="movies">Movies</option>
                        <option value="politics">Politics</option>
                        <option value="world">World</option>
                    </select>
                </div>
            </div>
            <NewsList 
                error={error} 
                loading={loading} 
                newsData={newsData} 
            />
        </section>
    )
}

export default MainPage;