import React from 'react'
import { BootcampCompaniesData } from '../../api/bootcamp/Bootcamp'

const Companies = () => {
    
    return (
        <section className='w-[100%] py-[90px] px-[24px]'>
            <div className='w-[100%] text-center'>
                <h1 className='text-orange font-bold text-[30px] md:text-[48px] '>
                    Companies We’ve Worked With
                </h1>
                <div className='grid gap-[12px] grid-cols-4 md:grid-cols-4 lg:grid-cols-6'>
                    {
                        BootcampCompaniesData.map((src, i) => (
                            <div key={i} className="flex justify-center items-center">
                                <img src={src} alt="company-image" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Companies