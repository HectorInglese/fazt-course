import React from 'react'
import { NavbarItem } from "@nextui-org/react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItems } from '@/interfaces/navItems';

const NavItems = ({ items }: { items: NavItems }) => {

    const pathname = usePathname();
    return (
        <>
            {items.map((item) => {
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