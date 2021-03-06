const express=require('express');
const app=express();
const path=require('path');
const port=process.env.PORT || 3000;
console.log(__dirname);
const PublicPath=path.join(__dirname,'src/Public');
app.use(express.static(PublicPath));
app.get('*', (req, res) => {
    res.sendFile(path.join(PublicPath, 'index.html'));
 });

app.listen(port,()=>{
    console.log('Server is Up');
})
