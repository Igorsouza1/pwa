/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
<<<<<<< HEAD
 import treinox from "./assets/medidas/treinoX"
 import treinoy from "./assets/medidas/treinoY"
 import KNN from "ml-knn"
=======
import * as generator from "../node_modules/knear"
import medidasx from "./assets/medidas/medidasX"
import medidasy from "./assets/medidas/medidasY"

>>>>>>> ad10b5495ba3f653745093eaacfff84a2be08b9f

addEventListener('fetch', event => {
  console.log(`Received new request: ${event.request.url}`);

  //POST DO FORMULARIO
  event.respondWith(formRequest(event.request));
})

//Verifica se a URL é /SUBMIT
async function formRequest(request) {
  const url = new URL(request.url)
  if (url.pathname === '/submit') {
    return submitHandler(request)
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

<<<<<<< HEAD
  var train_dataset = treinox
  var train_labels = treinoy
  var knn = new KNN(train_dataset, train_labels, { k: 2 }); // consider 2 nearest neighbors
  
  //relação das medidas
  var relacaoDorsoLombar = body.alturaDorso / body.alturaGarupa
  var relacaoCernelhaCorpo = body.alturaCernelha / body.comprimentoCorpo
  var relacaoAncasDorso = body.larguraAncas / body.alturaDorso

  var dataset = [body.comprimentoCorpo, body.alturaDorso, body.larguraPeito, body.alturaGarupa, body.comprimentoEspadua, body.comprimentoDorsoLombar, body.alturaCernelha, body.larguraAncas, relacaoDorsoLombar, relacaoCernelhaCorpo, relacaoAncasDorso, 1.0]
  console.log(dataset)
var ans = knn.predict(dataset);

console.log(ans)

  console.log(JSON.stringify(body))
  return Response.redirect("http://localhost:8080/#/")
=======
  //Aprendizado
  var k = 2; //k can be any integer
  var machine = new generator.kNear(k);
  for (let i =0; medidasx.length > i; i++) {
      machine.learn(medidasx[i], medidasy[i]);
  }

  //relações de medidas
  let relacaoDorsoGarupa = parseInt(body.alturaDorso)/ parseInt(body.alturaGarupa)
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
  if(body.sexo == "1"){
    sexo = "femea"
  }else if(body.sexo == "0"){
    sexo = "macho"
  }
  await medidasCavalos.put("sexo", sexo)


  //console.log(machine.classify([parseInt(body.comprimentoCorpo),	parseInt(body.alturaDorso),	parseInt(body.larguraPeito),	parseInt(body.alturaGarupa),	parseInt(body.comprimentoEspadua),	parseInt(body.comprimentoDorsoLombar),	parseInt(body.alturaCernelha),	parseInt(body.larguraAncas),	relacaoDorsoGarupa,	relacaoAltCernelhaCorpo,	relacaoAncasDorso,	parseInt(body.sexo)]))

  console.log(JSON.stringify(body))
  return Response.redirect("http://localhost:8080/#/resultado")
>>>>>>> ad10b5495ba3f653745093eaacfff84a2be08b9f
}


