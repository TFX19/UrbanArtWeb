import { Link } from 'react-router-dom';
import logow from "../../public/Logowhite.svg"
export function Footer() {
  return (
    <div id="footer" className="bg-dark">
      <div className="container">
        <footer className="py-5 ">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
            <div className="col mb-3">
              <a
                href="/"
                className="d-flex align-items-center  mb-3 link-dark text-decoration-none">
                <img src={logow} alt="logo branco" />
              </a>
            </div>
            <div className="col mb-3"></div>
            <div className="col mb-3">
              <h5 className="text-white">Sobre</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-white">Inicio</Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/sobre" className="nav-link p-0 text-white">Sobre</Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/explorar" className="nav-link p-0 text-white">Explorar</Link>
                </li>
              </ul>
            </div>
            <div className="col mb-3">
              <h5 className="text-white">Contactos</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">Telefone<br/><strong>912 345 678</strong></a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">E-mail<br/><strong>email@email.com</strong></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 border-top">
            <p className="text-white">
              {" "}
              <strong>© Copyright 2022/2023 - Arte Urbana - Web</strong>
              <small className="ms-3"> Este website foi desenvolvido como parte de um projeto escolar no âmbito do projeto final de curso. Todas as imagens e ícones exibidos têm uma autoria, sendo que as imagens relacionas com os murais foram retiradas do canal de youtube “Doc Doc TV” do vídeo em especifico “Covilhã: Arte Urbana... e não só!”, da página Roteiro de Arte urbana na Covilhã, Portugal | Viaje Comigo, WOOL | Covilhã Urban Art (Portugal) – Google Os Meus Mapas. Todos os ícones apresentados foram retirados do website “www.flaticon.com”.</small>
            </p>
            {/* <ul className="list-unstyled d-flex">
              <a href="" type="button" className="text-white" target="_blank">
                <small>Política de Privacidade</small>
              </a>
            </ul> */}
          </div>
        </footer>
      </div>
    </div>
  );
}

