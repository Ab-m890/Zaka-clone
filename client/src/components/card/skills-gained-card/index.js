import React from "react";

const SkillsGainedCard = ({image,desc}) => {
    return(
        <section className='flex items-center border-left-orange rounded shadow'>
            <div className='flex justify-center items-center p-[12px]'>
                <img className='max-w-[80px] max-h-[80px] ' src={image} alt="image" />
            </div>
            <p className='ml-[6px]'>{desc}</p>
        </section>
    )
}

export default SkillsGainedCard