require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require ('./routes/users');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://pankaj:mkNUTiGlFJA7oOCN@sheezam.kg1o3fd.mongodb.net/',{
useNewUrlParser:true,
useUnifiedTopology:true,
});

app.use('/api',userRoutes);

app.listen(3000,() => {
    console.log('server run on local');
});
