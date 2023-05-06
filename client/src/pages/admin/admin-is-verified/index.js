import React from 'react'
import { Navigate, Outlet, useLoaderData } from 'react-router'

const AdminIsVerifyed = () => {
    const data = useLoaderData()

    if (data.status === "auth") return <Navigate to="/admin/login" />
    else if (data.status === "error") return <Navigate to={`/error?text=${data.error}`} />

    return <Outlet />
}

export default AdminIsVerifyed