import { createSlice } from "@reduxjs/toolkit";
import dbService from "../appwrite/db";

const initialState = {
    status: true,
    error: null
}

const fileSlice = createSlice({
    name: 'file',
    initialState,
    reducers: {
        uploadFile: (state, action) => {
            state.status = false
            try {
                const file = action.payload
                dbService.uploadFile(file)
                state.status = true
            } catch (error) {
                state.status = false
                state.error = error.message;
            }
        },
        deleteFile: (state, action) => {
            state.status = false
            try {
                const fileID = action.payload
                dbService.deleteFile(fileID)
                state.status = true
            } catch (error) {
                state.status = false
                state.error = error.message;
            }
        },
        getFilePreview: (state, action) => {
            state.status = false
            try {
                const fileID = action.payload
                dbService.getFilePreview(fileID)
                state.status = true
            } catch (error) {
                state.status = false
                state.error = error.message;
            }
        },
    }
})

export const { uploadFile, deleteFile, getFilePreview } = fileSlice.actions

export default fileSlice.reducer