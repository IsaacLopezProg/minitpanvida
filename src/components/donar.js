import React,{useContext} from "react"
import { IdiomaContext } from "../../context/IdiomaContext"
import lang from "../../public/donar.json"

import { Button } from "@nextui-org/react"
import { AiOutlineCheckCircle } from "react-icons/ai"


export default function Donar() {

    const idioma = useContext(IdiomaContext);
    const {titulo,subtitulo, descripcion, descripcion2} = lang;

    return (
        <>
            <div className="md:flex md:h-[600px]" id="donaciones">
                <section className="bg-[#fce34b] md:w-5/6 flex items-center">
                    {/* <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 flex"> */}
                    <div className="my-8 sm:py-6 lg:px-6 lg:w-4/6 w-5/6 mx-auto ">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold  text-black text-center">
                        { idioma === "es"? titulo.es : titulo.en }
                            </h2>
                        <p className="mb-8 font-light  sm:text-xl text-gray-800">
                        { idioma === "es"? subtitulo.es : subtitulo.en }
                            </p>
                        <p className="flex w-5/6 m-auto mb-8 font-light  sm:text-lg text-gray-600">
                            <span className=" mr-4">
                                <AiOutlineCheckCircle className=" h-14 w-8  text-black" />
                            </span>
                            { idioma === "es"? descripcion.es : descripcion.en }
                        </p>
                        <p className="flex w-5/6 m-auto mb-8 font-light  sm:text-lg text-gray-600">
                            <span className=" mr-4">
                                <AiOutlineCheckCircle className=" h-14 w-8  text-black" />
                            </span>
                            { idioma === "es"? descripcion2.es : descripcion2.en }
                        </p>
                        <div className="grid grid-cols-1 sm:max-sm:justify-items-center md:grid-cols-3 gap-4">
                            <div className="bg-white rounded border-gray-500 ">
                                <div className="p-4 ">
                                    <div className="flex items-center justify-center h-12">
                                <img width="40" height="40" src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Toronto-Dominion_Bank_logo.svg" alt="td-bank"/>
                                    <h3 className="text-lg ml-2 leading-6 font-medium text-gray-900">TD Bank</h3>

                                    </div>
                                {/* <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/td-bank.png" alt="td-bank"/> */}
                                {/* <a  href="https://icons8.com/icon/0NqNpZrDKXPh/td-bank">Td Bank</a> icon by <a href="https://icons8.com">Icons8</a> */}
                                    <p className="mt-2 text-sm leading-5 text-gray-500 flex justify-center">
                                        {/* <Button> */}
                                            {/* <button className="p-2 bg-gray-300 border-spacing-3 border-md text-black rounded-md">
                                        <a href="https://www.tdbank.com.mx/" target="_blank" rel="noopener noreferrer">dfgdfgdfgdf</a>
                                            </button> */}
                                            
                                        {/* <Button> */}
                                            <button className="p-2 bg-green-400 border-spacing-3 border-md text-white rounded-md">
                                        <a href="#" target="_blank" rel="noopener noreferrer">TD BANK</a>
                                            </button>
                                    {/* </Button> */}
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded border-gray-500 ">
                                <div className="p-4">
                                    <div className="flex items-center justify-center  h-12">
                                        <img className="" width="50" height="50" src="/Zelle-logo.svg" alt="td-bank"/>
                                        <h3 className="ml-2 text-lg leading-6 font-medium text-gray-900">Zelle</h3>
                                        {/* <a  href="https://icons8.com/icon/0NqNpZrDKXPh/td-bank">Td Bank</a> icon by <a href="https://icons8.com">Icons8</a> */}
                                    </div>
                                    <p className="mt-2 text-sm leading-5 text-gray-500 flex justify-center">
                                        {/* <Button> */}
                                        <button className="p-2 bg-[#6d1ed4] border-spacing-3 border-md text-white rounded-md">
                                            <a href="#" target="_blank" rel="noopener noreferrer">ZELLE</a>
                                        </button>
                                            
                                        {/* <Button> */}
                                            {/* <button className="p-2 bg-green-400 border-spacing-3 border-md text-white rounded-md">
                                        <a href="https://www.tdbank.com.mx/" target="_blank" rel="noopener noreferrer">colaborar</a>
                                            </button> */}
                                        {/* </Button> */}
                                        </p>
                                </div>
                            </div>
                            <div className="bg-white rounded border-gray-500 ">
                                <div className="p-4">
                                <div className="flex items-center justify-center h-12">
                                <img width="50" height="50" src="/Givelify.png" alt="td-bank"/>
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Givelify</h3>
                                    </div>
                                    <p className="mt-2 text-sm leading-5 text-gray-500 flex justify-center">
                                        <Button className="bg-[#f75621] text-white">
                                        <a href="#" target="_blank" rel="noopener noreferrer">GIVELIFY</a>
                                    </Button>
                                    </p>
                                </div>
                            </div>


                            {/* </div> */}
                        </div>
                        {/* <div className="max-w-screen-md"> */}
                    </div>
                </section>
                <div className="md:w-2/6 md:flex hidden">
                    <img src="/voluntario.jpg" className="w-auto md:h-[600px] bg-cover md:w-full " />
                </div>
            </div>
        </>
    )
}