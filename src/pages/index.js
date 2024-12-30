import Layout from "../components/layout"
import Image from "../components/image"
import About from "../components/about"
import Hacemos from "../components/hacemos"
import Donar from "@/components/donar"
import Contacto from "@/components/contacto"
import Isaias61 from '@/components/isaias61';
import Mateo4 from '@/components/mateo4';
import Galeria from '@/components/gallery';

import { NextSeo } from 'next-seo';



export default function Home({posts}) {

  // console.log(posts)

  return (
    <>

      <NextSeo
        title="Ministerio International Jesus Pan de Vida"
        canonical="https://www.ministeriointjesuspandevida.com/"
        />
      <Layout>
        <Image />
        <Hacemos />
        <Mateo4/>
        <About />
        <Isaias61/>
        {/* TODO: ARREGLAR DONAR QUE TIENE PROBLEMAS */}
        <Donar />
        <Contacto />
        <Galeria  contenido={posts} />
      </Layout>
    </>

    
  )
}

export async function getServerSideProps(){

  const apikey = process.env.BUILDERIO_PRIVATE_KEY;
  // const api = await fetch(`https://cdn.builder.io/api/v2/content/post?apiKey=${apikey}&limit=10`);
  // const api = await fetch(`https://cdn.builder.io/api/v2/content/post?apiKey=${apikey}&fields=id,data.tema,data.descripcion,data.video,createdDate&limit=100`);
  const api = await fetch(`https://cdn.builder.io/api/v3/content/fotos?apiKey=${apikey}&fields=data.images&limit=9`);
  // https://cdn.builder.io/api/v3/content/fotos?apiKey=2adc8e18de214ccb98d3fb942b5d8410&fields=data.images
 
  const res = await api.json();
  // const posts = res.results;
  const posts = res.results;

  // console.log(posts)
  // console.log(res.results.images);
  return {
      props: {
          posts
          // res
      }
  }
}

