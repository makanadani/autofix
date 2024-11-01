import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/integrantes.css';

const Integrantes: React.FC = () => {
  return (
    <React.Fragment>
      <div className="integrantes-wrapper">
        <img src="./src/assets/img/LOGO-PORTO-AUTOAJUDA.png" alt="logotopportoseguro" className="logoautoajuda-integrantes" />
        <h1>Integrantes</h1>

        <div className="main-container-integrantes">
          <div className="container-integrantes">
            <div className="item-integrantes">
              <img src="./src/assets/img/foto-afonso.png" className="foto-integrantes" alt="fotoafonso" />
            </div>
            <div className="infos-integrantes">
              <h2>Afonso Correia Pereira</h2>
              <h2>RM: 557863</h2>
              <h2>1TDSA</h2>
              <h2>
                <a href="https://github.com/afonsocp" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </h2>
            </div>
          </div>

          <div className="container-integrantes">
            <div className="item-integrantes">
              <img src="./src/assets/img/foto-kaique.png" className="foto-integrantes" alt="fotokaique" />
            </div>
            <div className="infos-integrantes">
              <h2>Kaique Richard Suzart</h2>
              <h2>RM: 555607</h2>
              <h2>1TDSA</h2>
              <h2>
                <a href="https://github.com/KaiqueSuzart" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </h2>
            </div>
          </div>

          <div className="container-integrantes">
            <div className="item-integrantes">
              <img src="./src/assets/img/fotomarina.png" className="foto-integrantes" alt="fotojoao" />
            </div>
            <div className="infos-integrantes">
              <h2>Marina Yumi Kanadani</h2>
              <h2>RM:558404</h2>
              <h2>1TDSPX</h2>
              <h2>
                <a href="https://github.com/makanadani" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </h2>
            </div>
          </div>

          <a href="https://github.com/afonsocp/ProjetoPortoAutoAjuda" target="_blank" rel="noopener noreferrer" className="github-link-integrantes">
            Repositório GitHub
          </a>
        </div>

        <footer className="footer-integrantes">
          <div className="footercontent-integrantes">
            <img src="./src/assets/img/logo-porto.png" id="portologorodape-integrantes" alt="logoportorodape" />
            <p id="textorodape-integrantes">Acompanhe a Porto nas redes sociais</p>
            <ul className="socialicons-integrantes">
              <Link to="https://www.facebook.com/porto">
                <li>
                  <img src="./src/assets/img/redes-sociais/FACEBOOK 1.png" alt="facebook" />
                </li>
              </Link>
              <Link to="https://www.instagram.com/porto">
                <li>
                  <img src="./src/assets/img/redes-sociais/instagram.png" alt="instagram" />
                </li>
              </Link>
              <Link to="https://www.linkedin.com/company/porto/">
                <li>
                  <img src="./src/assets/img/redes-sociais/linkedin 1.png" alt="linkedin" />
                </li>
              </Link>
              <Link to="https://www.youtube.com/portoseguro">
                <li>
                  <img src="./src/assets/img/redes-sociais/youtube.png" alt="youtube" />
                </li>
              </Link>
              <Link to="https://twitter.com/portoseguro">
                <li>
                  <img src="./src/assets/img/redes-sociais/twitter 1.png" alt="twitter" />
                </li>
              </Link>
              <Link to="https://www.tiktok.com/@portoseguro">
                <li>
                  <img src="./src/assets/img/redes-sociais/tiktok 1.png" alt="tiktok" />
                </li>
              </Link>
            </ul>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Integrantes;