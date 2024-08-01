import React from 'react'


export default function About() {
    return (
        <>
            <div className='h-screen bg-[#1ABC9C] flex justify-center items-center flex-col text-white'>
                <div className='text-4xl font-bold uppercase'>
                    <h1>about component</h1>
                </div>

                <div className='flex gap-3 items-center my-3'>
                    <div className='w-24 h-1 bg-white'></div>
                    <i className='fas fa-star '></i>
                    <div className='w-24 h-1 bg-white'></div>
                </div>

                <div className='md:grid grid-cols-2 gap-4 md:space-y-3 lg:space-y-0 w-3/4 mx-auto '>
                    <div className='col-span-1 my-3 lg:my-0'>
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

                    </div>
                    <div className='col-span-1'>
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>

            </div>
        </>
    )
}
