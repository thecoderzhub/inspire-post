"use client";

import { Diamond, Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`sticky top-0 z-10 transition-all duration-300 pl-4 pr-4 ${isScrolled
                ? "bg-black/10 dark:bg-white/30 bg-opacity-100 rounded-bl-2xl rounded-br-2xl backdrop-grayscale"
                : "bg-transparent border-b border-white/10"
                }`}
        >
            <div className="container flex items-center justify-between h-16">
                <div className="flex items-center space-x-2">
                    <Diamond className="w-6 h-6"  />
                    <span className="text-xl font-semibold">InspirePost</span>
                </div>
                <div className="hidden md:flex items-center space-x-6">
                    <Link href="#features" className="text-sm text-black dark:text-white hover:scale-110 transition-all duration-300">
                        Features
                    </Link>
                    <Link href="#pricing" className="text-sm text-black dark:text-white hover:scale-110 transition-all duration-300">
                        Pricing
                    </Link>
                    <Link href="#about" className="text-sm text-black dark:text-white hover:scale-110 transition-all duration-300">
                        About
                    </Link>
                    <Link href="#integrations" className="text-sm text-black dark:text-white hover:scale-110 transition-all duration-300">
                        Integrations
                    </Link>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center justify-center">
                        {
                            theme === "light" ? (
                                <Button onClick={() => setTheme("dark")} variant="outline" size="icon">
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            ) : (
                                <Button onClick={() => setTheme("light")} variant="outline" size="icon">
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                </Button>
                            )
                        }
                    </div>
                    <Button variant="outline" className="w-full rounded-2xl px-4 py-4 text-md bg-white hover:bg-white text-black hover:shadow-[0px_6px_0px_0px_rgba(0,0,0,1)] shadow-none hover:translate-y-1 transition-all duration-200">
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    );
}
