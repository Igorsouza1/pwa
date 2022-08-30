/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */


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

  console.log(JSON.stringify(body))
  return Response.redirect("https://pwa-da1.pages.dev/#/")
}

 
  