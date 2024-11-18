import { create } from 'zustand';
import { axiosInstance as api } from '../config/axiosInstance';
import { getAccessToken, removeAccessToken, saveAccessToken, decodeToken } from '../utils/tokenManager';

const userStore = create((set, get) => ({
    user: null,
    userData: null,

    getCurrentUser: () => {
        const accessToken = getAccessToken();
        if (accessToken) {
            set({ user: decodeToken(accessToken)});
        }
    },

    getDataUser: async ()=>{
        try {
            const res = await api.get('api/users/profile')

            set({userData: res.data})
        } catch (error) {
            console.error(error)
        }

    },

    login: async (email, password) => {
        try {
            const res = await api.post('/api/users/login', { email, password });
            saveAccessToken(res.data.token);
            set({ user: decodeToken(res.data.token) });
            return res;
        } catch (error) {
            console.error(error)
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
        set({ user: null, userData: null });
    },
}));

export default userStore;
