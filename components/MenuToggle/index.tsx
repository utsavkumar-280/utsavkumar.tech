import { AnimatePresence, motion, useCycle } from "framer-motion";
import Link from "next/link";

import { MenuToggler } from "./MenuToggler";
import ButtonToggler from "../toggleButtons/ButtonToggler";

const links = [
	{ name: "Home", to: "/", id: 1 },
	{ name: "About", to: "/", id: 2 },
	{ name: "Blog", to: "/", id: 3 },
	{ name: "Contact", to: "/", id: 4 },
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
							{links.map(({ name, to, id }) => (
								<Link href={to} key={id} passHref>
									<motion.a
										key={id}
										href={to}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.995 }}
										variants={itemVariants}
										className="text-navLink transition-colors ease-in-out  duration-[250ms] mx-3 mb-8 text-xl "
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
