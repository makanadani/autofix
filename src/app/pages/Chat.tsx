import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/chat.css';

const Chat: React.FC = () => {
  return (
    <React.Fragment>
      <img src="./src/assets/img/LOGO-PORTO-AUTOAJUDA.png" alt="logotopportoseguro" className="logoautoajuda-chat" />

      <div className="content-chat">
        <div className="chat-container-chat">
          <ul className="mensagem-listbot-chat">
            <div id="bot-chat">
              <img src="./src/assets/img/robo-icon.png" id="roboicon-chat" alt="iconerobo" />
              <label>Porto</label>
            </div>
            <p className="mensagembot-chat">
              Olá, sou a Inteligência Artificial da Porto Seguro que vai te ajudar! Qual seria o problema do seu carro?
            </p>
          </ul>

          <ul className="mensagem-listuser-chat">
            <div id="usuario-chat">
              <label>Você</label>
              <img src="./src/assets/img/user-icon.png" id="usericon-chat" alt="iconeuser" />
            </div>
            <li className="mensagembot-chat">Meu carro não está ligando.</li>
          </ul>

          <div className="search-chat">
            <input type="text" placeholder="Digite aqui..." />
            <i className="bi bi-arrow-right" id="seta-direita-chat"></i>
          </div>
        </div>

        <Link to="/integrantes" id="integrantes-chat">
          <h1>Integrantes</h1>
        </Link>
      </div>

      <footer className="footer-chat">
        <div className="footercontent-chat">
          <img src="./src/assets/img/logo-porto.png" id="portologorodape-chat" alt="logoportorodape" />
          <p>Acompanhe a Porto nas redes sociais</p>
          <ul className="socialicons-chat">
            <Link to="https://www.facebook.com/porto">
              <li><img src="./src/assets/img/redes-sociais/FACEBOOK 1.png" alt="facebook" /></li>
            </Link>
            <Link to="https://www.instagram.com/porto">
              <li><img src="./src/assets/img/redes-sociais/instagram.png" alt="instagram" /></li>
            </Link>
            <Link to="https://www.linkedin.com/company/porto">
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

export default Chat;