import React from 'react'
import { useLoaderData } from 'react-router'

const AdminHome = () => {
  const error = useLoaderData()
  if (error) return <h1>{error.text}</h1>
  return (
    <section className='w-[100%] min-h-[100vh] flex justify-center items-center'>
      Admin home
    </section>
  )
}

export default AdminHome