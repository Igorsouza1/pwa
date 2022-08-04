import { createAuth0 } from '@auth0/auth0-vue';

const auth0 = createAuth0({
    domain: DOMAIN_AUTH,
    client_id: CLIENT_ID_AUTH,
    redirect_uri: REDIRECT_AUTH
  })

export default auth0