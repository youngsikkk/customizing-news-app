"use client"
import React from "react";
import { useSearchParams } from "next/navigation";

const BookDetail = () => {
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const author = searchParams.get('author');
    const description = searchParams.get('description');
    const image = searchParams.get('img');
    const amazon = searchParams.get('amazon');
    const apple = searchParams.get('apple');
    const barnes = searchParams.get('barnes');
    const million = searchParams.get('booksamillion');
    const bookshop = searchParams.get('bookshop');
    return (
        <div className="flex flex-col items-center mt-10">
            <p className="text-3xl font-bold">{title}</p>
            <p className="text-xl mt-5 mb-20">{author}</p>
            <img className="w-80" src={image} alt="book image"/>
            <p className="text-xl mt-16 mb-10">{description}</p>
            <div className="flex flex-col items-center mt-20 mb-10">
                <h1 className="mb-10 text-xl">purchase location</h1>
                <div className="flex flex-col">
                    <p className="font-bold p-2">Amazon | <a className="font-normal hover:underline" href={amazon}>{amazon}</a></p>
                    <p className="font-bold p-2">Apple Book | <a className="font-normal hover:underline" href={apple}>{apple}</a></p>
                    <p className="font-bold p-2">Barnes & Noble | <a className="font-normal hover:underline" href={barnes}>{barnes}</a></p>
                    <p className="font-bold p-2">Books A Million | <a className="font-normal hover:underline" href={million}>{million}</a></p>
                    <p className="font-bold p-2">Bookshop | <a className="font-normal hover:underline" href={bookshop}>{bookshop}</a></p>
                </div>
                <div className="mt-20">
                    <p className="font-bold text-gray-600">Legal Notice and Disclaimer: The website listed above is not the seller of the products.</p>
                </div>
            </div>
        </div>
    )
}

export default BookDetail;