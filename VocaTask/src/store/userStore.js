import { create } from 'zustand';
import { axiosInstance as api } from '../config/axiosInstance';
import { getAccessToken, removeAccessToken, saveAccessToken, decodeToken } from '../utils/tokenManager';

const userStore = create((set) => ({
    user: null,
    // Ambil user dari token yang tersimpan
    getCurrentUser: () => {
        const accessToken = getAccessToken();
        if (accessToken) {
            set({ user: decodeToken(accessToken) });
        }
    },

    // Login User
    login: async (email, password) => {
        try {
            const res = await api.post('/api/users/login', { email, password });
            console.log(res.data)
            saveAccessToken(res.data.token);
            set({ user: decodeToken(res.data.token) });
            console.log(getAccessToken())
            return res;
        } catch (error) {
            console.error(error)
        }
    },

    // Register User
    register: async (name, email, password) => {
        try {
            console.log("ini name:"+name, email, password)
            const data = await api.post('/api/users/register', { name, email, password });

            return data;
        } catch (error) {
            console.error(error)
        }
    },

    // Logout User
    logout: () => {
        removeAccessToken();
        set({ user: null });
    },
}));

export default userStore;
