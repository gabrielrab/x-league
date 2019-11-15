import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

import tiro from "../assets/bg-rocketleague.png";
import fifa from "../assets/fifa.png";
import pubg from "../assets/oubg.png";
import rocket from "../assets/rocket.png";

export default function() {
  return (
    <>
      <nav>
        <div className="close-btn">X</div>
        <ul>
          <li>Campeonatos</li>
          <li>Academy</li>
          <li>Transmissoes</li>
          <li>Club</li>
          <li>News</li>
        </ul>
        <div className="profile-content">
          <h4 className="white">
            <Link>Entrar</Link>
          </h4>
        </div>
      </nav>
      <header className="header-index">
        <section className="information-index">
          <article>
            <label className="title">
              <h2>PUBG</h2>
              <h3>SERIES 01</h3>
            </label>
            <p>
              A X League vai promover o seu primeiro campeonato de PUG, seu time
              está preparado para fazer história na primeira edião?
            </p>
          </article>
          <button className="btn">INSCREVA-SE</button>
        </section>
      </header>
      <section className="campeonatos">
        <section className="information-index">
          <article>
            <label className="title">
              <h2>RAINBOW SIX </h2>
              <h3>SERIES 01</h3>
            </label>
            <p>
              A Santos Dex foi a primeira campeã do Rainbow Six 01, seu time
              está preparado para fazer história nessa segunda edicão?
            </p>
          </article>
          <button className="btn">INSCREVA-SE</button>
        </section>
        <div className="outher-cups">
          <ul>
            <li>
              <img src={tiro} alt="r6" />
            </li>
            <li>
              <img src={pubg} alt="r6" />
            </li>
            <li>
              <img src={rocket} alt="r6" />
            </li>
            <li>
              <img src={fifa} alt="r6" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
