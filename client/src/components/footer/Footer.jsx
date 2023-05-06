import React from 'react'
import { Link } from 'react-router-dom'

//icons
import { IconButton } from '@mui/material'
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"

const Footer = () => {
    return (
        <footer className='px-[24px] py-[90px] bg-black text-white'>
            <div className='grid gap-[24px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                <div>
                    <h1 className='font-bold text-[24px]'>Newsletter</h1>
                    <p className='mt-[12px] text-[12px] font-bold'>
                        We are here to guide your success! Stay updated with our latest news.
                    </p>
                    <div className='block'>
                        <input placeholder='Your email' className='w-[100%] my-[12px] rounded p-[8px]' type="email" />
                        <button className='w-[100%] p-[8px] text-white bg-orange rounded'>Subscribe to our newsletter</button>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-[24px]'>Links</h1>
                    <ul className='mt-[12px] text-[12px] font-bold'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold text-[24px]'>Address</h1>
                    <div className='mt-[12px] text-[12px] font-bold flex'>
                        <span className='text-orange'>
                            <IconButton sx={{ px: 0 }}>
                                <LocationOnIcon sx={{ fontSize: '18px' }} className='text-orange' />
                            </IconButton>
                        </span>
                        <span className="ml-[12px]">
                            651 N Broad St, Suite 206, Middletown, New Castle, Delaware, 19709
                        </span>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-[24px]'>Contact</h1>
                    <ul className='mt-[12px] text-[12px] font-bold'>
                        <li>
                            <span className='text-orange'>
                                <IconButton sx={{ px: 0 }}>
                                    <PhoneIcon sx={{ fontSize: '18px' }} className='text-orange' />
                                </IconButton>
                            </span>
                            <span className="ml-[12px]">+961 70 261514</span>
                        </li>
                        <li>
                            <span className='text-orange'>
                                <IconButton sx={{ px: 0 }}>
                                    <EmailIcon sx={{ fontSize: '18px' }} className='text-orange' />
                                </IconButton>
                            </span>
                            <span className="ml-[12px]">+961 70 261514</span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer