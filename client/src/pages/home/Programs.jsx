import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const Programs = () => {
    const data = [
        {
            image: '/assets/programs-1.jpg',
            title: 'AI Bootcamp',
            subtitle: 'Expose yourself to the world of AI.',
            desc: 'A 4-week Bootcamp designed to introduce you to the fundamentals of Artificial Intelligence as you explore 5 areas in the field.',
            link: '/bootcamp',
        },
        {
            image: '/assets/programs-2.jpg',
            title: 'AI Ceritifications',
            subtitle: 'Get all the skills to join a Machine Learning Team.',
            desc: 'A 16-week intensive training program designed to equip you with the necessary knowledge, tools, and know-how for market-ready skills.',
            link: '/ceritification',
        }
    ]
    return (
        <section className='w-[100%] min-h-[100vh] py-[90px] px-[24px] md:px-[48px] lg:px-[96px] bg-light flex flex-wrap justify-center items-center'>
            <div className='w-[100%] text-center'>
                <h1 className='text-orange font-bold text-[30px] md:text-[48px] '>Discover Our Programs</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[48px] mt-[48px]'>
                {
                    data.map((e, i) => (
                        <ProgramsCard
                            key={i}
                            details={e}
                        />
                    ))
                }
            </div>
        </section>
    )
}

function ProgramsCard({ details: { image, title, subtitle, desc, link } }) {
    return (
        <Link to={link} className='h-[100%] shadow-xl'>
            <div className='h-[220px] overflow-hidden flex justify-center items-center'>
                <img src={image} alt="image" className='min-w-[100%] min-h-[100%]' />
            </div>
            <article className='p-[12px]'>
                <h1 className='text-[24px] font-bold text-orange'>
                    {title}
                </h1>
                <h1 className='text-[12px] font-bold'>{subtitle}</h1>
                <p className='text-[18px] mt-[12px]'>{desc}</p>
                <button className='bg-orange text-white px-[12px] py-[8px] mt-[24px]'>Apply Now <KeyboardArrowRightIcon /></button>
            </article>
        </Link>
    )
}

export default Programs