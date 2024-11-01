import React from "react";
import "../assets/css/home.css";

function Home() {
    return (
      <React.Fragment>
        <header>
          <img src="./src/assets/img/LOGO PORTO AUTOAJUDA.png" alt="logotop-portoseguro" id="logoautoajuda" />
          <button className="hamburger"></button>
          <div className="navtop">
            <nav>
              <a href="#">Sobre nós</a>
              <a href="#">Blog</a>
              <a href="#">Ajuda</a>
              <a href="#">Contato</a>
            </nav>
          </div>
        </header>
        <div className="maincontent">
          <div className="textoprincipal">
            <h1>Agendar a manutenção do seu carro ficou mais fácil</h1>
            <p id="segundafrase">
             Oferecemos um serviço online que permite aos clientes agendar a manutenção de seus
                veículos de forma conveniente. Utilizando inteligência artificial, garantimos um diagnóstico preciso e
                rápido do problema do veículo, proporcionando um orçamento transparente e confiável antes mesmo de
                levá-lo à oficina.
            </p>
            <p id="terceirafrase">Simples, rápido e confiável.</p>
            <a href="/login" className="button">Solicite o serviço</a>
          </div>
          <img src="./src/assets/img/fotomulherazul.png" alt="fotomulher" id="imagemdireita" />
        </div>
        <footer>
          <div className="footercontent">
            <img src="./src/assets/img/logo-porto.png" id="portologorodape" alt="logoportorodape" />
            <p id="textorodape">Acompanhe a Porto nas redes sociais</p>
            <ul className="socialicons">
              <a href="https://www.facebook.com/porto">
                <li><img src="./src/assets/img/redes-sociais/FACEBOOK 1.png" alt="facebook" /></li>
              </a>
              <a href="https://www.instagram.com/porto">
                <li><img src="./src/assets/img/redes-sociais/instagram.png" alt="instagram" /></li>
              </a>
              <a href="https://www.linkedin.com/company/porto/">
                <li><img src="./src/assets/img/redes-sociais/linkedin 1.png" alt="linkedin" /></li>
              </a>
              <a href="https://www.youtube.com/portoseguro">
                <li><img src="./src/assets/img/redes-sociais/youtube.png" alt="youtube" /></li>
              </a>
              <a href="https://twitter.com/portoseguro">
                <li><img src="./src/assets/img/redes-sociais/twitter 1.png" alt="twitter" /></li>
              </a>
              <a href="https://www.tiktok.com/@portoseguro">
                <li><img src="./src/assets/img/redes-sociais/tiktok 1.png" alt="tiktok" /></li>
              </a>
            </ul>
          </div>
        </footer>
      </React.Fragment>
    );
  }
  
  export default Home;