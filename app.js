const express=require('express');
const app=express();
const path=require("path")
const request=require("http")

app.use(express.static('public'));

app.listen(3012,()=>{
    console.log('servidor corriendo en http://localhost:3012');
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/main.html')
})

app.get('/product-detail', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'));

});