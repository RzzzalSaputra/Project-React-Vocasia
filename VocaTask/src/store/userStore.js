import { create } from 'zustand';
import { persist } from "zustand/middleware";
import { axiosInstance as api } from '../config/axiosInstance';
import { getAccessToken, removeAccessToken, saveAccessToken, decodeToken } from '../utils/tokenManager';

const initialState = {
    user: null,
    userData: null,
    error: null
}

const userStore = create(
    persist(
        (set, get) => ({
            ...initialState,

            // Get Access Token
            getCurrentUser: () => {
                const accessToken = getAccessToken();
                if (accessToken) {
                    set({ user: decodeToken(accessToken)});
                }
            },

            // get Data User
            getDataUser: async ()=>{
                try {
                    const res = await api.get('api/users/profile')

                    set({userData: res.data})
                } catch (error) {
                    set({ error: error });
                    console.error(error)
                }

            },

            // Login
            login: async (email, password) => {
                try {
                    const res = await api.post('/api/users/login', { email, password });
                    saveAccessToken(res.data.token);
                    set({ user: decodeToken(res.data.token) });
                    return res;
                } catch (error) {
                    set({ error: error });
                    console.error(error);
                }
            },

            // Register User
            register: async (name, email, password) => {
                try {
                    const res = await api.post('/api/users/register', { name, email, password });

                    return res;
                } catch (error) {
                    console.error(error)
                }
            },

            // Update User
            updateUser: async (data) => {
                try {
                    const res = await api.put('/api/users/profile', { ...data});
                    get().getDataUser()
                    return res;
                } catch (error) {
                    console.error(error)
                }
            },

            // Logout User
            logout: () => {
                removeAccessToken();
                set({ user: null, userData: null, error: null });
            },
        }),
        {
            getStorage: () => localStorage,
            name: "user-storage",
        }
    )
);

export default userStore;
