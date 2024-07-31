"use client"
import React, { useState, useEffect } from "react";
import Loading from './Loading';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const MainPage = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState('home');
    
    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${selectedTopic}.json?api-key=${API_KEY}`);
                const data = await response.json();
                console.log(data);
                setNewsData(data.results);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };
        console.log(selectedTopic);
        fetchNews();
    }, [selectedTopic]);

    return(
        <section className="flex flex-col">
            <div className="flex justify-between items-center">
                <h1 className="m-4 p-2 text-3xl font-bold">{selectedTopic.toUpperCase()}</h1>
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
            {error && <p className="text-center mt-10 text-red-500">에러가 발생했습니다: {error.message}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {loading ?
                <>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                </>
                :
                 newsData.map((news, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md m-4 duration-150 hover:shadow-lg">
                        {news.multimedia && news.multimedia[0] && (
                            <img src={news.multimedia[0].url} alt="뉴스 이미지" className="w-full h-70 lg:h-96 object-cover rounded-lg"/>
                        )}
                        <h2 className="text-lg font-semibold mt-2">{news.title}</h2>
                        <p className="mt-2 text-gray-600">{news.abstract}</p>
                        <a href={news.url} target="_blank" className="text-blue-600 mt-2 block">자세히 보기</a>
                    </div>
                ))}
            </div>
            
        </section>
    )
}

export default MainPage;