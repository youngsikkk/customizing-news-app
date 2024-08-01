import React from 'react';

const NewsCard = ({ news }) => (
    <div className="flex flex-col relative bg-white p-4 rounded-lg shadow-md m-4 duration-150 hover:shadow-lg hover:scale-105">
        {news.multimedia && news.multimedia[0] && (
            <img src={news.multimedia[0].url} alt="News Image" className="w-full h-70 lg:h-96 object-cover rounded-lg"/>
        )}
        <h2 className="text-lg font-semibold mt-2">{news.title}</h2>
        <p className="mt-2 text-gray-600 mb-6">{news.abstract}</p>
        <a href={news.url} target="_blank" rel="noopener noreferrer" className="absolute bottom-3 text-blue-600 block hover:underline">Learn more</a>
    </div>
);

export default NewsCard;
