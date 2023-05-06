import React, { useState } from 'react'
//firebase
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

//mui
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'
import { IconButton } from '@mui/material';

import { axiosInstance } from '../../../../config/Axios';
import { useNavigate } from 'react-router';

const AdminAddCourse = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: '',
    desc: '',
  })

  const [imageUpload, setImageUpload] = useState(null)

  const [error, setError] = useState(null)

  const [isSend, setIsSend] = useState(false)

  const uploadImageToStorage = async (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, `images/zaka/${Date.now()}`);
    return new Promise(resolve => {
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          setError(error.message)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL)
          });
        })
    })
  }


  const sendData = async () => {
    setIsSend(true)

    if (!(formData.title && formData.desc)) setError("All field required")
    else {
      try {
        const image = await uploadImageToStorage(imageUpload)

        const { data } = await axiosInstance.post('/api/courses/add', {
          data: {
            ...formData,
            image
          },
          adminToken: window.localStorage.getItem('adminToken'),
        })
        switch (data.status) {
          case "auth":
            navigate('/admin/login')
            break;
          case "error":
            setError(data.error)
            break;
          case "ok":
            navigate('/admin/courses')
            break;
        }
      } catch (error) {
        setError(error.message)
      }
    }

    setIsSend(false)
  }


  return (
    <section className='w-[100%] min-h-[100vh] py-[90px] px-[12px] flex justify-center'>
      {error && <p>{error}</p>}
      <div className='w-[600px] max-w-[600px]'>
        <h1 className='font-bold my-[12px] text-orange'>Cover photo</h1>
        <input
          type="file"
          accept='image/*'
          onChange={e => setImageUpload(old => e.target.files[0] ? e.target.files[0] : old)}
          id="image_file"
          className='hidden'
        />
        <label htmlFor='image_file' className='w-[100%] border-orange border-xl overflow-hidden flex items-center justify-center bg-light rounded'>
          {
            imageUpload ?

              <img src={URL.createObjectURL(imageUpload)} alt="image" className='min-h-[100%] min-w-[100%]'/> :
              <div className='h-[200px] w-[100%] flex items-center justify-center'>
                <IconButton>
                  <label htmlFor='image_file'>
                    <AddToPhotosIcon style={{ fontSize: "80px" }} className="text-orange" />
                  </label>
                </IconButton>
              </div>
          }
        </label>
        <h1 className='font-bold my-[12px] text-orange'>Title</h1>
        <input
          type="text"
          value={formData.title}
          onChange={e => setFormData(old => ({ ...old, title: e.target.value }))}
          className="w-[100%] h-[50px] border rounded bg-light text-orange outline-none p-[5px] font-bold border-orange"
        />
        <h1 className='font-bold my-[12px] text-orange'>Description</h1>
        <textarea
          rows={6}
          value={formData.desc}
          onChange={e => setFormData(old => ({ ...old, desc: e.target.value }))}
          className="w-[100%] border rounded bg-light text-orange outline-none p-[5px] font-bold border-orange"
        ></textarea>
        {
          isSend ?
            "Loading ..." :
            <button onClick={() => sendData()} className='bg-orange text-white px-[12px] py-[8px] mt-[12px] rounded'>Add course</button>
        }
      </div>
    </section>
  )
}

export default AdminAddCourse