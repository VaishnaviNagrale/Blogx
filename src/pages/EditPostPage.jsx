import React, {useEffect, useState} from 'react'
import {MyContainer, Postform} from '../components'
// import appwriteService from "../appwrite/config";
import dbService from '../appwrite/db';
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            dbService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <MyContainer>
            <Postform post={post} />
        </MyContainer>
    </div>
  ) : null
}

export default EditPost