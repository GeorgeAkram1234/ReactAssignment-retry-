import React from 'react'

export default function Home() {
    return (
        <>
            <div className='h-screen mt-6 bg-[#1ABC9C] flex justify-center items-center flex-col text-white'>
                <div className='w-1/5'>
                    <img src="./avataaars.svg" className='w-full' alt="" />
                </div>
                <div className='text-4xl my-3 text-center font-bold uppercase text-white '>
                    <h1 >Start Framework</h1>
                </div>
                <div className='flex gap-3 items-center'>
                    <div className='w-24 h-1 bg-white'></div>
                    <i className='fas fa-star'></i>
                    <div className='w-24 h-1 bg-white'></div>
                </div>
                <p className='my-3'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </>

    )
}
