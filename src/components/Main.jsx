import React from "react";

const MainPage = () => {
    return(
        <section className="flex flex-col">
            <div className="flex justify-between items-center">
                <h1 className="m-4 p-2 text-3xl font-bold">오늘의 헤드라인</h1>
                <div className="flex flex-col m-4 items-end">
                    <label htmlFor="topics" className="p-2 text-xl block text-gray-700">주제 선택</label>
                    <select id="topics" className="p-2 border rounded-lg">
                        <option>모든 뉴스</option>
                        <option>테크</option>
                        <option>정치</option>
                        <option>스포츠</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {/* 데이터 받으면 map 이용해서 한 번에 렌더링 */}
                <div className="bg-white p-4 rounded-lg shadow-md m-4 duration-150 hover:shadow-lg">
                    <img src="thumbnail.jpg" alt="뉴스 이미지" className="w-full h-52 lg:h-70 2xl:h-80 object-cover rounded-lg"/>
                    <h2 className="text-lg font-semibold mt-2">뉴스 제목</h2>
                    <p className="mt-2 text-gray-600">뉴스 요약 내용...</p>
                    <a href="#" className="text-blue-600 mt-2 block">자세히 보기</a>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md m-4 duration-150 hover:shadow-lg">
                    <img src="thumbnail.jpg" alt="뉴스 이미지" className="w-full h-52 lg:h-70 2xl:h-80 object-cover rounded-lg"/>
                    <h2 className="text-lg font-semibold mt-2">뉴스 제목</h2>
                    <p className="mt-2 text-gray-600">뉴스 요약 내용...</p>
                    <a href="#" className="text-blue-600 mt-2 block">자세히 보기</a>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md m-4 duration-150 hover:shadow-lg">
                    <img src="thumbnail.jpg" alt="뉴스 이미지" className="w-full h-52 lg:h-70 2xl:h-80 object-cover rounded-lg"/>
                    <h2 className="text-lg font-semibold mt-2">뉴스 제목</h2>
                    <p className="mt-2 text-gray-600">뉴스 요약 내용...</p>
                    <a href="#" className="text-blue-600 mt-2 block">자세히 보기</a>
                </div>
            </div>
            <div className="mt-4 flex justify-between">
                <button type="button" class="ml-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">이전</button>
                <button type="button" class="mr-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">다음</button>
            </div>
        </section>
    )
}

export default MainPage;