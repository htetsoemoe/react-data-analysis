import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Card = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img src={Single} alt="photo" className="w-20 mx-auto mt-[-3rem] bg-white" />
                    <h1 className="text-2xl font-bold text-center py-8">Single</h1>
                    <p className="text-4xl font-bold text-center">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                        <p className="py-2 border-b mx-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <button className="bg-[#00df9a] hover:bg-[#5bedbf] w-[200px] rounded-md py-3 my-6 mx-auto">Start Trial</button>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img src={Double} alt="photo" className="w-20 mx-auto mt-[-3rem] bg-white" />
                    <h1 className="text-2xl font-bold text-center py-8">Double</h1>
                    <p className="text-4xl font-bold text-center">$199</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                        <p className="py-2 border-b mx-8">2 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <button className="bg-[#00df9a] hover:bg-[#5bedbf] w-[200px] rounded-md py-3 my-6 mx-auto">Start Trial</button>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img src={Triple} alt="photo" className="w-20 mx-auto mt-[-3rem] bg-white" />
                    <h1 className="text-2xl font-bold text-center py-8">Triple</h1>
                    <p className="text-4xl font-bold text-center">$299</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                        <p className="py-2 border-b mx-8">3 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <button className="bg-[#00df9a] hover:bg-[#5bedbf] w-[200px] rounded-md py-3 my-6 mx-auto">Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Card
