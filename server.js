const express =require('express');
const app=express();
const path=require('path');


app.use(express.static(__dirname));
app.use(express.json());

app.post('/feedback', (req, res) =>{
    const {name ,message}=req.body;
    console.log(`Feedback recevied from ${name}: ${message}`);
    res.send('thank you for your Feedback!');
});
const PORT=5000;
app.listen(PORT,() =>{
    console.log(`Server ruunning at http://localhost:${PORT}`);
});