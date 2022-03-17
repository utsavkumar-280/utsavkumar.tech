import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

import ButtonToggler from "../toggleButtons/ButtonToggler";

const Header = () => {
	const { asPath } = useRouter();

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

	const isDashboard = asPath === "/dashboard";
	return (
		<div className=" w-full xl:h-[105px] lg:h-24 sm:h-20 h-16 sticky top-0 z-10 flex items-end bg-themeBg  ">
			<div className="w-full flex items-center">
				<motion.h1 className=" font-abril  text-4xl text-headPrimary">
					UK.
				</motion.h1>
				<div className=" flex flex-grow justify-end items-center">
					<nav className=" flex items-center justify-between  text-headPrimary font-poppins">
						<Link href="/" passHref>
							<motion.a className=" font-poppins  mx-5 text-navLink">
								Projects
							</motion.a>
						</Link>
						<Link href="/" passHref>
							<motion.a className=" font-poppins  mx-5 text-navLink">
								Blog
							</motion.a>
						</Link>
						<Link href="/" passHref>
							<motion.a className=" font-poppins   mx-5 text-navLink">
								About
							</motion.a>
						</Link>
						<ButtonToggler />
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Header;
