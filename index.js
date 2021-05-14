import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app = express()
const PORT = 4004;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRBdb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//bodypartser connection/setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.get('/',(req,res)=>
    res.send(`Node js and Express Server running on port ${PORT}`)
);

app.listen(PORT,()=>
    console.log(`My server is running on port ${PORT}`)
);