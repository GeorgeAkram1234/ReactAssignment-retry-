import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="bg-slate-700">
                <div className='container text-white mx-auto md:grid grid-cols-3 '>
                    <div className='col-span-1 text-center flex flex-col p-20 gap-4'>
                        <h2 className='font-bold text-2xl'>LOCATION</h2>
                        <h3>2215 John Daniel Drive</h3>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className='col-span-1 text-center flex flex-col p-20 '>
                        <h2 className='font-bold text-2xl'>AROUND THE WEB</h2>
                        <ul className='flex gap-3 justify-center my-3'>
                            <li className='border rounded-full border-white'><i className='p-2 fa-brands fa-facebook'></i></li>
                            <li className='border rounded-full border-white'><i className='p-2 fa-brands fa-twitter'></i></li>
                            <li className='border rounded-full border-white'><i className='p-2 fa-brands fa-linkedin-in'></i></li>
                            <li className='border rounded-full border-white'><i className='p-2 fas fa-globe'></i></li>
                        </ul>
                    </div>
                    <div className='col-span-1 text-center flex flex-col px-12 py-20'>
                        <h2 className='font-bold text-2xl'>ABOUT FREELANCER</h2>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
            <div className='text-center bg-slate-800 text-white'>
                <p className='py-4'>Copyright © Your Website 2021</p>
            </div>
        </>
    )
}
