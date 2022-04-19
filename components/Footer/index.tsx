import Link from "next/link";
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import Spotify from "../Spotify";

const Footer = () => {
	return (
		<div className=" w-full  lg:h-28  h-40 flex items-center justify-center transition-all ease duration-300">
			<nav className="sm:w-[90%] w-[96%] flex lg:flex-row lg:justify-between lg:items-center flex-col items-center justify-between">
				<div className=" flex items-center justify-between  text-xl  lg:mt-0 mt-4">
					<a
						href="https://twitter.com/utsavkumar280"
						target="_blank"
						rel="noreferrer"
						className=" lg:mr-5 lg:ml-0 mx-3 text-navLink hover:text-headPrimary transition-all ease-in-out"
					>
						<FaTwitter />
					</a>
					<a
						href="https://www.linkedin.com/in/utsav-kumar-a3a79b187/"
						target="_blank"
						rel="noreferrer"
						className="lg:mr-5 lg:ml-0 mx-3 text-navLink hover:text-headPrimary transition-all ease-in-out"
					>
						<FaLinkedinIn />
					</a>
					<a
						href="https://github.com/utsavkumar-280"
						target="_blank"
						rel="noreferrer"
						className="lg:mr-5 lg:ml-0 mx-3 text-navLink hover:text-headPrimary transition-all ease-in-out"
					>
						<FaGithub />
					</a>
					<a
						href="https://www.instagram.com/yo.ut.eee"
						target="_blank"
						rel="noreferrer"
						className="lg:mr-5 lg:ml-0 mx-3 text-navLink hover:text-headPrimary transition-all ease-in-out"
					>
						<FaInstagram />
					</a>
					<a
						href="https://blog.utsavkumar.tech"
						target="_blank"
						rel="noreferrer"
						className="lg:mr-5 lg:ml-0 mx-3 text-navLink hover:text-headPrimary transition-all ease-in-out"
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
