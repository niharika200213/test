const express=require('express');
const app=express();
const cors=require('cors');
require('dotenv/config');

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(cors({
  origin: "*",
  methods: ['GET','POST','PUT','DELETE', 'PATCH']
}));

app.get('/', function (req,res){res.json({name:"prakhar", age:"19"})});

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

    console.log('connection established');
    app.listen(process.env.PORT||3000);
