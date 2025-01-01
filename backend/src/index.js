import dotenv from 'dotenv'
import express from 'express'
import {connectDB} from './lib/db.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import categoryRoute from './routes/category.route.js'
import catererRoutes from "./routes/catererRoutes.js"

dotenv.config()
const PORT = process.env.PORT || 5001
const app = express()


app.use(express.json({ limit: '10mb'}))
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))
app.use('/api/auth', authRoutes )
app.use('/api', categoryRoute)
app.use('/api',catererRoutes)


app.listen( PORT , ()=>{
    console.log('server is running on port :' + PORT)
    connectDB()
})