import React from 'react';
import NewsCard from './NewsCard';
import Loading from './Loading';
import ErrorPage from './Error';

const NewsList = ({ error, loading, newsData }) => {
    if (error) {
        return <ErrorPage />;
    }

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
                <Loading />
                <Loading />
                <Loading />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {newsData.map((news, index) => (
                <NewsCard key={index} news={news} />
            ))}
        </div>
    );
};

export default NewsList;
