import Link from "next/link";
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import Spotify from "../Spotify";

const Footer = () => {
	return (
		<div className=" w-full xl:h-[105px] lg:h-24 sm:h-20 h-16 flex items-start justify-center transition-all ease duration-300">
			<nav className="w-[95%] flex justify-between items-center ">
				<div className=" flex items-center justify-between  text-xl text-navLink ">
					<a
						href="https://twitter.com/utsavkumar280"
						target="_blank"
						rel="noreferrer"
						className=" mr-5"
					>
						<FaTwitter />
					</a>
					<a
						href="https://www.linkedin.com/in/utsav-kumar-a3a79b187/"
						target="_blank"
						rel="noreferrer"
						className=" mr-5"
					>
						<FaLinkedinIn />
					</a>
					<a
						href="https://github.com/utsavkumar-280"
						target="_blank"
						rel="noreferrer"
						className=" mr-5"
					>
						<FaGithub />
					</a>
					<a
						href="https://www.instagram.com/yo.ut.eee"
						target="_blank"
						rel="noreferrer"
						className=" mr-5"
					>
						<FaInstagram />
					</a>
					<a
						href="https://blog.utsavkumar.tech"
						target="_blank"
						rel="noreferrer"
						className=" mr-5"
					>
						<SiHashnode />
					</a>
				</div>

				<Spotify />
			</nav>
		</div>
	);
};

export default Footer;
