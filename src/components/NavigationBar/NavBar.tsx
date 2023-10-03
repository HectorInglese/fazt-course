'use client'
import ThemeSwitcher from "../ThemeSwitcher";
import { useState } from "react";
import { Navbar, NavbarContent, } from "@nextui-org/react";
import NavItems from "./NavItems";
import navbarItems from "@/const/navbarItems";
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth='full'
            className="fixed"
        >
            <NavbarContent
                className='hidden sm:flex gap-16 w-full px-7'
                justify="end"
            >
                <NavItems items={navbarItems} />
                <ThemeSwitcher />
            </NavbarContent>
        </Navbar>
    );
};
export default NavBar;