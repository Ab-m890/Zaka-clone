import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Navigate, useNavigate, useRouteLoaderData } from 'react-router-dom'
import AdminCourseCard from '../../../components/admin/card/courses-card'
import { axiosInstance } from '../../../config/Axios'

const AdminCourses = () => {
    
    const { data, isError, error, isLoading } = useQuery('courses', async () => {
        const res = await axiosInstance.get('/api/courses')
        return res
    })

    if (isLoading) return (
        <div className='w-[100%] h-[100vh] mt-[48px] text-center text-black font-bold'>
            <h1>Loading...</h1>
        </div>
    )

    if(isError) return <Navigate to={`/error?text=${error}`} />

    if(data.data.status === "error") return <Navigate to={`/error?text=${data.data.error}`} />

    return (
    <section className='w-[100%] min-h-[100vh] px-[12px] flex justify-center'>
        {
            data.data.courses.length > 0 ?
                <div className='h-fit grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-[48px]'>
                    {
                        data.data.courses.map((course, i) => (
                            <AdminCourseCard key={i} data={course} />
                        ))
                    }
                </div> :
                <div className='w-[100%] mt-[48px] text-center text-black font-bold'>
                    <h1>No courses available</h1>
                </div>
        }
    </section>
)
}

export default AdminCourses