import React from 'react'
import { SkillsGainedData } from '../../api/bootcamp/Bootcamp'
import SkillsGainedCard from '../../components/card/skills-gained-card'

const SkillsGained = () => {

    return (
        <section className='w-[100%] min-h-[100vh] py-[90px] px-[24px] md:px-[48px] bg-white flex flex-wrap items-center shadow-lg'>
            <div className='w-[100%] text-center'>
                <h1 className='text-orange font-bold text-[30px] md:text-[48px] '>Skills Gained</h1>
            </div>
            <div className='w-[100%] mt-[48px] grid grid-cols-1 md:grid-cols-2 gap-[48px]'>
                {
                    SkillsGainedData.map((e, i) => (
                        <SkillsGainedCard
                            key={i}
                            image={e.image}
                            desc={e.desc}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default SkillsGained