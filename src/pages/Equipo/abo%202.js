import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';

const Abogado = props => {
    return (
        <div className="page" style={{height:1500}}>
            <Izq data={props.data}
            bgc = "#656565"
            fc = "#fff" />
            <section className="areaTextContainer">
                <HeaderEquipo
                    data={props.data}
                    rol={props.data.areas.equipo.abogados}
                    nombreEquipo="Carlos Arturo Rubio Rojas"
                    correoEquipo="crubio@turanzas.com.mx"
                    linkCorreo="mailto:crubio@turanzas.com.mx"
                />
                <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.cinco}
                    parrafoDos={props.data.areas.equipo.areas.ocho}
                    parrafoTres={props.data.areas.equipo.areas.dos}
                    parrafoCuatro={props.data.areas.equipo.areas.uno}
                />

            </section>

        </div>
    )
}

export default Abogado;