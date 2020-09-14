const express = require("express")
const app = express()

app.use(express.static('public'))

app.get("/",(req,resp)=>{
    resp.render("index")
})

app.get("/perguntas",(req,resp)=>{
    resp.render("pergunta")
})

app.set("view engine","ejs")

app.listen(4000,function(erro){
    if(erro){
        console.log("ocorreu um erro")
    }else{
        console.log("Iniciado com Sucesso")
    }
})

