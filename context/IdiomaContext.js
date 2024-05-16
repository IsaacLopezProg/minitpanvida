import { createContext, useEffect, useState } from 'react';

export const IdiomaContext = createContext();

export default function IdiomaProvider(props) {
    // IDIOMA
    const [idioma, setIdioma] = useState('');

    useEffect(() => {

        if (navigator.language) {
            const lang = (navigator.language).slice(0, 2);
            setIdioma(lang);
        }
    }, [])

    return (
        <IdiomaContext.Provider value={idioma}>
            {props.children}
        </IdiomaContext.Provider>
    )
}