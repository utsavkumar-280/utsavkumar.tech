import Link from "next/link";
import Seo from "../components/Seo";

const Home = () => {
	return (
		<>
			<Seo />
			<main className=" w-full xl:min-h-[calc(100vh-105px)] lg:min-h-[calc(100vh-96px)] sm:min-h-[calc(100vh-80px)] min-h-[calc(100vh-64px)] flex justify-center">
				<section className="sm:w-[90%] w-[96%] flex flex-col justify-start ">
					<div className=" lg:mt-40 md:mt-32  sm:mt-24 smer:mt-28 mt-24">
						<h2 className=" md:text-5xl sm:text-4xl smer:text-3xl text-2xl font-bold text-head-primary">
							Hi,
						</h2>
						<h1 className=" lg:text-[4.5rem] md:text-[3.75rem] sm:text-[3.5rem] smer:text-[2.5rem] text-[2.25rem] font-bold text-head-primary">
							I&apos;m{" "}
							<span className="heroText whitespace-pre">Utsav Kumar</span>
						</h1>
						<h3 className="  lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold text-navLink">
							I&apos;m a Frontend Developer
						</h3>
						<p className=" text-navLink mt-4 tracking-wide md:text-base text-sm">
							I have been learning and working with React&apos;s Ecosystem for
							the past 1.5 years. This is my website where you can find things
							that I&apos;ve built, things that I&apos;m building, things that
							I&apos;ve learned, things that I want to share, yadda yadda yadda
							you get the point.
						</p>
						<p className="mt-4 text-navLink tracking-wide md:text-base md:leading-loose text-sm leading-loose">
							View my{" "}
							<span className="bg-cardBorder text-navLink rounded-md my-5 mr-2 p-[0.125rem] px-3  transition-all ease-in-out hover:text-headPrimary ">
								<Link href="/projects">
									<a>Projects</a>
								</Link>
							</span>
							,{" "}
							<span className="bg-cardBorder text-navLink rounded-md my-1 mr-2 p-[0.125rem] px-3  transition-all ease-in-out hover:text-headPrimary">
								<Link href="/blog">
									<a>Blogs</a>
								</Link>
							</span>{" "}
							or send me an email at{" "}
							<span className="bg-cardBorder text-navLink rounded-md my-1 mr-2 p-[0.125rem] px-3  transition-all ease-in-out hover:text-headPrimary">
								<a href="mailto:utsavkumar280@gmail.com">
									utsavkumar280@gmail.com
								</a>
							</span>
						</p>
					</div>

					{/* <div className="mt-10">
						<Link href="/about">
							<a>See more about me →</a>
						</Link>
					</div> */}
					<div className="mt-10 text-navLink hover:text-headPrimary hover:underline transition-all ease-in-out">
						<Link href="/projects">
							<a>Checkout my projects →</a>
						</Link>
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
