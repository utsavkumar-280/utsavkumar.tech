import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;
	return (
		<div className="min-h-screen w-full flex justify-center font-poppins transition-all ease duration-[250ms] z-0">
			<div className="flex flex-col 2xl:w-7/12 w-[95%] lg:w-8/12 md:w-9/12 sm:w-11/12    z-10">
				<div className="w-full min-h-screen flex flex-col justify-start">
					<Header />
					{children}
				</div>
				<Footer />
			</div>
			{/* <p
				className=" text-9xl 2xl:text-[14rem] 3xl:text-[16rem] fixed left-[-3rem] bottom-[-1rem] whitespace-pre text-themeBgText mb-14"
				aria-hidden="true"
			>
				Hello, Namaste.
			</p> */}
			<p
				className=" text-[10rem] 2xl:text-[16rem] 3xl:text-[17rem] fixed [writing-mode:vertical-rl] left-[-5.5rem] bottom-[-2rem] whitespace-pre text-themeBgText "
				aria-hidden="true"
			>
				Projects
			</p>
		</div>
	);
};

export default Layout;
