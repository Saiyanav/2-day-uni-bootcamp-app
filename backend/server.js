const express = require('express');
const app = express();
const mongoDB = require('./config/db');
mongoDB();


const port = 5001;

app.use(express.json());
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

