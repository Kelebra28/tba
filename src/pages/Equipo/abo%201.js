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
                    nombreEquipo="Luis Alberto Rosas Ortiz"
                    correoEquipo="lrosas@turanzas.com.mx"
                    linkCorreo="mailto:lrosas@turanzas.com.mx"
                />
                  <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.dos}
                    parrafoDos={props.data.areas.equipo.areas.diez}
                    parrafoTres={props.data.areas.equipo.areas.veinte}

                    parrafoUno2={props.data.areas.equipo.educacion.LAuno}
                    parrafoDos2={props.data.areas.equipo.educacion.LAdos}
                    parrafoTres2={props.data.areas.equipo.educacion.LAtres}
                />

            </section>

        </div>
    )
}

export default Abogado;