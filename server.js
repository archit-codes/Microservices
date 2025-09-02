// const express = require("express");
// const app = express();
// const port=3000;
// app.get('/', (req,res) => {
//     res.send('hello');
// });
// app.listen(port,()=>{
//     console.log('server running...')
// });
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
mongoose.connect('mongodb://admin:admin@mongo:27017/mydb?authSource=admin')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  // Check MongoDB connection status
  const dbStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
  
  res.send(`
    <h1>Hello, World!</h1>
    <p>MongoDB Status: ${dbStatus}</p>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
