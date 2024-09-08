import React,{useContext} from "react"
import { IdiomaContext } from "../../context/IdiomaContext"
import lang from "../../public/about.json"


export default function About() {

    const idioma = useContext(IdiomaContext);
    const {descripcion, descripcion2, descripcion3} = lang;


    return (
        <>
            <div>
                <section className=" bg-[#fce34b] text-black" id="historia">
                    <div className="max-w-screen-md lg:max-w-screen-xl gap-16 items-center py-8 px-4 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="font-light  sm:text-lg ">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">America Ducasse</h2>
                            <p className="mb-4">
                                { idioma === "es"? descripcion.es : descripcion.en }
                            </p>

                            <h2 className="mt-8 mb-4 text-4xl tracking-tight font-extrabold ">Jesus Pan de Vida </h2>
                            <p className="mb-4">
                            { idioma === "es"? descripcion2.es : descripcion2.en }
                            </p>
                            <p>
                            { idioma === "es"? descripcion3.es : descripcion3.en }
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <img className="w-full rounded-lg" src="/america5.jpg" alt="office content 1" />
                            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="/america.jpeg" alt="office content 2" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}