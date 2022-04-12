import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Header from "../Header";
import Footer from "../Footer";
import Seo from "../Seo";

const Layout = ({ children }: { children: React.ReactNode }) => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	const { asPath } = useRouter();

	const isHome = asPath === "/";
	const isProjects = asPath === "/projects";
	const isAbout = asPath === "/about";
	const isBlog = asPath === "/blog";

	if (!mounted) return null;
	return (
		<div className="min-h-screen w-full flex justify-center font-poppins bg-themeBg transition-colors ease-in-out  duration-[250ms] z-0">
			<Seo />
			<div className="flex flex-col 2xl:w-7/12 xl:w-8/12  md:w-10/12 sm:w-[90%] w-[92.5%] z-10">
				<div className="w-full flex flex-col justify-start">
					<Header />
					{children}
				</div>
				<Footer />
			</div>
			{isHome && (
				<p
					className=" text-9xl 2xl:text-[14rem] 3xl:text-[16rem] font-abril fixed left-[-3rem] bottom-[-1rem] whitespace-pre text-themeBgText mb-14 transition-all ease-in-out duration-[10ms]"
					aria-hidden="true"
				>
					Hello, Namaste.
				</p>
			)}
			{isProjects && (
				<p
					className=" 3xl:text-[17rem] 2xl:text-[16.5rem] xl:text-[16rem] lg:text-[14rem] md:text-[10.75rem] sm:text-[9.5rem] smer:text-[11rem] smest:text-[9.5rem] xl:left-[-5.5rem]  xl:bottom-[-1rem] lg:left-[-6.5rem] lg:bottom-0 md:left-[-4.25rem] sm:left-[-3.75rem] smer:left-[-4.5rem] smest:left-[-4rem] smest:bottom-[0rem]  left-[-4rem] bottom-[-1.5rem] font-abril  text-themeBgText fixed [writing-mode:vertical-rl]"
					aria-hidden="true"
				>
					Projects
				</p>
			)}
			{isBlog && (
				<p
					className=" 3xl:text-[17rem] 2xl:text-[16.5rem] xl:text-[16rem] lg:text-[14rem] md:text-[10.75rem] sm:text-[9.5rem] smer:text-[11rem] smest:text-[9.5rem] xl:left-[-5.5rem]  xl:bottom-[-1rem] lg:left-[-6.5rem] lg:bottom-0 md:left-[-4.25rem] sm:left-[-3.75rem] smer:left-[-4.5rem] smest:left-[-4rem] smest:bottom-[0rem]  left-[-4rem] bottom-[-1.5rem] font-abril  text-themeBgText fixed [writing-mode:vertical-rl] whitespace-pre"
					aria-hidden="true"
				>
					My Blogs
				</p>
			)}
			{isAbout && (
				<p
					className=" text-9xl 2xl:text-[14rem] 3xl:text-[16rem] font-abril fixed left-[-3rem] bottom-[-1rem] whitespace-pre text-themeBgText mb-14 transition-all ease-in-out duration-[10ms]"
					aria-hidden="true"
				>
					About Me.
				</p>
			)}
		</div>
	);
};

export default Layout;
