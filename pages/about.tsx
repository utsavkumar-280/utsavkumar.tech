import Layout from "../components/Layout";
import Seo from "../components/Seo";

const About = () => {
	return (
		<>
			<Seo />
			<main className=" w-full min-h-[calc(100vh-105px)] flex justify-center">
				<div className="hone">This is About page</div>
			</main>
		</>
	);
};

export default About;
