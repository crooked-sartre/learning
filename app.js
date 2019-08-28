// I M P O R T S
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
//const expressHbs = require('express-handlebars'); //pug and ejs are built in.

const app = express();

//Handlebars format - not really into it.
//hbrs natively stores layouts at 'views/layouts/', it doesn't need to be explicitely written.
// app.engine('hbs', 
//     expressHbs({layoutsDir: '', defaultLayout: 'main-layout', extname: 'hbs'})); 
app.set('view engine', 'ejs');
app.set('views', 'views');//since we are using a views folder, we don't actually have to declare this


const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// R O U T I N G
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});


app.listen(3000);

