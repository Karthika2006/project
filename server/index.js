
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks, stripWebhooks } from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import connectCloudinay from './configs/cloudinary.js'
import courseRouter from './routes/courseRoute.js'
import userRouter from './routes/userRoutes.js'

//Initialize Express
const app = express()

//connect database
await connectDB()
await connectCloudinay()

//middleware
app.use(cors())
//app.use(express.json())
app.use(clerkMiddleware())

//Routes
app.get('/',(req, res)=> res.send("API Working"))
app.post('/clerk', express.json(), clerkWebhooks)
//app.post('/clerk', express.raw({type:'application/json'}), clerkWebhooks)
app.use('/api/educator',express.json(), educatorRouter)
app.use('/api/course',express.json(),courseRouter)
app.use('/api/user',express.json(),userRouter)
app.post('/stripe', express.raw({ type: 'application/json'}), stripWebhooks)

//port 
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})