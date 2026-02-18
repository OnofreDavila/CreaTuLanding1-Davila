import { Link, NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { TiSocialInstagram, TiSocialTwitter, TiSocialFacebook } from "react-icons/ti";
import "./Footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* ── Franja superior decorativa ── */}
      <div className="footer-tape">{"PROYECT CONSPIRACY CLOTHING · STREETWEAR · ".repeat(12)}</div>

      {/* ── Cuerpo principal ── */}
      <div className="footer-body">
        {/* Columna izquierda — Marca */}
        <div className="footer-brand">
          <img src="./logoPC.png" alt="Proyect Conspiracy Clothing logo" className="footer-logo" />
          <p className="footer-tagline">
            Ropa para los que <br />
            <span className="tagline-accent">no piden permiso.</span>
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram" className="social-link">
              <TiSocialInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="social-link">
              <TiSocialTwitter />
            </a>
            <a href="#" aria-label="Facebook" className="social-link">
              <TiSocialFacebook />
            </a>
          </div>
        </div>

        {/* Columna central — Navegación */}
        <nav className="footer-nav">
          <h4 className="footer-nav-title">TIENDA</h4>
          <ul className="footer-nav-list">
            <li>
              <NavLink to="/" className="footer-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/category/Men" className="footer-link">
                Men
              </NavLink>
            </li>
            <li>
              <NavLink to="/category/Women" className="footer-link">
                Women
              </NavLink>
            </li>
            <li>
              <NavLink to="/category/Kids" className="footer-link">
                Kids
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="footer-link">
                <TiShoppingCart style={{ verticalAlign: "middle", marginRight: "4px" }} />
                Carrito
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Columna derecha — Info */}
        <div className="footer-info">
          <h4 className="footer-nav-title">INFO</h4>
          <ul className="footer-nav-list">
            <li>
              <a href="#" className="footer-link">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Envíos y Devoluciones
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Preguntas Frecuentes
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Columna extremo derecho — Gran tipografía decorativa */}
        <div className="footer-deco-col">
          <span className="footer-deco-text">P C</span>
        </div>
      </div>

      {/* ── Línea separadora ── */}
      <div className="footer-divider" />

      {/* ── Pie de página ── */}
      <div className="footer-bottom">
        <p className="footer-copy">© {year} Proyect Conspiracy Clothing. Todos los derechos reservados.</p>
        <p className="footer-made">
          Hecho por <span className="heart">😎</span> Onofre, Davila
        </p>
      </div>
    </footer>
  );
};
