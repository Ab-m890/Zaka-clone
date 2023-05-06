import React from 'react'

const Landing = () => {
    return (
        <section className='w-[100%] md:min-h-[100vh] py-[90px] px-[24px] md:px-[48px] bg-white flex flex-wrap items-center shadow-lg'>
            <div className='block w-[100%] lg:w-[50%]'>
                <article className='font-bold'>
                    <p className="text-[16px] " >
                        ONLINE COURSE / FLEXIBLE SCHEDULE
                    </p>
                    <h1 className="text-[36px] my-[16px] text-black leading-[38px] md:text-[48px] md:leading-[50px] flex flex-col" >
                        <span>
                            ARTIFICIAL INTELLIGENCE
                        </span>
                        <span className='w-fit p-[4px] mt-[4px] bg-orange text-white'>
                            CERITIFICATION.
                        </span>
                    </h1>
                    <p className="w-[100%] text-[16px]" >
                    From basic Python knowledge to complete understanding and implementation of Machine Learning algorithms.
                    </p>
                </article>
            </div>
            <div className='w-[100%] lg:w-[50%] hidden lg:flex justify-center items-center'>
                <img className='w-[50%]' src='/assets/logo-zaka-black.png' alt="image-landing" />
            </div>
        </section>
    )
}

export default Landing