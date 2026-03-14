import express from "express"
import cookieParser from "cookie-parser"
import errorMiddleware from "./Middlewares/error.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cookieParser())

// ✅ FIXED: Allow both local dev and production origins
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  "https://fabulous-paletas-de85bb.netlify.app"
]

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (mobile apps, curl, postman)
    if (!origin) return callback(null, true)
    if (allowedOrigins.includes(origin)) return callback(null, true)
    callback(new Error("Not allowed by CORS"))
  },
  credentials: true
}))

// routes import
import userRouter from "./Routes/Users/userRoute.js"
import taskRouter from "./Routes/Tasks/taskRoute.js"

// routes
app.use("/api/v1/users", userRouter)
app.use("/api/v1/tasks", taskRouter)

// health check
app.get("/health", (req, res) => res.json({ status: "ok" }))

// error middleware
app.use(errorMiddleware)

export default app
