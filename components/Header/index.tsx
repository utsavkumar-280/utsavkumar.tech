import Link from "next/link";

import { motion } from "framer-motion";

import ButtonToggler from "../toggleButtons/ButtonToggler";
import MenuToggle from "../MenuToggle";

const Header = () => {
	return (
		<div className=" w-full xl:h-[105px] lg:h-24 sm:h-20 h-16 bg-themeBg sticky  top-0 z-10 flex items-end transition-colors ease-in-out duration-[250ms]">
			<div className="w-full flex items-center">
				<Link href="/" passHref>
					<motion.a className=" font-abril  text-4xl text-headPrimary ">
						UK.
					</motion.a>
				</Link>

				<div className=" flex flex-grow justify-end items-center">
					<nav className="  items-center justify-between  text-headPrimary font-poppins sm:flex hidden">
						<Link href="/projects" passHref>
							<motion.a className=" font-poppins  mx-5 text-navLink ">
								Projects
							</motion.a>
						</Link>
						<Link href="/blog" passHref>
							<motion.a className=" font-poppins  mx-5 text-navLink ">
								Blog
							</motion.a>
						</Link>
						<Link href="/about" passHref>
							<motion.a className=" font-poppins   mx-5 text-navLink ">
								About
							</motion.a>
						</Link>
						<ButtonToggler />
					</nav>
					<div className="sm:hidden block">
						<MenuToggle />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
