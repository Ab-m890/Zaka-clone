import React from 'react'
import { OurPartnersData } from '../../api/ceritification/Ceritification'

const OurPartner = () => {
    
    return (
        <section className='w-[100%] py-[90px] px-[24px]'>
            <div className='w-[100%] text-center'>
                <h1 className='text-orange font-bold text-[30px] md:text-[48px] '>
                    Our Partner Network
                </h1>
                <div className='grid gap-[12px] grid-cols-5'>
                    {
                        OurPartnersData.map((src, i) => (
                            <div key={i} className="flex justify-center items-center">
                                <img src={src} alt="partner-image" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default OurPartner