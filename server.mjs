import express from 'express';
import cors from 'cors';
import path from 'path';
const __dirname = path.resolve();


 
import postRouter from './routes/post.mjs'
import { process } from 'ipaddr.js';




const app = express();
app.use(express.json()); // body parser
app.use(cors())



app.use("/api/v1", postRouter) // Secure api







app.use(express.static(path.join(__dirname,'express-mangodb-crud/build')))

const PORT= process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})