import React from 'react'
import { CeritificationProgramCardData } from '../../api/ceritification/Ceritification'
import CeritificationProgramCard from '../../components/card/ceritification-program-card'

const CeritificationProgram = () => {

    return (
        <section className='w-[100%] min-h-[100vh] py-[90px] px-[24px] md:px-[48px] bg-white flex flex-wrap items-center shadow-lg'>
            <div className='w-[100%] text-center'>
                <h1 className='text-orange font-bold text-[30px] md:text-[48px] '>
                    Is The Certification Program For You?
                </h1>
            </div>
            <div className='w-[100%] mt-[48px] grid grid-cols-1 md:grid-cols-2 gap-[48px]'>
                {
                    CeritificationProgramCardData.map(({ icon, desc }, i) => (
                        <CeritificationProgramCard
                            key={i}
                            icon={icon}
                            desc={desc}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default CeritificationProgram