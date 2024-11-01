import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <React.Fragment>
      <header className='dashboard'>
        <img src="./src/assets/img/LOGO PORTO AUTOAJUDA.png" alt="logotop-portoseguro" id="logoautoajuda" />
        <button className="hamburger"></button>
        <div className="navtop">
          <nav>
            <Link to="/sobre-nos">Sobre nós</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/ajuda">Ajuda</Link>
            <Link to="/contato">Contato</Link>
          </nav>
        </div>
      </header>
      
      <div className="maincontent">
        <div className="textoprincipal-dash">
          <h1>Seja bem-vindo/a (usuário)</h1>
          <p id="segundafrase">
            Nosso chatbot interativo coleta informações sobre os sintomas do seu carro para diagnosticar possíveis
            problemas e fornecer um orçamento estimado. Após o diagnóstico virtual, você pode agendar uma inspeção física
            em nossa oficina para resolver o problema detectado.
          </p>
          <p id="terceirafrase">Conte conosco!</p>
          <Link to="/diagnostico" className="button">Começar o diagnóstico</Link>
        </div>
        <img src="./src/assets/img/fotohomemazul.png" alt="fotohomem" id="imagemesquerda" />
      </div>

      <footer>
        <div className="footercontent-dash">
          <img src="./src/assets/img/logo-porto.png" id="portologorodape" alt="logoportorodape" />
          <p id="textorodape">Acompanhe a Porto nas redes sociais</p>
          <ul className="socialicons">
            <Link to="https://www.facebook.com/porto">
              <li><img src="./src/assets/img/redes-sociais/FACEBOOK 1.png" alt="facebook" /></li>
            </Link>
            <Link to="https://www.instagram.com/porto">
              <li><img src="./src/assets/img/redes-sociais/instagram.png" alt="instagram" /></li>
            </Link>
            <Link to="https://www.linkedin.com/company/porto/">
              <li><img src="./src/assets/img/redes-sociais/linkedin 1.png" alt="linkedin" /></li>
            </Link>
            <Link to="https://www.youtube.com/portoseguro">
              <li><img src="./src/assets/img/redes-sociais/youtube.png" alt="youtube" /></li>
            </Link>
            <Link to="https://twitter.com/portoseguro">
              <li><img src="./src/assets/img/redes-sociais/twitter 1.png" alt="twitter" /></li>
            </Link>
            <Link to="https://www.tiktok.com/@portoseguro">
              <li><img src="./src/assets/img/redes-sociais/tiktok 1.png" alt="tiktok" /></li>
            </Link>
          </ul>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Dashboard;