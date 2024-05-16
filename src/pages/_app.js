
import "../styles/globals.css";
import IdiomaProvider from "../../context/IdiomaContext";
import { NextUIProvider } from "@nextui-org/react";


export default function App({ Component, pageProps }) {

  return (
      <IdiomaProvider>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </IdiomaProvider>
  );
}
