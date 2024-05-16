import React,{useContext} from "react"
import { IdiomaContext } from "../../context/IdiomaContext"
import lang from "../../public/isaias.json"

export default function Isaias61() { 

    const idioma = useContext(IdiomaContext);
    const {es,en} = lang;
    
    return (
    <div className="h-auto w-auto px-12 py-12 bg-[#eff1f2]">
        <h1 className="text-center text-sm md:text-xl font-extrabold text-gray-800 h-[280px]  scroll-smooth overflow-auto">
            { idioma === "es"? es : en }
        </h1>
        <p className="text-center mt-4 text-xl font-light text-gray-800">
        Isaías 61:1-11
        </p>   
    </div>
);
};
