import React from 'react';
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
    <Navbar/>
       <div className="bg-opacity-80 min-h-screen flex flex-col justify-center items-center overflow-auto">
    <main className="flex flex-col items-center justify-center w-full flex-1 text-center pl-20 py-20">
                    <div className="flex flex-col md:flex-row items-center justify-center w-full">
                        <div className="md:w-1/2 p-10">
                            <h1 className="text-4xl text-orange-950 font-bold mb-6">Welcome to the Bookstore</h1>
                            <p className="text-lg text-black mb-6 ">
                                This is a simple bookstore application built with React and Tailwind CSS. It uses a mock REST API to fetch and display data.
                            </p>
                            <a href="/login">
                                <button className=" bg-orange-950 hover:bg-black hover:text-orange-950 text-white font-bold py-4 px-8 rounded">
                                    View All Books
                                </button>
                            </a>
                        </div>
                        <div className="md:w-1/2 flex justify-center items-center">
                            <img src="/home.jpg" alt="Riddle" className="w-3/4 h-3/4 rounded-lg" />
                        </div>
                    </div>
                </main>
                </div>
    </div>
  )
}

export default Home