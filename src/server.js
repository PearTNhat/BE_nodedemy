const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require('path');
const router = require('./routes/apiRoutes');
const port = 3535;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//duong dan -> thu muc cong khai
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
