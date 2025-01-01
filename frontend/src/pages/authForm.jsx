import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import toast from 'react-hot-toast'
import { useAuthStore } from '../store/authStore';

// Zod schema for validation
const LogInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const signUpSchema = LogInSchema.extend({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  MobNo: z
    .string()
    .regex(/^\d{10}$/, { message: "Phone number must be 10 digits" }),
});

export default function AuthForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignUpPage = location.pathname === '/signup';
  const { login, signup } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(isSignUpPage ? signUpSchema : LogInSchema),
  });

  const onSubmit = async (data) => {
    try {
      if (isSignUpPage) {
        // API call for sign-up
        const response = await axios.post('http://localhost:5001/api/auth/signup', data);
        //  signup(data)
        console.log('Sign-Up Success:' , response.data);
        navigate('/login')
      } else {
        // API call for sign-in
        const response = await axios.post('http://localhost:5001/api/auth/login', data);
        
        //  login(data);
        console.log('Log-In Success:', response.data);
        navigate('/categories');

      }
      // Redirect to another page (e.g., dashboard)
    } catch (error) {
      console.error('Error:', error.res?.data || error.message);
      toast.error( error.response?.data.message)
    }
  };

  const toggleMode = () => {
    navigate(isSignUpPage ? '/login' : '/signup');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center">
          {isSignUpPage ? "Sign Up" : "LogIn"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {isSignUpPage && (
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                {...register('fullName')}
                className="w-full mt-1 p-2 border rounded"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              {...register('email')}
              className="w-full mt-1 p-2 border rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              {...register('password')}
              className="w-full mt-1 p-2 border rounded"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          {isSignUpPage && (
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="text"
                {...register('MobNo')}
                className="w-full mt-1 p-2 border rounded"
              />
              {errors.MobNo && (
                <p className="text-red-500 text-sm">{errors.MobNo.message}</p>
              )}
            </div>
          )}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            {isSignUpPage ? "Sign Up" : "LogIn"}
          </button>
        </form>
        <button
          className="text-indigo-500 underline w-full text-center mt-4"
          onClick={toggleMode}
        >
          {isSignUpPage ? "Already have an account? LogIn" : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
}
