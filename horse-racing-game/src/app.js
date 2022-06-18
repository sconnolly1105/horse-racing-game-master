const path = require('path');
const express = require('express');
const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));
const PORT = process.env.PORT || 8000;

// app.get('/people', (req, res) => {
//     let me = [{name: 'Eavan', age: 40}, {name: 'Emmet', age: 38}];
//     res.send(me);
// })

app.get('/about', (req, res) => {
    res.sendFile(`${publicDirectoryPath}/about.html`);
})

app.get('*', (req, res) => {
    res.sendFile(`${publicDirectoryPath}/404.html`);
});

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
})

