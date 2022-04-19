import Seo from "../../components/Seo";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "../../utils/data";

const Blog = () => {
	return (
		<>
			<Seo title="Blogs" />
			<main className=" w-full xl:min-h-[calc(100vh-105px)] lg:min-h-[calc(100vh-96px)] sm:min-h-[calc(100vh-80px)] min-h-[calc(100vh-64px)] flex justify-center">
				<section className="sm:w-[90%] w-[96%] flex flex-col justify-start ">
					<div className=" lg:mt-28 md:mt-16  sm:mt-14 smer:mt-12 mt-8 mb-6">
						<h2 className="lg:text-5xl sm:text-4xl smer:text-3xl text-3xl font-bold text-head-primary ">
							Blogs.
						</h2>
					</div>
					<section className=" grid lg:grid-cols-2">
						{blogData.map((project) => (
							<div
								key={project.id}
								className=" flex-col border-2  border-cardBorder  rounded-xl p-3 lg:mr-4 lg:mt-4 lg:mb-0 mb-4"
							>
								<div className=" w-full 3xl:h-56 2xl:h-48 lg:h-44 md:h-72 sm:h-64 smer:h-48 smest:h-40 relative mb-3">
									<Image
										className=" shadow-sm rounded-lg "
										src={project.image}
										alt="proj-img"
										layout="fill"
										objectFit="cover"
										objectPosition="center"
									/>
								</div>
								<p className=" text-2xl font-bold my-1 transition-all ease-in-out text-headPrimary mx-1">
									{project.name}
								</p>
								<p className="text-navLink transition-all ease-in-out mx-1">
									{project.heading}
								</p>

								<div className="mt-4 mb-2 hover:underline transition-all ease-in-out text-headPrimary mx-1">
									<a
										href={project.website}
										target="_blank"
										rel="noopener noreferrer"
									>
										Read →
									</a>
								</div>
							</div>
						))}
					</section>
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

export default Blog;
