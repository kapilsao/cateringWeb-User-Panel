import React from 'react'
import { useEffect } from 'react'
import AuthForm from './pages/authForm'
import {  Route , Routes , Navigate} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Categories from './pages/Categories'
import Caterers from "./pages/Caterers"
import MenuPage from "./pages/MenuPage"
import { useAuthStore } from './store/authStore'
import { Loader } from 'lucide-react'
import Cart from "./components/Cart"

const App = () => {

  // const {authUser , checkAuth , isCheckingAuth} = useAuthStore()


  // useEffect(() => {
  //   checkAuth();
  // }, [checkAuth]);

  // console.log({authUser});
  // console.log(isCheckingAuth);
  

  // if (isCheckingAuth && !authUser)
  // return (
  //     <div className="flex items-center justify-center h-screen">
  //       <Loader className="size-10 animate-spin" />
  //     </div>
  // );
  

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AuthForm/>} /> 
        <Route path="/login" element={<AuthForm isSignUp={false} />} /> {/* Sign In */}
        <Route path="/signup" element={<AuthForm isSignUp={true} />} /> {/* Sign Up */}
        <Route path ='/categories' element={<Categories/>}/>
        {/* <Route path="/caterers" element={<Caterors/>}/> */}
        <Route path="/caterers/:categoryId" element={<Caterers/>}/>
        <Route path="/caterers/:categoryId/:catererId/menu" element={<MenuPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
      </Routes>
      <Footer/>
      

      <Toaster/>
    </div>
  )
}

export default App