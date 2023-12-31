import React, { useEffect, useState } from 'react'
// import { getPosts } from '../fectures/postSlice'
import dbService from '../appwrite/db'
import { MyContainer, Postcard } from '../components'

function HomePage() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        dbService.getPosts().then((data) => {
            if (data) {
                setPosts(data.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <MyContainer>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </MyContainer>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <MyContainer>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <Postcard {...post} />
                        </div>
                    ))}
                </div>
            </MyContainer>
        </div>
    )
}

export default HomePage