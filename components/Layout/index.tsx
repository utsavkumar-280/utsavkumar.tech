import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;
	return (
		<div className="min-h-screen w-full flex justify-center font-poppins bg-themeBg transition-colors ease-in-out  duration-[250ms] z-0">
			<div className="flex flex-col 2xl:w-7/12 xl:w-8/12 lg:w-9/12 md:w-10/12 sm:w-[90%] smest:w-[92.5%] z-10">
				<div className="w-full min-h-screen flex flex-col justify-start">
					<Header />
					{children}
				</div>
				<Footer />
			</div>
			<p
				className=" text-9xl 2xl:text-[14rem] 3xl:text-[16rem] font-abril fixed left-[-3rem] bottom-[-1rem] whitespace-pre text-themeBgText mb-14 transition-all ease-in-out duration-[10ms]"
				aria-hidden="true"
			>
				Hello, Namaste.
			</p>
			{/* <p
				className=" 3xl:text-[17rem] lg:text-[16rem] md:text-[12.5rem] sm:text-[11.5rem] smest:text-[12rem] xl:left-[-5.5rem]  xl:bottom-[-1rem] lg:left-[-5.5rem] lg:bottom-0 md:left-[-4.25rem] smest:left-[-5rem] smest:bottom-[0rem]  left-[-4rem] bottom-[-1.5rem] font-abril  text-themeBgText fixed [writing-mode:vertical-rl]"
				aria-hidden="true"
			>
				Projects
			</p> */}
		</div>
	);
};

export default Layout;
