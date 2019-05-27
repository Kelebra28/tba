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
                    nombreEquipo="Cecilia Bustamante"
                    correoEquipo="cbustamante@turanzas.com.mx"
                    linkCorreo="mailto:cbustamante@turanzas.com.mx"
                />
                <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas}
                    parrafoUno={props.data.areas.equipo.areas.cinco}
                    parrafoDos={props.data.areas.equipo.areas.seis}
                    parrafoTres={props.data.areas.equipo.areas.ocho}
                    parrafoCuatro={props.data.areas.equipo.areas.uno}
                />

            </section>

        </div>
    )
}

export default Abogado;