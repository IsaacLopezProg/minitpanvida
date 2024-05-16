import React,{useContext} from 'react'
import { IdiomaContext } from "../../context/IdiomaContext"
import lang from "../../public/mateo.json"

export default function Mateo4() { 

    const idioma = useContext(IdiomaContext);
    const {es,en} = lang;
    
    return (
    <div className="h-auto w-auto px-12 py-12 bg-[#eff1f2]">
        <h1 className="text-center text-sm md:text-xl font-extrabold text-gray-800">
        { idioma === "es"? es : en }
        </h1>
        <p className="text-center mt-4 text-xl font-light text-gray-800">
        Mateo 4:4
        </p>
        {/* <div className="flex justify-center items-center">
            <AiOutlineCheckCircle className="w-10 h-10 text-green-500" />
        </div> */}
        
    </div>
);
};
