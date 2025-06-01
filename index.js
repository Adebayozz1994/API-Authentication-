const express = require('express');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/books');

const app = express();



app.use(express.json());

app.use('/api', authRoutes);
app.use('/api/books', bookRoutes);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
