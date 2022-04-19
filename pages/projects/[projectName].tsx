import { useRouter } from "next/router";
import Image from "next/image";
import { projectData } from "./data";

const Project = () => {
	const { query } = useRouter();
	const { projectName } = query;
	console.log({ projectName });

	const project = projectData.find((proj) => proj.route === projectName);
	console.log(project);

	return (
		<main className=" w-full xl:min-h-[calc(100vh-105px)] lg:min-h-[calc(100vh-96px)] sm:min-h-[calc(100vh-80px)] min-h-[calc(100vh-64px)] flex justify-center">
			<section className="sm:w-[90%] w-[96%] flex flex-col justify-start ">
				<div className="lg:mt-28 md:mt-16  sm:mt-14 smer:mt-12 mt-8 mb-6 ">
					<h2 className=" md:text-[40px] sm:text-4xl smer:text-3xl text-2xl font-bold text-headPrimary transition-all ease-in-out">
						{project?.name}
					</h2>
					<div className=" w-full 3xl:h-[52.5vh] lg:h-96 md:h-72 sm:h-64 smer:h-48 smest:h-40 relative my-3">
						{project?.image && (
							<Image
								className=" shadow-sm rounded-lg "
								src={`${project?.image}`}
								alt="proj-img"
								layout="fill"
								objectFit="cover"
								objectPosition="center"
							/>
						)}
					</div>
					<article className=" my-6">
						<h3 className=" text-xl font-semibold my-1 text-headPrimary transition-all ease-in-out">
							About
						</h3>
						<p className="text-navLink transition-all ease-in-out">
							{project?.about}
						</p>
					</article>
					<article className="my-6">
						<h3 className=" text-xl font-semibold my-1 text-headPrimary transition-all ease-in-out">
							Tech Stack
						</h3>
						<div className="flex flex-wrap">
							{project?.techStack.map((tech) => (
								<div
									key={tech}
									className=" bg-cardBorder text-navLink rounded-md my-1 mr-2 p-[0.125rem] px-3  transition-all ease-in-out"
								>
									{tech}
								</div>
							))}
						</div>
					</article>
					<div className="my-6">
						<h3 className=" text-lg font-semibold my-1 text-headPrimary transition-all ease-in-out">
							Live
						</h3>
						<a
							href={project?.website}
							target="_blank"
							rel="noopener noreferrer"
							className="text-navLink hover:text-headPrimary hover:underline transition-all ease-in-out"
						>
							{project?.website}
						</a>
					</div>
					<div className="my-6">
						<h3 className=" text-lg font-semibold my-1 text-headPrimary transition-all ease-in-out">
							Github
						</h3>
						<a
							href={project?.github}
							target="_blank"
							rel="noopener noreferrer"
							className="text-navLink hover:text-headPrimary hover:underline transition-all ease-in-out"
						>
							{project?.github}
						</a>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Project;
