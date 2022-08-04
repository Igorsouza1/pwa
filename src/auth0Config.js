import { createAuth0 } from '@auth0/auth0-vue';

const auth0 = createAuth0({
    domain: "dev-d8k6skw4.us.auth0.com",
    client_id: "0gS5gRHJvzz1bf1Cog8BtIAqBFQRtiQQ",
    redirect_uri: 'https://pwa-da1.pages.dev/#/'
  })

export default auth0