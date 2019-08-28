const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express();

const users = []

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
    res.render('add-user', {pageTitle: 'Collect Info', path: '/'});  
});



app.get("/users", (req, res) => {
    res.render('users', {
        pageTitle: 'Users', 
        path: '/users',
        users: users});
});

app.post('/add-user', (req, res) => {
    users.push({ name: req.body.username });
    res.redirect('/users');
    console.log(users)
});


app.use((req, res) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});


app.listen(3000)