import { AnimatePresence, motion, useCycle } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

import { MenuToggler } from "./MenuToggler";
import ButtonToggler from "../toggleButtons/ButtonToggler";

const links = [
	{ name: "Home", to: "/" },
	{ name: "Projects", to: "/projects" },
	{ name: "Blog", to: "/blog" },
	{ name: "About", to: "/about" },
];

const itemVariants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 800, velocity: -100, duration: 0.3 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 800, duration: 0.3 },
		},
	},
};

const sideVariants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const MenuToggle = () => {
	const [isOpen, cycleOpen] = useCycle(false, true);
	const { asPath } = useRouter();

	return (
		<motion.main>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ x: 500 }}
						animate={{
							x: 0,
							transition: { delay: 0.1, duration: 0.3, stiffness: 400 },
						}}
						exit={{
							x: 500,
							transition: { delay: 0.4, duration: 0.3, stiffness: 400 },
						}}
						className=" bg-themeBg fixed top-0 left-0 h-screen w-screen grid grid-cols-3"
					>
						<div className="mx-5 mt-[34px] flex justify-start items-start">
							<ButtonToggler />
						</div>

						<motion.div
							className="flex flex-col flex-grow mt-[34px] items-center "
							initial="closed"
							animate="open"
							exit="closed"
							variants={sideVariants}
						>
							{links.map(({ name, to }) => (
								<Link href={to} key={name} passHref>
									<motion.a
										href={to}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.995 }}
										variants={itemVariants}
										className={`text-navLink transition-colors ease-in-out  duration-[250ms] mx-3 mb-8  ${
											asPath === to
												? " text-headPrimary font-semibold text-[1.325rem] "
												: "text-lg"
										}`}
										onClick={() => cycleOpen()}
									>
										{name}
									</motion.a>
								</Link>
							))}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
			<div className="fixed z-50 top-9 right-5">
				<MenuToggler isOpen={isOpen} toggle={cycleOpen} />
			</div>
		</motion.main>
	);
};

export default MenuToggle;
