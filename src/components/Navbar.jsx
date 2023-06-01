import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import "../css/App.css";
<<<<<<< HEAD
import logo from "../../public/Logo.png"
=======

>>>>>>> parent of e307c49 (testessss)

function Navbar() {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <>
      <nav className="navbar active fixed-top navbar-expand-lg">
        <div className="container">
          <div className="navbrand">
          <a className="navbar-brand" href="#">
<<<<<<< HEAD
            <img src={logo} alt="logo" />
=======
            <img src="../assets/Logo.png" alt="logo" />
>>>>>>> parent of e307c49 (testessss)
          </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse align-content-end offcanvas offcanvas-end text-bg-light" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label" aria-modal="true" role="dialog"
            data-bs-scroll="true">
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body align-items-end text-center justify-content-end">
              <ul className="navbar-nav mr-auto gap-3">
                <li className="nav-item">
                  <Link to="/" className={"nav-link " + (url === "/" ? " active" : "")} >
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/sobre" className={"nav-link " + (url === "/sobre" ? " active" : "")}>
                    Sobre
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/explorar" className={"nav-link " + (url === "/explorar" ? " active" : "")}>
                    Explorar
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#footer" className={"nav-link " + (url === "/contactos" ? " active" : "")}>
                    Contactos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
