import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { axiosInstance } from '../../../config/Axios';

const AdminLogin = () => {

    const [error, setError] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault();
        const { data } = await axiosInstance.post('/api/admin/login', {
            data: {
                username,
                password,
            }
        })

        switch (data.status) {
            case "ok":
                navigate('/',{replace: true})
                break;
            case "error":
                setError(data.error)
                break;
            default:
                break;
        }
    }
    return (
        <section className='min-h-[100vh] w-[100%] flex justify-center items-center'>
            <form onSubmit={onSubmit} className='w-[400px] max-w-[400px] p-[12px] rounded bg-light'>
                {error && <p style={{color: 'red'}}>{error}</p>}
                <label htmlFor='username' className='font-bold text-orange'>Username</label>
                <input
                    id='username'
                    className='outline-none text-orange font-bold shadow appearance-none border w-full p-[8px] mb-[12px] rounded'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <label htmlFor='password' className='font-bold text-orange'>Password</label>
                <input
                    id='password'
                    type='password'
                    className='outline-none text-orange font-bold shadow appearance-none border w-full p-[8px] rounded'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button type='submit' className='rounded bg-black bg-orange text-white px-[8px] py-[4px] mt-[12px]'>Login</button>
            </form>
        </section>
    )
}

export default AdminLogin