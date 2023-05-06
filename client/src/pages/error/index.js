import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Error = () => {
    const params = useSearchParams()
    const errorText = params.get('text') 
    return (
        <section className='w-[100%] min-h-[100vh] flex justify-center items-center'>
            {errorText || 'An error occured'}
        </section>
    )
}

export default Error