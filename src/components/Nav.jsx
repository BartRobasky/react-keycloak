import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const Nav = () => {
  const { keycloak, initialized } = useKeycloak();
  return (
    <div>
      <div className='top'>
        <section>
          <nav>
            <div>
              <h1>Keycloak react auth</h1>
            </div>
            <ul>
              <li>
                <a href='/'>home</a>
              </li>
              <li>
                <a href='/secured'>Secured</a>
              </li>
            </ul>
            <div>
              <div>
                {!keycloak.authenticated && (
                  <button onClick={() => keycloak.login()}>Login</button>
                )}
                {!!keycloak.authenticated && (
                  <button onClick={() => keycloak.logout()}>
                    Logout({keycloak.tokenParsed.preferred_username})
                  </button>
                )}
              </div>
            </div>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Nav;
