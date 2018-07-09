import * as express from 'express';
const app = express();


app.get('/candies',(req:any,res:any)=>{
    res.json([{candyName: "OREO",
        price: 6,
        countInStock: 3}])
});

app.get('/candies/:id',(req:any,res:any)=>{
    res.json({message:"not supported"});
});

app.post('/candies',(req:any,res:any)=>{
    res.json({message:"not supported"});
});

app.listen(4000,()=>{
    console.log("listening on port 4000")
})