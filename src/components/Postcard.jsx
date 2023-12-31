import React from 'react'
import dbService from '../appwrite/db'
// import {getFilePreview} from '../fectures/fileSlice'
import { Link } from 'react-router-dom'

function Postcard({
    $id,title,fecturedImage
}) {

  return (
    <Link to={`/post/${$id}`}>
    <div className='p-4 max-w-sm bg-gray-300 overflow-hidden shadow-lg transition duration-300 transform hover:scale-105 rounded-xl' style={{ width: '300px', height: '300px' }}>
      <div className='w-full mb-4 justify-center' style={{ width: '100%', height: '70%' }}>
        <img
          src={dbService.getFilePreview(fecturedImage)}
          alt={title}
          className='rounded-xl w-full h-full object-fill'
        />
      </div>
      <h2 className='text-xl font-bold'>{title}</h2>
    </div>
  </Link>
  )
}

export default Postcard