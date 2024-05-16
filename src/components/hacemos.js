import react,{useContext} from 'react';
import { MdCheckCircle, MdVisibility, MdOutlineVisibility } from "react-icons/md"
import { TbTargetArrow } from "react-icons/tb"
import Link from "next/link"
import { IdiomaContext } from 'context/IdiomaContext'
import lang from "../../public/hacemos.json"

export default function Hacemos() {

    const idioma = useContext(IdiomaContext);
    const {titulo,subtitulo, mision, vision, objetivos} = lang;


    return (
        <>

            <div className=" bg-[#fce34b] py-8 " id='hacemos'>
                <div className="mx-10 my-6">
                    <div id="Title" className="" >
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold  text-black text-center">
                        {
                            idioma === 'es'
                                ? `${titulo.es}`
                                : `${titulo.en}`
                        }
                            {/* Que Hacemos? */}
                        </h2>
                        {/* TODO: HACER TODO EN UN SOLO ARCHIVO PARA EL NAV */}
                        {/* <Link href="#hola" className="text-xl text-black">
                            Click
                        </Link> */}
                        <p className="mb-8   sm:text-xl text-gray-600 text-center">
                        {
                            idioma === 'es'
                                ? `${titulo.es}`
                                : `${titulo.en}`
                        }
                        </p>
                    </div>
                    <div id="image" >
                        <div className="flex justify-center mt-14">
                            <img src="/hacemos.jpg" className="w-[90%] md:w-[60%] h-[20%] rounded-md shadow-md" />
                        </div>
                    </div>
                    <div id="text" className="text-black">
                        <div className="mt-14 sm:flex text-center justify-around">
                            <div className="mx-8 my-8 sm:my-0">
                                <div className="flex justify-center">
                                    <MdCheckCircle className=" h-24 w-24" />
                                </div>
                                <h4 className="mb-4 text-3xl tracking-tight font-semibold  text-black text-center">
                                {
                                        idioma === 'es'
                                            ? `${mision.titulo.es}`
                                            : `${mision.titulo.en}`
                                    }
                                </h4>
                                <p className="mb-8   sm:text-lg text-gray-600 text-center text-justify">
                                    {/* El proposito del ministerio internacional <span>JESUS PAN DE VIDA</span> es llevar a todas las personas tanto a niños, jovenes
                                    y adultos a un mayor conocimiento de Jesus, ayudandolos como su Señor y Salvador, para que sus vidas sean transformadas,
                                    pasando de las tinieblas a su luz admirable. */}
                                    {
                                        idioma === 'es'
                                            ? `${mision.descripcion.es}`
                                            : `${mision.descripcion.en}`
                                    }

                                    {/* El proposito del ministerio internacional JESUS PAN DE VIDA es llevar a las persona al conocimiento de Jesucristo, y que sus vidas sean transformadas, pasando de las tinieblas a su luz admirable. */}

                                </p>
                            </div>
                            <div className="mx-8 my-8 sm:my-0">
                                <div className="flex justify-center">
                                    <MdVisibility className=" h-24 w-24" />
                                </div>
                                <h4 className="mb-4 text-3xl tracking-tight font-semibold  text-black text-center">
                                {
                                        idioma === 'es'
                                            ? `${vision.titulo.es}`
                                            : `${vision.titulo.en}`
                                    }
                                </h4>
                                <p className="mb-8   sm:text-lg text-gray-600 text-center text-justify">
                                {
                                        idioma === 'es'
                                            ? `${vision.descripcion.es}`
                                            : `${vision.descripcion.en}`
                                    }


                                </p>
                            </div>
                        </div>
                        <div className="mx-8 my-8 sm:my-0">
                            <div className="flex justify-center">
                                <TbTargetArrow className=" h-24 w-24" />
                            </div>
                            <h4 className="mb-4 text-3xl tracking-tight font-semibold  text-black text-center">
                            {
                                        idioma === 'es'
                                            ? `${objetivos.titulo.es}`
                                            : `${objetivos.titulo.en}`
                                    }
                            </h4>
                            <article className="mb-8   sm:text-lg text-gray-600 text-center text-justify" id="hola">
                                <ul>
                                    <li> <span className="font-bold"> - </span>
                                    {
                                        idioma === 'es'
                                            ? `${objetivos.descripcion1.es}`
                                            : `${objetivos.descripcion1.en}`
                                    }
                                    </li>
                                    <li>
                                        <span className="font-bold"> - </span> 
                                        {
                                            idioma === 'es'
                                                ? `${objetivos.descripcion2.es}`
                                                : `${objetivos.descripcion2.en}`
                                        }
                                    </li>
                                    <li>
                                        <span className="font-bold"> - </span> 
                                        {
                                            idioma === 'es'
                                                ? `${objetivos.descripcion3.es}`
                                                : `${objetivos.descripcion3.en}`
                                        }
                                    </li>
                                    <li className="font-bold">
                                        {/* <span className="font-bold"> - </span>  */}
                                        {
                                            idioma === 'es'
                                                ? `${objetivos.verso.es}`
                                                : `${objetivos.verso.en}`
                                        }
                                    </li>
                                </ul>
                            </article>
                        </div>

                        {/* <div className="mx-8 my-8 sm:my-0">
                            <div className="flex justify-center">
                                <TbTargetArrow className=" h-24 w-24" />
                            </div>
                            <h4 className="mb-4 text-3xl tracking-tight font-semibold  text-black text-center">Versos Objetivos</h4>
                            <article className="mb-8   sm:text-lg text-gray-600 text-center text-justify" id="hola">
                                <ul>
                                    <li> <span className="font-bold"> Mateo 4:4 dice: <br/> </span>
                                    

                                    “Él respondió y dijo: Escrito está: No solo de pan vivirá el hombre, 
                                    sino de toda palabra que sale de la boca de Dios.”
                                    </li>
                                    <li>
                                        <span className="font-bold"> Isaías 61:1-11 dice: <br/> </span> 
                                        

                                        “El Espíritu de Jehová el Señor está sobre mí, 
                                        porque me ungió Jehová; me ha enviado a predicar buenas nuevas a los abatidos,
                                         a vendar a los quebrantados de corazón, a publicar libertad a los cautivos, 
                                         y a los presos apertura de la cárcel. Me gozaré en Jehová, 
                                         mi alma se alegrará en mi Dios; porque me vistió con vestiduras de salvación, 
                                         me rodeó de manto de justicia, como a novio me atavió, 
                                         y como a novia adornada con sus joyas. Porque como la tierra produce su renuevo, 
                                         y como el huerto hace brotar su semilla, 
                                         así Jehová el Señor hará brotar justicia y alabanza delante de todas las naciones.”
                                    </li>
                                </ul>
                            </article>
                        </div> */}

                        



                    </div>
                </div>
            </div>

        </>
    )
}