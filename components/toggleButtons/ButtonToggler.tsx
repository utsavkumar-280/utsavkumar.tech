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

	return (
		<button className="mx-5" onClick={themeHandler}>
			{resolvedTheme === "dark" ? <MoonIcon /> : <SunIcon />}
		</button>
	);
};

export default ButtonToggler;
