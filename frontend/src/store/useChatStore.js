import {create} from "zustand";
import toast from 'react-hot-toast';
import {axiosInstance} from "../lib/axios";

export const useChatStore = create((set)=>({
    messages: [],
    users: [],
    selctedUser: null,
    isUsersLoading:false,
    isMessagesLoading:false,

    getUsers: async () => {
        set({ isUsersLoading:true});
        try{
            const res = await axiosInstance.get("/messages/users");
            set({users:res.data});
        }catch(error){
            toast.error(error.response.data.message);
        }finally{
            set ({isUsersLoading:false});
        }
    },

    getMessages:async () => {
        set({isUsersLoading:true});
        try{
            const res = await axiosInstance.get("/messages/users");
            set({users:res.data})
        }catch(error){
            toast.error(error.response.data.message);
        }finally{
            set({isUsersLoading:false});
        }
    },

    setSelectedUser:(selectedUser) => set({selectedUser}),
}))