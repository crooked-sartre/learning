const Product = require('../models/products')

exports.getAddProduct = (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {
        pageTitle: "Add Product", 
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => { 
        res.render('shop', {
            pageTitle: 'Shop', 
            prods: products, 
            path: '/', 
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });   
};