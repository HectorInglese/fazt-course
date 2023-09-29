// app/components/ThemeSwitcher.tsx
"use client";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()

    return (
        <Button
            onClick={() => { theme === 'light' ? setTheme('dark') : setTheme('light') }}
            radius="md"
            color={theme === 'light' ? 'default' : 'secondary'}
            variant="shadow"
        >
            <p className="font-semibold">{theme === 'light' ? 'Dark' : 'Light'}</p>
        </Button>
    );
};
export default ThemeSwitcher;