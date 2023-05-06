import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

//icon
import GridViewIcon from '@mui/icons-material/GridView';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ViewKanbanOutlinedIcon from '@mui/icons-material/ViewKanbanOutlined';
import SchoolIcon from '@mui/icons-material/School';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const close = () => setOpenMenu(false)

    return (
        <>
            <nav className="sticky top-0 z-10 w-[100%] h-[90px] py-[10px] px-[20px] flex justify-between items-center bg-black text-black">
                <div className='flex gap-x-1 items-center'>
                    <div className="md:hidden" onClick={() => setOpenMenu(true)}>
                        <MenuIcon className="text-white mr-[10px]" />
                    </div>
                    <img className='h-[50px]' src="/assets/logo-zaka.png" alt="logo" />
                </div>
                <div className="flex gap-x-2.5">

                </div>
            </nav>
            <aside className='z-20 h-[100vh] w-[70px] px-[23px] overflow-y-auto cutomize-scrollbar duration-150 hover:w-[250px] hidden md:flex justify-between flex-col fixed left-0 top-0 bg-white z-999'>
                <div>
                    <div className='py-[33px]'>
                        <MenuIcon />
                    </div>
                    <div className='flex flex-col gap-y-5 w-100 py-[33px] overflow-hidden cursor-pointer'>
                        <NavLink to="/" className='flex'>
                            <HomeIcon />
                            <span className='ml-[10px]'>Home</span>
                        </NavLink>
                        <NavLink to="/dashboard" className='flex'>
                            <GridViewIcon />
                            <span className='ml-[10px]'>Dashboard</span>
                        </NavLink>
                        <NavLink to="/profile" className='flex'>
                            <AccountBoxOutlinedIcon />
                            <span className='ml-[10px]'>Profile</span>
                        </NavLink>
                        <NavLink to="/bootcamp" className='flex'>
                            <ViewKanbanOutlinedIcon />
                            <span className='ml-[10px]'>Bootcamp</span>
                        </NavLink>
                        <NavLink to="/courses" className='flex'>
                            <SchoolIcon />
                            <span className='ml-[10px]'>Courses</span>
                        </NavLink>
                        <NavLink to="/ceritification" className='flex'>
                            <WysiwygIcon />
                            <span className='ml-[10px]'>Ceritification</span>
                        </NavLink>
                        <NavLink to="/about-us" className='flex'>
                            <InfoIcon />
                            <span className='ml-[10px]'>About Us</span>
                        </NavLink>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col gap-y-5 w-100 pb-[33px] overflow-hidden cursor-pointer'>
                        <NavLink to="/settings" className='flex'>
                            <SettingsIcon />
                            <span className='ml-[10px]'>Settings</span>
                        </NavLink>
                        <div className='flex btn-logout'>
                            <LogoutIcon />
                            <span className='ml-[10px]'>Logout</span>
                        </div>
                    </div>
                </div>
            </aside>
            <aside className={`z-20 w-[100%] h-[100vh] p-[20px] overflow-y-auto duration-150 md:hidden fixed top-0 ${openMenu ? 'left-0' : '-left-full'} bg-white`}>
                <div className="absolute right-[20px] top-[20px]" onClick={() => setOpenMenu(false)}>
                    <CloseIcon />
                </div>
                <div className="w-100">
                    <img className='h-[50px]' src="/assets/logo-zaka-black.png" alt="logo" />
                </div>
                <div className='flex flex-col gap-y-5 w-100 pt-[33px] overflow-hidden cursor-pointer'>
                    <NavLink to="/" onClick={close} className='flex'>
                        <HomeIcon />
                        <span className='ml-[10px]'>Home</span>
                    </NavLink>
                    <NavLink to="/dashboard" onClick={close} className='flex'>
                        <GridViewIcon />
                        <span className='ml-[10px]'>Dashboard</span>
                    </NavLink>
                    <NavLink to="/profile" onClick={close} className='flex'>
                        <AccountBoxOutlinedIcon />
                        <span className='ml-[10px]'>Profile</span>
                    </NavLink>
                    <NavLink to="/bootcamp" onClick={close} className='flex'>
                        <ViewKanbanOutlinedIcon />
                        <span className='ml-[10px]'>Bootcamp</span>
                    </NavLink>
                    <NavLink to="/courses" onClick={close} className='flex'>
                        <SchoolIcon />
                        <span className='ml-[10px]'>Courses</span>
                    </NavLink>
                    <NavLink to="/ceritification" onClick={close} className='flex'>
                        <WysiwygIcon />
                        <span className='ml-[10px]'>Ceritification</span>
                    </NavLink>
                    <NavLink to="/about-us" onClick={close} className='flex'>
                        <InfoIcon />
                        <span className='ml-[10px]'>About Us</span>
                    </NavLink>
                    <NavLink to="/settings" onClick={close} className='flex'>
                        <SettingsIcon />
                        <span className='ml-[10px]'>Settings</span>
                    </NavLink>
                    <div className='flex btn-logout'>
                        <LogoutIcon />
                        <span className='ml-[10px]'>Logout</span>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Navbar