const express = require('express')
const app = express()


app.listen(3000,()=>{
    console.log("hello world")
})



// app.get("/",(req,res)=>{
//     res.send("<h1>succesfully </h1>")
// });

// Here we learn Routing

app.get("/", (req,res)=>{
    res.send("<h1>succesfully </h1>")
});


app.get("/about", (req,res)=>{
    res.send("<h1>This is About Page </h1>")
});


app.get("/Gallery", (req,res)=>{
    res.send("<h1>This is Gallery </h1>")
});

// This is subroute and routes are not case sensative 
// we send value through route 
app.get("/Gallery/image", (req,res)=>{
    res.send("<h1>This is subroute images inside gallery </h1>")
});


app.get("/Gallery-/image", (req,res)=>{
    res.send("<h1>This is special charecter route</h1>")
});

// we can add special character in rout like "., - "etc
app.get("/Gallery-/image", (req,res)=>{
    res.send("<h1>This is special charecter route</h1>")
});

// we can share value through route we have to add colon sign after sign than we can add any aplhabet ans character we use method req.param to print value

// app.get('/user/:userid',(req,res)=>{
// res.send(req.params)
// })
// dispaly nested routing
// app.get('/user/:userid/book/:bookid',(req,res)=>{
// res.send(req.params)
// })
// if we want to display ony specific value we will put 
// app.get('/user/:userid/book/:bookid',(req,res)=>{
// res.send(req.params.bookid)
// })

// app.get('/user/:userid/book/:bookid',(req,res)=>{
// res.send(req.params.userid)
// })

// app.get('/user/:userid/book/:bookid',(req,res)=>{
// res.send("Book id : " + req.params.userid)
// })

// we cann add two values in single route

app.get('/user/:userid-:bookid',(req, res)=>{
res.send(req.params)
})



// here we use query parameter we use  
// search?name=kaif&age=25&city=mumbai

// app.get('/search',(req, res)=>{
// res.send(req.query)
// })

app.get('/search',(req, res)=>{

const name =req.query.name
const age =req.query.age
res.send(`Search results for name: ${name}, Age :${age} `)
})



