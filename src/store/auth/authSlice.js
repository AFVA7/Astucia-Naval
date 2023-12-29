import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'checking' | 'authenticated' | 'unauthenticated'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        birthdate: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated'; // 'checking' | 'authenticated' | 'unauthenticated'
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.birthdate = payload.birthdate;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            state.status = 'unauthenticated'; // 'checking' | 'authenticated' | 'unauthenticated'
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.birthdate = null;
            state.errorMessage = payload?.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        },
        updateProfile: (state, { payload }) => {
            state.displayName = payload.displayName;
            state.email = payload.email;
            state.photoURL = payload.photoURL;
            state.birthdate = payload.birthdate;
        },
        setPhotoURL: (state, { payload }) => {
            state.photoURL = payload;
        }
    }
});

export const { login, logout, checkingCredentials, updateProfile, setPhotoURL } = authSlice.actions;