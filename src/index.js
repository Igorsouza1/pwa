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
import medidasx from "./assets/medidas/medidasX"
import medidasy from "./assets/medidas/medidasY"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type,Authorization,Access-Control-Allow-Origin",
}


addEventListener('fetch', event => {
  console.log(`Received new request: ${event.request.url}`);

  //POST DO FORMULARIO
  event.respondWith(handleRequest(event.request));
})

//Verifica se a URL é /SUBMIT
async function handleRequest(request) {

  if(request.method === "OPTIONS"){
    return handleOptions(request)
  }
  const url = new URL(request.url)
  if (request.method === 'POST') {
    return submitHandler(request)
  } if (request.method === 'GET') {
    return buscarMedidas(request)
  }

  return new Response('NAO É SUBMIT', { status: 200 });
}


const submitHandler = async request => {


  //Verifica se o method é POST
  if (request.method != 'POST') {
    return new Response("Metho Not Allowed", {
      status: 405
    })
  }

  //Pega os dados do formulario, "comprimentoCorpo"...
  const formData = await request.formData();
  const body = {};
  for (const entry of formData.entries()) {
    body[entry[0]] = entry[1];
  }

  //Aprendizado
  var k = 2; //k can be any integer
  var machine = new generator.kNear(k);
  for (let i = 0; medidasx.length > i; i++) {
    machine.learn(medidasx[i], medidasy[i]);
  }

  //relações de medidas
  let relacaoDorsoGarupa = parseInt(body.alturaDorso) / parseInt(body.alturaGarupa)
  let relacaoAltCernelhaCorpo = parseInt(body.alturaCernelha) / parseInt(body.comprimentoCorpo)
  let relacaoAncasDorso = parseInt(body.larguraAncas) / parseInt(body.alturaDorso)


  await medidasCavalos.put("comprimentoCorpo", body.comprimentoCorpo)
  await medidasCavalos.put("alturaDorso", body.alturaDorso)
  await medidasCavalos.put("larguraPeito", body.larguraPeito)
  await medidasCavalos.put("alturaGarupa", body.alturaGarupa)
  await medidasCavalos.put("comprimentoEspadua", body.comprimentoEspadua)
  await medidasCavalos.put("comprimentoDorsoLombar", body.comprimentoDorsoLombar)
  await medidasCavalos.put("alturaCernelha", body.alturaCernelha)
  await medidasCavalos.put("larguraAncas", body.larguraAncas)

  let sexo
  if (body.sexo == "1") {
    sexo = "femea"
  } else if (body.sexo == "0") {
    sexo = "macho"
  }
  await medidasCavalos.put("sexo", sexo)


  console.log(machine.classify([parseInt(body.comprimentoCorpo), parseInt(body.alturaDorso), parseInt(body.larguraPeito), parseInt(body.alturaGarupa), parseInt(body.comprimentoEspadua), parseInt(body.comprimentoDorsoLombar), parseInt(body.alturaCernelha), parseInt(body.larguraAncas), relacaoDorsoGarupa, relacaoAltCernelhaCorpo, relacaoAncasDorso, parseInt(body.sexo)]))

  //console.log(JSON.stringify(body))
  return Response.redirect("http://localhost:8080/#/resultado")
}

const buscarMedidas = async request => {

  const medidas = {
    "alturaCernelha": await medidasCavalos.get("alturaCernelha"),
    "alturaGarupa": await medidasCavalos.get("alturaGarupa"),
    "alturaDorso": await medidasCavalos.get("alturaDorso"),
    "alturaAncas": await medidasCavalos.get("alturaAncas"),
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