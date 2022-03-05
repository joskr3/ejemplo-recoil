import React from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { countAtom } from '../../Recoil/Atoms/CountAtom';


const BotonAumentar = ( { texto } ) => {
    const [ count, setCount ] = useRecoilState( countAtom );
    return (
        <>
            <button onClick={() => setCount( count + 1 )}>{texto}</button>
        </>
    )
}

const BotonResetear = ( { texto } ) => {
    const resetear = useResetRecoilState( countAtom );
    return (
        <>
            <button onClick={resetear}>{texto}</button>
        </>
    )
}

const Boton = ( { texto } ) => {
    return (
        <>
            {texto === 'Aumentar conteo' ? ( <BotonAumentar texto="Aumentar conteo" /> ) : "Resetear conteo" ? ( <BotonResetear texto="Resetear conteo" /> ) : ( null )}
        </>
    )
}

export default Boton