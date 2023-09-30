'use client'
import NavBar from '@/components/NavigationBar/NavBar';
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes';
const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <NextUIProvider>
            <ThemeProvider attribute="class" defaultTheme="dark">
                <NavBar />
                <main className={`container h-[calc(100vh-7rem)] pt-20 px-2 mx-auto`}>
                    {children}
                </main>
            </ThemeProvider>
        </NextUIProvider>
    );
};
export default Providers;