import React, { useState } from 'react'
import { BootcampCardData, BootcampWeekData, BootcampWeekLabels } from '../../api/bootcamp/Bootcamp'
import BootcampCard from '../../components/card/bootcamp-card'

const WhatLearn = () => {
    const [weekIndex, setWeekIndex] = useState(0)
    return (
        <section className='w-[100%] py-[90px] px-[24px] md:px-[48px] shadow'>
            <div className='grid grid-cols-4 gap-[6px]'>
                {
                    BootcampWeekLabels.map((label, i) => (
                        <button key={i} className={`p-[12px] duration-150 ${weekIndex === i ? 'bg-[orange] text-white' : 'bg-[white] border-orange text-black'} rounded`} onClick={() => setWeekIndex(i)}>
                            {label}
                        </button>
                    ))
                }
            </div>
            <div className={`mt-[12px] p-[12px] shadow rounded`}>
                <h1 className='font-bold'>{BootcampWeekData[weekIndex].title}</h1>
                <ul >
                    {
                        BootcampWeekData[weekIndex].list.map((label, i) => (
                            <li key={i}>{label}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-[48px]'>
                {
                    BootcampCardData.map((e, i) => (
                        <BootcampCard
                            key={i}
                            data={e}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default WhatLearn