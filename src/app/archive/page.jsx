"use client"
import React, { useState, useEffect } from "react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const ArchiveHome = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getData = async() => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://api.nytimes.com/svc/archive/v1/${2019}/${1}.json?api-key=${API_KEY}`);
                // const data = await response.json();
                console.log(response);
            } catch(error) {
                setError(error);
                console.log(error);
            }
        }
        getData();
    }, []);

    return (
        <h1>Archive Home</h1>
    )
}

export default ArchiveHome;