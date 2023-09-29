import React from 'react'
import { NavbarItem } from "@nextui-org/react";
import navbarItems from '@/const/navbarItems';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const NavItems = () => {
    const pathname = usePathname();
    return (
        <>
            {navbarItems.map((item) => {
                return (
                    <NavbarItem key={item.id} isActive={pathname === item.path}>
                        <Link href={item.path}>{item.name}</Link>
                    </NavbarItem>
                );
            })}
        </>
    );
};
export default NavItems;