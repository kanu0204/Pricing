const express = require('express');
const mongoose = require('mongoose');

const { usersRoutes } = require('./router/user.js');


const app = express();

app.use(express.json());
app.use("/api/pricing", usersRoutes);

mongoose.connect('your-mongodb-connection-url', { useNewUrlParser: true, useUnifiedTopology: true });

const port = 5000;
app.listen(port, () => console.log(`Server is Running ${port}`));
