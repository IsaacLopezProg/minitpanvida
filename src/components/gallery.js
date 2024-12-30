// Galeria.js

import React,{useContext} from 'react';
import { IdiomaContext } from "../../context/IdiomaContext"

// const images = [
//   '/fotos1.jpg',
//   '/fotos2.jpg',
//   '/fotos3.jpg',
//   '/fotos4.jpg',
//   '/fotos5.jpg',
//   '/fotos6.jpg',
// ];

function Galeria({contenido}) {

  // console.log(contenido[0].data.images);
  let images = contenido[0].data.images;

  const idioma = useContext(IdiomaContext);

  return (
    <div className=" mx-auto px-5 py-2 lg:px-32 lg:pt-24 bg-[#fce34b]" id="galeria">
      <div className=" mb-5 font-semibold  pt-4">
        <h3 className='text-4xl text-center'>
        { idioma === "es"? "Galeria" : "Gallery" }
        </h3>
        <p className='text-center text-ligth text-2xl'>
        { idioma === "es"? "Muestra de algunas de nuestras actividades" : "Sample of some of our activities" }
        </p>
      </div>
      <div className=" flex flex-wrap w-[80%] mx-auto pb-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2"
          >
            <img
              className="block mx-auto h-full object-cover object-center rounded-lg shadow-md"
              src={image.image}
              alt={`Imagen ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;


// export async function getServerSideProps(){

//   const apikey = process.env.BUILDERIO_PRIVATE_KEY;
//   // const api = await fetch(`https://cdn.builder.io/api/v2/content/post?apiKey=${apikey}&limit=10`);
//   // const api = await fetch(`https://cdn.builder.io/api/v2/content/post?apiKey=${apikey}&fields=id,data.tema,data.descripcion,data.video,createdDate&limit=100`);
//   const api = await fetch(`https://cdn.builder.io/api/v3/content/fotos?apiKey=2adc8e18de214ccb98d3fb942b5d8410&fields=data.images`);
//   // https://cdn.builder.io/api/v3/content/fotos?apiKey=2adc8e18de214ccb98d3fb942b5d8410&fields=data.images

//   const res = await api.json();
//   // const posts = res.results;
//   const posts = res.results;
  

//   console.log(res.results.images);
//   console.log(posts);

//     return {
//         props: {
//             posts
//             // res
//         }
//     }
//   }