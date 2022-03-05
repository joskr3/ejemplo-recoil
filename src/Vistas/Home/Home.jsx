import React from 'react'
import { useRecoilValue } from 'recoil';
import Boton from '../../Componentes/Boton/Boton';
import FontSizeTitle from '../../Componentes/FontSizeTitle/FontSizeTitle';
import { countAtom } from '../../Recoil/Atoms/CountAtom';

const Home = () => {
    const count = useRecoilValue( countAtom );
    return (
        <div className="App">
            <h1>Ejemplo Recoil</h1>
            <h2>El valor del conteo es: {count} </h2>
            <FontSizeTitle />
            <Boton texto="Aumentar conteo" />
            <Boton texto="Resetear conteo" />
        </div>
    );
}

export default Home