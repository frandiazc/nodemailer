const express = require('express');
const app = express();
let users = [
    {
        id: 1,
        name: 'John'},
    {
        id: 2,
        name: 'Sara'},
    ]
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    app.get('/users', (req, res) => {
        res.json(users);
    });
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

    hola
