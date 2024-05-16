import Layout from "../components/layout"
import Image from "../components/image"
import About from "../components/about"
import Hacemos from "../components/hacemos"
import Donar from "@/components/donar"
import Contacto from "@/components/contacto"
import Isaias61 from '@/components/isaias61';
import Mateo4 from '@/components/mateo4';
import Galeria from '@/components/gallery';



export default function Home() {

  return (
    <>
      <Layout>
        <Image />
        <Hacemos />
        <Mateo4/>
        <About />
        <Isaias61/>
        {/* TODO: ARREGLAR DONAR QUE TIENE PROBLEMAS */}
        <Donar />
        <Contacto />
        <Galeria/>
      </Layout>
    </>
  )
}

