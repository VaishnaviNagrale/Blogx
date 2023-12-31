import React, {useState, useEffect} from 'react'
import { MyContainer, Postcard } from '../components'
// import appwriteService from "../appwrite/config";
import dbService from '../appwrite/db'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        dbService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
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

export default AllPosts