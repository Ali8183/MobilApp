const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// CORS Etkinleştir
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// MongoDB connection
const dbURI = 'mongodb://localhost:27017/Mobilapp';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Basic route
app.get('/', (req, res) => {
    res.send('API is running');
});


// QR kod verisi için endpoint
app.post('/qr', (req, res) => {
    const qrData = req.body.data;
    console.log('Gelen QR veri:', qrData);
    res.json({ message: 'QR kod başarıyla alındı', data: qrData });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Network accessible at: http://0.0.0.0:${PORT}`);
});
