import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from '../assets/logoTuranzas.png';
import '../styles/home.css';

const Home = props => {
    return (
        <div>
            <section className="contenedorLogoHome">
               <img className="logoTuranzasHome" src={Logo} alt="logo turanzas"/> 
            </section>
            <section className="listaHome">
                <ul>
                    <li><Link to="/firma">{props.data.areas.firma.nombre}</Link></li>
                    <li><Link to="/areas/aduanas">{props.data.areas.practica.nombre}</Link></li>
                    <li><Link to="/equipo/sos001">{props.data.areas.equipo.nombre}</Link></li>
                    <li><Link to="/publicaciones/2019">{props.data.areas.publicaciones.nombre}</Link></li>
                    <li><Link to="/oficinas">{props.data.areas.oficinas}</Link></li>
                </ul>
            </section>
        </div>
    )
}

export default Home;