import Footer from "./footer";
import Navbar4 from "./navbar4";

export default function layout({ children }) {
  return (
    <>
      <Navbar4 />
      {/* <Navbar3 /> */}
      {/* <Navbar /> */}
      {/* <Navbar2 /> */}
      {children}
      <Footer />
    </>
  );
}
