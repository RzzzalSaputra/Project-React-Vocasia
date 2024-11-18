import { create } from 'zustand'
import { axiosInstance as api } from '../config/axiosInstance'

const taskStore = create((set, get)=>({
    task: [],
    createTask: async (title)=>{
        try {
            const data = await api.post('/api/tasks', {title})
            get().getTask()
            return data
        } catch (error) {
            console.error(error)
        }
    },
    getTask: async ()=>{
        try {
            const res = await api.get('/api/tasks')
            set({task: res.data})
        } catch (error) {
            console.error(error)
        }
    },
    MarkDoneTaskById: async (_id)=>{
        try {
            const res = await api.patch(`/api/tasks/${_id}/done`)
            get().getTask()
            return res
        } catch (error) {
            console.error(error)
        }
    },
    deleteTask: async (_id)=>{
        try {
            const res = await api.delete(`/api/tasks/${_id}`)
            get().getTask()
            return res
        } catch (error) {
            console.error(error)
        }
    }
}))

export default taskStore;