const express = require("express");
const path = require("path");
const { paxinaApp, paxinaNoUser,paxinaLogueo, paxinaInvoices, paxinaCesta, paxinaCustomers, paxinaGraficas, paxinaProductos, paxinaAxustes } = require("./controladores/views");
const app = express();

// Paxinas
app.use(express.urlencoded({extended: true}))


// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "dist")));
//### GETTERS
app.get("/recibo-datos-do-servidor",(req,res)=>{
    res.send({
        mensaxe:{
            dato1:"Juanito",
            dato2:"pepito",
            dato3:3
        }
    })
})
app.get("/logueo",(req,res)=>{
    paxinaLogueo(req,res)
})
//### POST
app.post("/paxina-app",(req,res)=>{
    
    console.log("recibo dato no server",req.body)

    let condicion = req.body.nome2 === 'Adrian' && req.body.apelido2 === 'Conxo';
    
    condicion ? (paxinaApp(req,res)) : (paxinaNoUser(req,res))

})
// GETTERS PáXINAS
app.get("/invoices",(req,res)=>{
    paxinaInvoices(req,res)
})
app.get("/cesta",(req,res)=>{
    paxinaCesta(req,res)
})
app.get("/clientes",(req,res)=>{
    paxinaCustomers(req,res)
})
app.get("/customers", (req,res) =>{
    paxinaCustomers(req,res)
})
app.get("/graficas", (req,res) => {
    paxinaGraficas(req,res)
})
app.get("/productos", (req,res) =>{
    paxinaProductos(req,res)
})
app.get("/axustes", (req,res) => {
    paxinaAxustes(req,res)
})
//Un evento dende o cliente
app.post("/envio-datos-o-servidor",(req,res)=>{
    res.send({mensaxe:"datos enviados"})
})
//##########
//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});