import Seo from "../../components/Seo";
import Link from "next/link";
import Image from "next/image";
import { projectData } from "./data";

const Projects = () => {
	return (
		<>
			<main className=" w-full xl:min-h-[calc(100vh-105px)] lg:min-h-[calc(100vh-96px)] sm:min-h-[calc(100vh-80px)] min-h-[calc(100vh-64px)] flex justify-center">
				<section className="sm:w-[90%] w-[96%] flex flex-col justify-start ">
					<div className=" lg:mt-28 md:mt-16  sm:mt-14 smer:mt-12 mt-8 mb-6 ">
						<h2 className=" lg:text-5xl sm:text-4xl smer:text-3xl text-3xl font-bold text-head-primary ">
							Projects.
						</h2>
					</div>
					<section className=" grid lg:grid-cols-2">
						{projectData.map((project) => (
							<div
								key={project.id}
								className=" flex-col border-2 transition-all ease-in-out border-cardBorder  rounded-xl p-3 lg:mr-4 lg:mt-4 lg:mb-0 mb-4"
							>
								<p className=" text-2xl font-bold my-1 transition-all ease-in-out text-headPrimary">
									{project.name}{" "}
								</p>
								<p className="text-navLink transition-all ease-in-out">
									{project.heading}{" "}
								</p>
								<div className=" w-full 3xl:h-56 2xl:h-48 lg:h-44 md:h-72 sm:h-64 smer:h-48 smest:h-40 relative my-3">
									<Image
										className=" shadow-sm rounded-lg "
										src={project.image}
										alt="proj-img"
										layout="fill"
										objectFit="cover"
										objectPosition="center"
									/>
								</div>
								<div className="flex flex-wrap">
									{project.techStack.map((tech) => (
										<div
											key={tech}
											className=" bg-cardBorder text-navLink rounded-full my-1 mr-2 p-[0.125rem] px-3 text-sm transition-all ease-in-out"
										>
											{tech}
										</div>
									))}
								</div>
								<div className="mt-4 mb-2 hover:underline text-headPrimary">
									<Link href={`/projects/${project.route}`}>
										<a>See more →</a>
									</Link>
								</div>
							</div>
						))}
					</section>
				</section>
			</main>
		</>
	);
};

export default Projects;
