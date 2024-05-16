import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";


export default function App() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  const menuItems = [
    "Hacemos",
    'Historia',
    "Donaciones",
    "Contacto",
    "Galeria",
  ];

  function navarticle(d){
    // let new = '#/';
    let c = '#/' + d;

  }



  return (
    <Navbar
      isBordered
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-6" justify="center">
        <NavbarBrand>
          <div className=" ">
            <img src="/logo5.png " className="w-[40px] h-[40px] mr-2" />
          </div>
          <Link href="/">
            <p color="foreground" className="font-bold text-inherit hover:text-yellow-400">Jesus Pan de Vida </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
          <div className=" ">
            <img src="/logo5.png " className="w-[40px] h-[40px] mr-2" />
          </div>
          <Link href="/">
            <p color="foreground" className="font-bold text-inherit">Jesus Pan de Vida </p>
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/#hacemos" className="hover:text-yellow-400">
            Hacemos
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="/#historia" className="hover:text-yellow-400">
            Historia
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="/#donaciones" aria-current="page" className="hover:text-yellow-400">
            Donaciones
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="/#galeria" className="hover:text-yellow-400">
          Contacto
          </Link>
        </NavbarItem>
       
        <NavbarItem>
          <Link color="foreground" href="/#contacto" className="hover:text-yellow-400">
            Galeria
          </Link>
        </NavbarItem>
      </NavbarContent>


      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full hover:text-yellow-400"
              // color={
              //   index === 2
              //     ? "warning"
              //     : index === menuItems.length - 1
              //     ? "danger"
              //     : "foreground"
              // }
              color="foreground"
              href={'/#' + (item).toLocaleLowerCase()}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
