import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './db';
import authRoutes from './routes/authroutes'
import chatRoutes from './routes/chatRoutes';
import taskRoutes from './routes/taskRoutes';
const app = express()
app.use(cors())
app.use(express.json())
app.use('api/auth', authRoutes)
app.use('api/chat', chatRoutes)
app.use('api', taskRoutes)
const port = 4000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})