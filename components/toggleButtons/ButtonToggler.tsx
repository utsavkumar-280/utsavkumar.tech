import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

const ButtonToggler = () => {
	const { theme, setTheme, resolvedTheme } = useTheme();

	const themeHandler = () => {
		if (resolvedTheme === "dark") {
			setTheme("light");
		}
		if (resolvedTheme === "light") {
			setTheme("dark");
		}
	};

	console.log({ theme, resolvedTheme });

	// const [mounted, setMounted] = useState(false);
	// useEffect(() => setMounted(true), []);

	// if (!mounted) return null;

	return (
		<button
			className="mx-5 transition-colors ease-in-out  duration-[250ms]"
			onClick={themeHandler}
		>
			{resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
		</button>
	);
};

export default ButtonToggler;
