import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Blog = () => {
	return (
		<>
			<Seo />
			<main className=" w-full min-h-[calc(100vh-105px)] flex justify-center">
				<div className="hone">This is blog page</div>
			</main>
		</>
	);
};

export default Blog;
