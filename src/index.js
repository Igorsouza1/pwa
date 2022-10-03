/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

 import * as generator from "../node_modules/knear"
import testex from "./assets/medidas/grupo3"
 import medidasx from "./assets/medidas/treinoPlusX"
 import medidasy from "./assets/medidas/treinoPlusY"
 
 const corsHeaders = {
   "Access-Control-Allow-Origin": "*",
   "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
   "Access-Control-Allow-Headers": "Content-Type,Authorization,Access-Control-Allow-Origin",
 }
 
 
 addEventListener('fetch', event => {
   console.log(`Received new request: ${event.request.url}`);
   //Métodos
   event.respondWith(handleRequest(event.request));
 })
 
 //Verifica o metodo
 async function handleRequest(request) {
   if(request.method === "OPTIONS"){
     return handleOptions(request)
   }
   const url = new URL(request.url)
   if (request.method === 'POST') {
     return submitHandler(request)
   }else
    if (request.method === 'GET') {
     return buscarMedidas(request)
   }else{
     return new Response("Metho Not Allowed", {
       status: 405
     })
   }
 }
 
 
 const submitHandler = async request => {
   //Pega os dados do formulario, "comprimentoCorpo"...
   const formData = await request.formData();
   const body = {};
   for (const entry of formData.entries()) {
     body[entry[0]] = entry[1];
   }

   
   var k = 3; //k can be any integer
   var machine = new generator.kNear(k);
   for (let i = 0; medidasx.length > i; i++) {
    machine.learn(medidasx[i], medidasy[i]);
  }
 
   //Aprendizado
   console.log(machine.classify(inputMedidas(body)))
   const qualidade = machine.classify(inputMedidas(body))
   await salvarNoKV(body, qualidade)
 

   //console.log(JSON.stringify(body))
   return Response.redirect("https://pwa-da1.pages.dev/#/resultado")
 }
 
 const buscarMedidas = async request => {
   const medidas = {
     "alturaCernelha": await medidasCavalos.get("alturaCernelha"),
     "alturaGarupa": await medidasCavalos.get("alturaGarupa"),
     "alturaDorso": await medidasCavalos.get("alturaDorso"),
     "comprimentoCorpo": await medidasCavalos.get("comprimentoCorpo"),
     "comprimentoDorsoLombar": await medidasCavalos.get("comprimentoDorsoLombar"),
     "comprimentoEspadua": await medidasCavalos.get("comprimentoEspadua"),
     "larguraAncas": await medidasCavalos.get("larguraAncas"),
     "larguraPeito": await medidasCavalos.get("larguraPeito"),
     "qualidade": await medidasCavalos.get("qualidade"),
     "sexo": await medidasCavalos.get("sexo")
   }
 
   return new Response(JSON.stringify(medidas), {
     headers: {
       ...corsHeaders
     }
   })
 }
 
 
 
 function handleOptions(request){
   if (request.headers.get("Origin") !== null &&
     request.headers.get("Access-Control-Request-Method") !== null &&
     request.headers.get("Access-Control-Request-Headers") !== null) {
     // Handle CORS pre-flight request.
     return new Response(null, {
       headers: corsHeaders
     })
   } else {
     // Handle standard OPTIONS request.
     return new Response(null, {
       headers: {
         "Allow": "GET, HEAD, POST, OPTIONS",
       }
     })
   }
 }
 
 
 
 async function salvarNoKV(body, qualidade){
   await medidasCavalos.put("comprimentoCorpo", body.comprimentoDoCorpo)
   await medidasCavalos.put("alturaDorso", body.alturaDoDorso)
   await medidasCavalos.put("larguraPeito", body.larguraDoPeito)
   await medidasCavalos.put("alturaGarupa", body.alturaDaGarupa)
   await medidasCavalos.put("comprimentoEspadua", body.comprimentoDaEspadua)
   await medidasCavalos.put("comprimentoDorsoLombar", body.comprimentoDorsoLombar)
   await medidasCavalos.put("alturaCernelha", body.alturaDaCernelha)
   await medidasCavalos.put("larguraAncas", body.larguraDasAncas)
   let sexo
   if (body.sexo == "1") {
     sexo = "femea"
   } else if (body.sexo == "0") {
     sexo = "macho"
   }
   await medidasCavalos.put("sexo", sexo)
   await medidasCavalos.put("qualidade", qualidade)
 }
 
 
 
 function inputMedidas(body){
   const medidasInput = []
   medidasInput.push()
   let relacaoDorsoGarupa = parseInt(body.alturaDorso) / parseInt(body.alturaGarupa)
   let relacaoAltCernelhaCorpo = parseInt(body.alturaCernelha) / parseInt(body.comprimentoCorpo)
   let relacaoAncasDorso = parseInt(body.larguraAncas) / parseInt(body.alturaDorso)
   medidasInput.push(relacaoDorsoGarupa)
   medidasInput.push(relacaoAltCernelhaCorpo)
   medidasInput.push(relacaoAncasDorso)
   medidasInput.push(parseInt(body.comprimentoCorpo))
   medidasInput.push(parseInt(body.alturaDorso))
   medidasInput.push(parseInt(body.larguraPeito))
   medidasInput.push(parseInt(body.alturaGarupa))
   medidasInput.push(parseInt(body.comprimentoEspadua))
   medidasInput.push(parseInt(body.comprimentoDorsoLombar))
   medidasInput.push(parseInt(body.larguraAncas))
   return medidasInput
 }