import React from "react";

const BootcampCard = ({ data: { image, lessons, title, desc } }) => {
    return (
        <div className='h-[100%] border rounded-2xl overflow-hidden'>
            <div className='h-[220px] overflow-hidden flex justify-center items-center'>
                <img src={image} alt="image" className='min-w-[100%] min-h-[100%]' />
            </div>
            <article className='p-[12px]'>
                <p className='text-[12px] mt-[4px]'>{lessons} Lessons</p>
                <h1 className='text-[18px] font-bold text-orange'>
                    {title}
                </h1>
                <p className='text-[12px] mt-[4px]'>{desc}</p>
            </article>
        </div>
    )
}
export default BootcampCard
