import React from "react";
import '../assets/css/login.css';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <React.Fragment>
      <img src="./src/assets/img/LOGO-PORTO-AUTOAJUDA.png" alt="logotopportoseguro" className="logoautoajuda" />
      <main className="login">
        <form className="container">
          <h1 className="titulo">Acesse sua Conta</h1>
          <h2 className="subtitulo">Preencha seus dados de acesso para continuar.</h2>
          <div className="form">
            <input className="input-cpf" type="text" placeholder="CPF ou CNPJ" required />
            <input className="input-senha" type="password" placeholder="Senha" required />
            <Link to="/dashboard" className="button-login">
              Entrar
              <i className="bi bi-arrow-right" id="seta-direita"></i>
            </Link>
          </div>
          <h1 className="titulobaixo">Ainda não tem sua conta Porto Seguro?</h1>
          <Link to="/register" className="subtitulobaixo">
            Crie uma agora mesmo :)
          </Link>
        </form>
      </main>
      <footer>
        <div className="footercontent">
          <img src="./src/assets/img/logo-porto.png" id="portologorodape" alt="logoportorodape" />
          <p id="textorodape">Acompanhe a Porto nas redes sociais</p>
          <ul className="socialicons">
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
    </React.Fragment>
  );
};

export default Login;