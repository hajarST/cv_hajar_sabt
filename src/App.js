

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

import ProfileImage from "./Components/ProfileImage";
import { Card } from 'primereact/card';
import { Analytics } from '@vercel/analytics/react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";

import "primereact/resources/primereact.min.css";

import "primeicons/primeicons.css";
import Expériences from "./Components/Expériences";
import Formations from "./Components/Formations";
import Certificats from "./Components/Certificats";
import Projets from "./Components/Projets";

function App() {
  return (
    <BrowserRouter>
      <div>
      
        <header className="header">
          <ProfileImage />
          <h1>Elève ingénieur Hajar Sabt</h1>
          <h2>En quatriéme année ingénierie informatique et réseaux </h2>
        </header>

     
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/formations" className="nav-link">
                Formations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/certificats" className="nav-link">
                Certifications
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/expériences" className="nav-link">
                Expériences
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/projets" className="nav-link">
                Projets
              </Link>
            </li>
            

          </ul>

        </nav>

     
        <div className="container mt-4">
          <Routes>
              <Route exact path="/" element={<Accueil />} />
              <Route path="/formations" element={<Formations />} />
              <Route path="/certificats" element={<Certificats />} />
              <Route path="/expériences" element={<Expériences />} />
              <Route path="/projets" element={<Projets />} />
             
          </Routes>
        </div>

        <footer className="footer">
          <p>hajarsabt@gmail.com </p>
        </footer>
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

// Composant Accueil
function Accueil() {
  return (
    <section className="section">
      <Card title="Hajar SABT">
        <p className="m-0" style={{ textAlign: 'justify' }}>
         Actuellement élève Ingénieur d'État en Ingénierie  Informatique et réseaux   et titulaire d'un diplôme de technicien spécialisé en Gestion des Entreprises en 2017 et un diplôme de technicien spécialisé en Développement Informatique en 2019 .
        </p>
        <p className="m-0" style={{ textAlign: 'justify' }}>
          En tant que élève ingénieur et technicien spécialisé j'ai découvert différents technologies : Php , Dot Net (ADO.Net , ASP.Net , Linq to Sql ) , Java , Html et CSS et Javascript et différents CRM comme: Wordpress.
        </p>
      </Card>
    </section>
  );
}

export default App;
