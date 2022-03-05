import React from 'react'
import { useRecoilValue } from 'recoil';
import { fontSizeSelector } from '../../Recoil/Selectors/FontSizeSelector';


const FontSizeTitle = () => {
    const fontSize = useRecoilValue( fontSizeSelector );
    return (
        <>
            <p >El tamaño de la letra es: {fontSize}</p>
            <p style={{ fontSize: fontSize }}>🤖</p>
        </>

    )
}

export default FontSizeTitle;