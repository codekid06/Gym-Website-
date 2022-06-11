// app.get("/",(req,res)=>{
//   res.status(200).send("My first express app");
// })
// app.get("/about",(req,res)=>{
//   res.send("My about express app");
// })
// app.post("/about",(req,res)=>{
//   res.send("My post about express app");
// })
// app.get("/this",(req,res)=>{
//   res.status(404).send("PAge not found");
// })
// app.get("/demo",(req,res)=>{
//   res.status(200).render('demo',{title:'hey',message:'hello there!'})//pug demo endpoint
// })
//Express is  web application framework for node js also handel routing, scalability aslo it is free and open source also we can contribute in it 
const express= require('express');//importing module
const fs = require('fs');
const app=express();//created an app
const port=80;//if we only write localhost on server it can by default fetch the port 80
const path=require('path');//string joining module
//EXPRESS SPECIFIC STUFF
//for serving static files  
app.use('/static',express.static('static'))//first static is url second static is foler name
//For getting form data to express
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine','pug');//setting template engine pug
app.set('views',path.join(__dirname,'views'))//set the views directory
//END POINTS
  app.get('/',(req,res)=>{ 
    const con="EXPLIXIT CONTENT";
    const params={'title':'Best gaming site','content':con}
    res.status(200).render('index.pug',params)
  })
  app.post('/',(req,res)=>{
    // console.log(req.body);//res.body is js object
    Name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;
    let outputvalue=`Name:${Name},Age:${age},Gender:${gender},Address:${address},About:${more} `
    fs.writeFileSync('output.txt',outputvalue)
    const param={'message':'Submitted Sucessfully'}
  res.status(200).render('index.pug',param)
  })
//START THE SERVER
app.listen(port,()=>{ // '()=>' this is an callback function
    console.log(`The application started sucessfully on port ${port}`);
})