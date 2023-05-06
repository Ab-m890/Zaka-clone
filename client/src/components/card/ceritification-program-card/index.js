import React from "react";
import { IconButton } from '@mui/material'

const CeritificationProgramCard = ({ icon, desc }) => {
    return (
        <div className='flex items-center border-left-orange rounded shadow'>
            <div className='flex justify-center items-center p-[12px]'>
                <IconButton className='flex justify-center items-center'>
                    {icon}
                </IconButton>
            </div>
            <p className='ml-[6px]'>{desc}</p>
        </div>
    )
}

export default CeritificationProgramCard