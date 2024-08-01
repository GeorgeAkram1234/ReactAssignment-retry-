import React from 'react'

export default function Contact() {
    
    return (
        <>
            <div className='h-screen flex justify-center items-center flex-col mt-16 text-slate-700'>
                <div className='text-2xl md:text-4xl my-3 text-center font-bold uppercase '>
                    <h1 >Contact component</h1>
                </div>
                <div className='flex gap-3 items-center justify-center'>
                    <div className='w-24 h-1 bg-slate-700'></div>
                    <i className='fas fa-star'></i>
                    <div className='w-24 h-1 bg-slate-700'></div>
                </div>
                <div className="sm:w-1/2 w-full mx-auto my-4">
                        <div className="flex flex-col gap-7 ">
                            <input className='p-4 shadow-md rounded-lg' type="text" placeholder='UserName' />
                            <input className='p-4 shadow-md rounded-lg' type="text" placeholder='UserAge'/>
                            <input className='p-4 shadow-md rounded-lg' type="email" placeholder='UserMail' />
                            <input className='p-4 shadow-md rounded-lg' type="password" placeholder='UserPass' />
                        </div>
                        <button className='px-4 py-2 bg-[#1ABC9C] my-4 rounded-lg text-white'>send message</button>
                </div>
            </div>
        </>
    )
}
