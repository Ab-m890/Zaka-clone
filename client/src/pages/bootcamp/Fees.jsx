import React from 'react'

import TaskAltIcon from '@mui/icons-material/TaskAlt'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { IconButton } from '@mui/material'
import { BootcampFeesData } from '../../api/bootcamp/Bootcamp'

const Fees = () => {
    return (
        <section className='w-[100%] md:min-h-[100vh] py-[90px] px-[24px] shadow grid grid-cols-1 md:grid-cols-2 gap-[24px]'>
            <div>
                <div className='bg-orange rounded px-[4px] pb-[4px]'>
                    <div className='text-center py-[4px]'>
                        <h1 className='text-[24px] font-bold text-white'>Fees</h1>
                    </div>
                    <div className='bg-white'>
                        <div className='text-center py-[4px]'>
                            <h1 className='text-[24px] font-bold text-orange'>$<span className='text-[48px]'>480</span>/ person</h1>
                            <ul>
                                {
                                    BootcampFeesData.map((label, i) => (
                                        <li
                                            ket={i}
                                            className="flex gap-[10px] mx-[8px] my-[16px]"
                                        >
                                            <TaskAltIcon className='text-orange' />
                                            {label}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='text-center'>
                    <h1 className='text-[30px] md:text-[48px] font-bold text-orange'>Upcoming Bootcamps</h1>
                </div>
                <div className='flex items-center border-left-orange rounded shadow mt-[24px]'>
                    <div className='flex justify-center items-center p-[12px] text-[48px]'>
                        <IconButton>
                            <CalendarMonthIcon className='text-orange' sx={{ fontSize: '50px' }} />
                        </IconButton>
                    </div>
                    <article  className='ml-[6px]'>
                        <h1 className='font-bold text-[24px] text-orange'>Nov 14 to Dec 10</h1>
                        <p>Admissions Closing: Nov 11</p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Fees