import { createAuth0 } from '@auth0/auth0-vue';

const auth0 = createAuth0({
    domain: "dev-52b4qihk.us.auth0.com",
    client_id: "sClZvLLGZsSxNEU4QGbIjSnc17ioDoLd",
    redirect_uri: 'http://localhost:8080/#/formulario'
  })

export default auth0;