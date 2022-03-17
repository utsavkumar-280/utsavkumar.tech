import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import styles from "../styles/Home.module.css";

const Home = () => {
	return (
		<Layout>
			<Seo />
			<main>{/* <div className="hone">how are you</div> */}</main>
		</Layout>
	);
};

export default Home;
