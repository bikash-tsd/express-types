import express from 'express';
import todoRoutes from './routes/todos';
import {json} from 'body-parser';
const app = express();
app.use(json());
app.use('/todo',todoRoutes);

app.use((err:Error,req:express.Request,res:express.Response,next:express.NextFunction)=>{
    console.log(req);
    
    res.status(500).json(err)
    next();
})
app.listen(4000,()=>{
    console.log('app is running on port http://localhost:4000/ ');
    
})