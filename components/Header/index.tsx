import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import ButtonToggler from "../toggleButtons/ButtonToggler";
import MenuToggle from "../MenuToggle";

const Header = () => {
	const { asPath } = useRouter();

	const isDashboard = asPath === "/dashboard";
	return (
		<div className=" w-full xl:h-[105px] lg:h-24 sm:h-20 h-16  flex items-end transition-colors ease-in-out duration-[250ms]">
			<div className="w-full flex items-center">
				<motion.h1 className=" font-abril  text-4xl text-headPrimary ">
					UK.
				</motion.h1>
				<div className=" flex flex-grow justify-end items-center">
					<nav className="  items-center justify-between  text-headPrimary font-poppins sm:flex hidden">
						<Link href="/" passHref>
							<motion.a className=" font-poppins  mx-5 text-navLink ">
								Projects
							</motion.a>
						</Link>
						<Link href="/" passHref>
							<motion.a className=" font-poppins  mx-5 text-navLink ">
								Blog
							</motion.a>
						</Link>
						<Link href="/" passHref>
							<motion.a className=" font-poppins   mx-5 text-navLink ">
								About
							</motion.a>
						</Link>
						<ButtonToggler />
					</nav>
					<button className="sm:hidden block">
						<MenuToggle />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
