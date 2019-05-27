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
                    rol={props.data.areas.equipo.asociados}
                    nombreEquipo="Norma Martínez Betanzos"
                    correoEquipo="nmartinez@turanzas.com.mx"
                    linkCorreo="mailto:nmartinez@turanzas.com.mx"
                />
                   <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.uno}
                    parrafoDos={props.data.areas.equipo.areas.dos}
                    parrafoTres={props.data.areas.equipo.areas.tres}
                    parrafoCuatro={props.data.areas.equipo.areas.cuatro}
                    badgeName2={props.data.areas.equipo.educacion.nombre}
                    parrafoUno2={props.data.areas.equipo.educacion.MAdos}
                    parrafoDos2={props.data.areas.equipo.educacion}
                    parrafoTres2={props.data.areas.equipo.educacion}
                    parrafoCuatro2={props.data.areas.equipo.educacion}
                    badgeName3={props.data.areas.equipo.asociaciones.nombre}
                    parrafoUno3={props.data.areas.equipo.asociaciones}
                    parrafoDos3={props.data.areas.equipo.asociaciones}
                    parrafoTres3={props.data.areas.equipo.asociaciones}
                    parrafoCuatro3={props.data.areas.equipo.asociaciones}
                />

            </section>

        </div>
    )
}

export default Abogado;