import { createSlice } from "@reduxjs/toolkit";
import dbService from "../appwrite/db";

const initialState = {
    posts: [],
    post: null,
    status: true,
    error: null
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        createPost: (state, action) => {
            state.status = false
            try {
                const { title, slug, content, fecturedImage, userId, status } = action.payload;
                dbService.createPost({ title, slug, content, fecturedImage, userId, status });
                state.status = true
            } catch (error) {
                state.status = false
                state.error = error.message;
            }
        },
        updatePost: (state, action) => {
            state.status = false
            try {
                const { slug, title, content, fecturedImage, status } = action.payload;
                dbService.updatePost(slug, { title, content, fecturedImage, status });
                state.status = true
            } catch (error) {
                state.status = false
                state.error = error.message;
            }
        },
        deletePost: (state, action) => {
            state.status = false
            try {
                const slugToDelete = action.payload
                state.posts = dbService.deletePost(slugToDelete)
                state.status = true
            } catch (error) {
                state.status = false
                state.error = error.message;
            }
        },
        getPost: (state, action) => {
            state.status = false
            try {
                const slug = action.payload
                state.posts = dbService.getPost(slug)
                state.status = true
            } catch (error) {
                state.status = false
                state.error = error.message;
            }
        },
        getPosts: (state, action) => {
            state.status = false
            try {
                const queries = action.payload
                state.posts = dbService.getPosts(queries) || [];
                state.status = true
            } catch (error) {
                state.status = false
                state.error = error.message;
            }
        },
    }
})

export const { createPost, updatePost, deletePost, getPosts,getPost } = postSlice.actions

export default postSlice.reducer