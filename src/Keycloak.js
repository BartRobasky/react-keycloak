import Keycloak from 'keycloak-js';
const keycloak = new Keycloak({
  url: 'http://localhost:4000/',
  realm: 'Keycloak-react-auth',
  clientId: 'React-auth',
});

export default keycloak;
