/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
 import treinox from "./assets/medidas/treinoX"
 import treinoy from "./assets/medidas/treinoY"
 import KNN from "ml-knn"

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

  return new Response('Hello t!', { status: 200 });
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
}

 
  