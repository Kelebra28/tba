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
                    parrafoUno={props.data.areas.equipo.areas.uno}
                    parrafoDos={props.data.areas.equipo.areas.dos}
                    parrafoTres={props.data.areas.equipo.areas.tres}
                    parrafoCuatro={props.data.areas.equipo.areas.cuatro}
                />

            </section>

        </div>
    )
}

export default Abogado;