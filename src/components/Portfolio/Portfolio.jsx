import React, { useState } from 'react';

export default function Portfolio() {
    const [showLightbox, setShowLightbox] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    function showLightBox(imageSrc) {
        setSelectedImage(imageSrc);
        setShowLightbox(true);
    }

    function hideLightBox() {
        setSelectedImage(null);
        setShowLightbox(false);
    }

    return (
        <>
            <div className='min-h-screen flex justify-center items-center flex-col mt-36 lg:mt-32 text-slate-700'>
                <div className='text-2xl md:text-4xl my-3 text-center font-bold uppercase '>
                    <h1>Portfolio component</h1>
                </div>
                <div className='flex gap-3 items-center justify-center'>
                    <div className='w-24 h-1 bg-slate-700'></div>
                    <i className='fas fa-star'></i>
                    <div className='w-24 h-1 bg-slate-700'></div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-4/5 mx-auto my-4">
                    <div className="col-span-1 relative group/parent">
                        <div onClick={() => showLightBox("./poert1.png")} className="card">
                            <img src="./poert1.png" className='w-full rounded-lg' alt="image1" />
                            <div className='anim rounded-lg absolute inset-0 bg-[#1ABC9C] flex justify-center items-center opacity-0 group/child group-hover/parent:opacity-90 duration-500 cursor-pointer transition-all '>
                                <i className='fas fa-plus text-white fa-7x'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 relative group/parent">
                        <div onClick={() => showLightBox("./port2.png")} className="card">
                            <img src="./port2.png" className='w-full rounded-lg' alt="image1" />
                            <div className='anim rounded-lg absolute inset-0 bg-[#1ABC9C] flex justify-center items-center opacity-0 group/child group-hover/parent:opacity-90 duration-500 cursor-pointer transition-all '>
                                <i className='fas fa-plus text-white fa-7x'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 relative group/parent">
                        <div onClick={() => showLightBox("./port3.png")} className="card">
                            <img src="./port3.png" className='w-full rounded-lg' alt="image1" />
                            <div className='anim rounded-lg absolute inset-0 bg-[#1ABC9C] flex justify-center items-center opacity-0 group/child group-hover/parent:opacity-90 duration-500 cursor-pointer transition-all '>
                                <i className='fas fa-plus text-white fa-7x'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 relative group/parent">
                        <div onClick={() => showLightBox("./poert1.png")} className="card">
                            <img src="./poert1.png" className='w-full rounded-lg' alt="image1" />
                            <div className='anim rounded-lg absolute inset-0 bg-[#1ABC9C] flex justify-center items-center opacity-0 group/child group-hover/parent:opacity-90 duration-500 cursor-pointer transition-all '>
                                <i className='fas fa-plus text-white fa-7x'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 relative group/parent">
                        <div onClick={() => showLightBox("./port2.png")} className="card">
                            <img src="./port2.png" className='w-full rounded-lg' alt="image1" />
                            <div className='anim rounded-lg absolute inset-0 bg-[#1ABC9C] flex justify-center items-center opacity-0 group/child group-hover/parent:opacity-90 duration-500 cursor-pointer transition-all '>
                                <i className='fas fa-plus text-white fa-7x'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 relative group/parent">
                        <div onClick={() => showLightBox("./port3.png")} className="card">
                            <img src="./port3.png" className='w-full rounded-lg' alt="image1" />
                            <div className='anim rounded-lg absolute inset-0 bg-[#1ABC9C] flex justify-center items-center opacity-0 group/child group-hover/parent:opacity-90 duration-500 cursor-pointer transition-all '>
                                <i className='fas fa-plus text-white fa-7x'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showLightbox && (
                <div id="lightBoxContainer" onClick={() => hideLightBox()} className='fixed inset-0 flex justify-center items-center bg-[#53537080] z-[999]'>
                    <div id="lightBox" className='w-3/6 bg-white rounded-lg overflow-hidden'>
                        <img src={selectedImage} alt="lightbox" className='w-full' onClick={(event) => event.stopPropagation()} />
                    </div>
                </div>
            )}
        </>
    );
}
