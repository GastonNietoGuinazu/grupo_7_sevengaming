const express=require('express');
const app=express();
const path=require("path")
const request=require("http")

app.use(express.static('public'));

app.listen(3012,()=>{
    console.log('servidor corriendo en http://localhost:3012');
});

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/home.html')
})

app.get('/product-detail', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'));

});

app.get('/cuenta', function(req,res){
        res.sendFile(path.resolve(__dirname, './views/cuenta.html'));

});

app.get('/producto', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/producto.html'));

});

app.get('/carrito', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/carrito.html'));

});
app.get('/login', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/login.html'));

});