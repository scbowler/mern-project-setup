const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
    res.send({
        message: 'Test API',
        method: req.method,
        url: req.url
    });
});

app.post('/api/test', (req, res) => {
    res.send({
        message: 'Test API',
        method: req.method,
        url: req.url,
        body: req.body
    });
});

app.listen(PORT, () => {
    console.log('Server listening @ localhost:' + PORT);
});
