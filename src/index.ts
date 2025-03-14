
import { Comunicacion } from "./clases/Comunicacion";
import { comunicacionGET } from "./comunicacion/funcion.comunicacion";

import './css/main.css'; // Temos que integrar o CSS para que webpack o compile



if(location.pathname == "/logueo-basico"){
    const refBotonGET: HTMLButtonElement = document.querySelector("#solicitudeGET");
    const refBotonPOST: HTMLButtonElement = document.querySelector("#solicitudePOST")
    
    // INTRODUZCO DOUS BOTÓNS SIMULANDO 'EVENTOS' 
    // UN POST
    // UN GET 
    

    refBotonGET.addEventListener("click",async () =>{
        let endpoint = "/recibo-datos-do-servidor";
        await Comunicacion.metodoGet(endpoint)
        console.log(Comunicacion.respostaServidor)
        // UTILIZARÍAMOS O DATO QUE CHEGA DO SERVIDOR PARA PINTAR
    })
    refBotonPOST.addEventListener("click",async ()=>{
        let endpoint = "/envio-datos-o-servidor"
        await Comunicacion.metodoPost(endpoint)
        console.log(Comunicacion.respostaServidor)
        // UTILIZARÍAMOS O DATO QUE CHEGA DO SERVIDOR PARA PINTAR
    })
}
const paginas = [
    "/invoices",
    "/cesta",
    "/clientes",
    "/customers",
    "/graficas",
    "/productos",
    "/axustes"
];
if (paginas.includes(location.pathname)) {
    window.addEventListener("DOMContentLoaded", async () => {
        await comunicacionGET(); 
    });

    const botonGET = document.createElement("button");
    botonGET.id = "solicitudeGET";
    botonGET.textContent = "Solicitude GET";
    botonGET.addEventListener("click", async () => {
        let endpoint ="/recibo-datos-do-servidor";
        await Comunicacion.metodoGet(endpoint);
        console.log ("Datos recibidos:", Comunicacion.respostaServidor) 
    });

    const botonPOST = document.createElement("button");
    botonPOST.id = "solicitudePOST";
    botonPOST.textContent = "Solicitude POST";
    botonPOST.addEventListener("click", async () => {
        let endpoint = "/envio-datos-o-servidor";
        await Comunicacion.metodoPost(endpoint);
        console.log("Datos enviados:", Comunicacion.respostaServidor);
    });

    document.body.appendChild(botonGET);
    document.body.appendChild(botonPOST);
}
