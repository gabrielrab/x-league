import React from "react";
//import { Link } from "react-router-dom";
import { FaRegPlayCircle } from "react-icons/fa";

import "./campeonatos.css";
import small from "../assets/small.png";
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
          <li>Transmissoes</li>
          <li>Perfil</li>
          <li>Equipe</li>
          <li>Aulas</li>
          <li>Premium</li>
        </ul>
        <div className="profile-content">
          <img
            src={`https://secure.gravatar.com/avatar/${Math.random()}?d=identicon&s=128`}
            alt="Profile"
          />
          <article>
            <h5>Gera</h5>
            <h5>GeraCosta</h5>
            <h5>
              <FaRegPlayCircle className="min-icon" />
              1983
            </h5>
          </article>
        </div>
      </nav>
      <header>
        <div className="information-container">
          <img src={small} alt="information" className="info-img" />
          <article>
            <label className="title">
              <h2>PUBG</h2>
              <h3>Series 01</h3>
            </label>
            <p>
              A X League vai promover o seu primeiro campeonato de PUG, seu time
              está preparado para fazer história na primeira edião?
            </p>
          </article>
          <button>INSCREVER-SE</button>
        </div>
      </header>
      <section className="specs">
        <ul className="list-spec-link">
          <li>Visão Geral</li>
          <li>Regulamento</li>
          <li>Inscritos</li>
          <li>Brackets</li>
          <li>Transmissoes</li>
        </ul>
        <div className="content-specs">
          <h4>Disponivel em:</h4>
          <p>PC</p>
          <h4>Descricão</h4>
          <p>
            {" "}
            A X League vai promover o seu primeiro campeonato de PUG, seu time
            está preparado para fazer história na primeira edião?
          </p>
        </div>
      </section>
      <section className="outher-cups">
        <h2>Outros Campeonatos</h2>
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
      </section>
    </>
  );
}
