import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 3000;

app.use(express.json()); // Required to read JSON bodies
app.use('/api', routes); // All routes prefixed with /api

app.post('/', (req, res) => {
    console.log('Body:', req.body); // 👀 Check what comes in
    const { username, password } = req.body;
    console.log('Hello world', username, password);
    res.send(`Hello ${username}, your password is ${password}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
