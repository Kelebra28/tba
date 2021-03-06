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
                    rol={props.data.areas.equipo.socios}
                    nombreEquipo="Carl Edward Koller Lucio"
                    correoEquipo="ckoller@turanzas.com.mx"
                    linkCorreo="mailto:ckoller@turanzas.com.mx"
                />
                  <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.once}
                    parrafoDos={props.data.areas.equipo.areas.dos}
                    parrafoTres={props.data.areas.equipo.areas.doce}
                    parrafoCuatro={props.data.areas.equipo.areas.catorce}
                    parrafoCinco={props.data.areas.equipo.areas.quince}
                    parrafoSeis={props.data.areas.equipo.areas.dieciseis}

                    badgeName2={props.data.areas.equipo.educacion.nombre}
                    parrafoUno2={props.data.areas.equipo.educacion.CEuno}
                    parrafoDos2={props.data.areas.equipo.educacion.CEdos}
                    parrafoTres2={props.data.areas.equipo.educacion.CEtres}

                    badgeName3={props.data.areas.equipo.asociaciones.nombre}
                    parrafoUno3={props.data.areas.equipo.asociaciones.CEuno}
                    parrafoDos3={props.data.areas.equipo.asociaciones.CEdos}
                />
            </section>

        </div>
    )
}

export default Abogado;