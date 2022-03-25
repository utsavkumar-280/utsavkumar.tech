import Link from "next/link";
import Seo from "../components/Seo";

const Home = () => {
	return (
		<>
			<Seo />
			<main className=" w-full min-h-[calc(100vh-105px)] flex justify-center">
				<section className="w-[90%] flex flex-col justify-start">
					<div className=" mt-40  ">
						<h2 className=" text-6xl font-bold text-head-primary">Hi,</h2>
						<h1 className=" text-[5.5rem] font-bold text-head-primary">
							I&apos;m <span className="heroText">Utsav Kumar</span>
						</h1>
						<h3 className="  text-4xl font-semibold text-navLink">
							I am a Frontend Developer
						</h3>
						<p className=" text-navLink mt-4 tracking-wide">
							I have been learning and working with React&apos;s Ecosystem for
							the past 1.5 years. This is my website where you can find things
							that I&apos;ve built, things that I&apos;m building, things that
							I&apos;ve learned, things that I want to share, yadda yadda yadda
							you get the point.
						</p>
						<p className="mt-4 text-navLink tracking-wide">
							View my Projects, Blogs or send me an email at
							utsavkumar280@gmail.com
						</p>
					</div>

					<div className="mt-10">
						<Link href="/about">
							<a>See more about me</a>
						</Link>
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
