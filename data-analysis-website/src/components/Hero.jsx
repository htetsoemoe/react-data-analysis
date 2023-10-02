import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
    return (
        <div className='text-white'>
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2">
                    GROWING WITH DATA ANALYSIS
                </p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
                    Grow with data.
                </h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                        Fast, flexible financing for
                    </p>
                    <Typed
                        className='text-[#00df9a] md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2'
                        strings={['BTC', 'BNB', 'USDC', 'XRP']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">
                    Monitor your data analytics to increase revenue for BTB, BTC, & other cryptocurrencies platforms.
                </p>
                <button className="bg-[#00df9a] hover:bg-[#5bedbf] w-[200px] rounded-md font-medium my-6 py-3 text-black mx-auto ">
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Hero