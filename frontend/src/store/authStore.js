import {create} from'zustand'
import toast from 'react-hot-toast';
import axios from 'axios'

export const useAuthStore = create((set)=>({
    authUser: null,
    isSigninUp:false,
    isLoggingIng:false,
    
   

    isCheckingAuth:true,

    checkAuth: async () => {
        try {
          const res = await axios.get("http://localhost:5001/api/auth/check");
    
          set({ authUser: res.data });
          
        } catch (error) {
          console.log("Error in checkAuth:", error);
          set({ authUser: null });
        } finally {
          set({ isCheckingAuth: false });
        }
    },

    signup: async (data) => {
        set({ isSigningUp: true });
        try {
        //   const res = await axiosInstance.post("/auth/signup", data);
        const res = await axios.post("http://localhost:5001/api/auth/signup", data);


          set({ authUser: res.data });
          toast.success("Account created successfully");
          
        } catch (error) {
          toast.error(error.response.data.message);
        } finally {
          set({ isSigningUp: false });
        }
    },

    logout: async () => {
        try {
        //   await axiosInstance.post("/auth/logout");

          set({ authUser: null });
          toast.success("Logged out successfully");
          
        } catch (error) {
          toast.error(error.response.data.message);
        }
    },


    login: async (data) => {
        console.log(data);
        
        set({ isLoggingIn: true });
        try {
          const res = await axios.post("http://localhost:5001/api/auth/login", data);
          set({ authUser: res.data });
          toast.success("Logged in successfully");
          
    
        //   get().connectSocket();
        } catch (error) {
            console.log(error.response.data.message);
            
          toast.error(error.response.data.message);
        } finally {
          set({ isLoggingIn: false });
        }
    },

}))
