const path      = require('path')
const express   = require('express')

const app = express();

const router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));

router.use((req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

router.use('/users', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "users.html"))
});

app.listen(3000)