import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';


const Tributacion = props => {
    return (
        <div className="page">
        <Izq data={props.data} />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.tributacion.nombre} />
            <Contenido data={props.data}
                parrafo={props.data.areas.practica.area.tributacion.uno}
                parrafoDos={props.data.areas.practica.area.tributacion.dos}
                parrafoTres={props.data.areas.practica.area.tributacion.tres}
                parrafoCuatro={props.data.areas.practica.area.tributacion.cuatro}
            />
        </section>
    </div>
    )
}

export default Tributacion;