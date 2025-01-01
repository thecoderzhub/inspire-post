"use client"

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { WavyBackground } from "@/components/ui/wavy-background";

import { Button } from "@/components/ui/button";

export default function App() {
	const { theme, setTheme } = useTheme()

	return (
		<main className="flex items-center justify-center gap-2">
			<WavyBackground className="max-w-4xl mx-auto pb-40">
				{/* <div className="flex items-center justify-center">
					{
						theme === "light" ?
							<Button onClick={() => setTheme("dark")} variant="outline" size="icon">
								<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
								<span className="sr-only">Toggle theme</span>
							</Button>
							:
							<Button onClick={() => setTheme("light")} variant="outline" size="icon">
								<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
							</Button>
					}
				</div> */}
				<p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
					Hero waves are cool
				</p>
				<p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
					Leverage the power of canvas to create a beautiful hero section
				</p>
			</WavyBackground>
		</main>
	)
}

