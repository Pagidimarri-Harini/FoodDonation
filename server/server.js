const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Import Mongoose
const route = require('./routes/userRoute.js'); 
app.use(cors());
app.use(bodyParser.json());



const Connection = async (password) =>{
    const URL = `mongodb+srv://user:${password}@mern-stack.d5q8bma.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true,}); 
        console.log('Database connected successfully')
    }catch(error){
        console.log('Error while connecting to database')
    }

}
Connection('harini123')
app.use('/',route);
// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

