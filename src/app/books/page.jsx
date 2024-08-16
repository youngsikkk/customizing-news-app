"use client"
import ErrorPage from "@/components/Error";
import Loading from "@/components/Loading";
import React, { useState, useEffect, useRef } from "react";
import { FaCaretRight } from "react-icons/fa";


const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const BooksHome = () => {
    const [bookData, setBookData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${API_KEY}`);
                const data = await response.json(); 
                                setBookData(data.results.lists);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };
        fetchNews();
    }, [])

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
        <section className="flex flex-col">
            <div className="flex justify-between items-center">
                    <h1 className="m-4 p-2 text-3xl font-bold">Book</h1>
            </div>
            {bookData.map((item, idx) => (
                <div key={idx}>
                    <h1 className="m-4 p-2 text-2xl font-bold">{item.display_name}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                        {item.books.map((book, i) => (
                            <div key={book.title} className="flex flex-col relative bg-white p-4 rounded-lg shadow-md m-4 duration-150 hover:shadow-lg hover:scale-105">
                                <img src={`${book.book_image}`} className="mx-auto h-80 max-w-80 mb-6" alt="book image"/>
                                <h1 className="text-lg font-semibold mt-2">{book.title}</h1>
                                <h3 className="text-md font-semibold mt-2">{book.author}</h3>
                                <p className="mt-2 text-gray-600 mb-8">{book.description}</p>
                                <a href={`/books/detail?title=${book.title}&author=${book.author}&publisher=${book.publisher}&description=${book.description}&img=${book.book_image}&amazon=${book.amazon_product_url}&apple=${book.buy_links[1].url}&barnes=${book.buy_links[2].url}&booksamillion=${book.buy_links[3].url}&bookshop=${book.buy_links[4].url}`} className="absolute bottom-2 left-1">
                                    <div className="flex items-center">
                                        <FaCaretRight className="text-3xl" />
                                        <p className="text-md hover:underline hover:text-blue-500">Detail</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default BooksHome;