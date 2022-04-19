import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const Seo = () => {
	const router = useRouter();

	console.log(router);
	const defaultMeta = {
		title: "Utsav Kumar",
		siteName: "utsavkumar.tech",
		description:
			"The online portfolio website of Utsav kumar. Showcase of my projects, blogs and web development journey.",
		url: "https://utsavkumar.tech",
		image: "/assets/ogMain.png",
		type: "website",
		robots: "follow, index",
	};

	return (
		<Head>
			<title>Utsav</title>
			<meta name="robots" content={defaultMeta.robots} />
			<meta content={defaultMeta.description} name="description" />
			<meta property="og:url" content={`${defaultMeta.url}${router.asPath}`} />
			<link rel="canonical" href={`${defaultMeta.url}${router.asPath}`} />

			<meta property="og:type" content={defaultMeta.type} />
			<meta property="og:site_name" content={defaultMeta.siteName} />
			<meta property="og:description" content={defaultMeta.description} />
			<meta property="og:title" content={defaultMeta.title} />
			<meta name="image" property="og:image" content={defaultMeta.image} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@utsavkumar280" />
			<meta name="twitter:title" content={defaultMeta.title} />
			<meta name="twitter:description" content={defaultMeta.description} />
			<meta name="twitter:image" content={defaultMeta.image} />

			<meta name="msapplication-TileColor" content="#0a0014" />
			<meta name="msapplication-TileImage" content="/mstile-144x144.png" />
			<meta name="theme-color" content="#ffffff" />
			<meta name="msapplication-config" content="/browserconfig.xml" />

			{/* {favicons.map((linkProps) => (
				<link key={linkProps.href} {...linkProps} />
			))} */}
		</Head>
	);
};

export default Seo;

type Favicons = {
	rel: string;
	href: string;
	sizes?: string;
	type?: string;
	color?: string;
};

const favicons: Array<Favicons> = [
	{
		rel: "apple-touch-icon",
		sizes: "57x57",
		href: "/favicon/apple-touch-icon-57x57.png",
	},
	{
		rel: "apple-touch-icon",
		sizes: "60x60",
		href: "/favicon/apple-touch-icon-60x60.png",
	},
	{
		rel: "apple-touch-icon",
		sizes: "72x72",
		href: "/favicon/apple-touch-icon-72x72.png",
	},
	{
		rel: "apple-touch-icon",
		sizes: "76x76",
		href: "/favicon/apple-touch-icon-76x76.png",
	},
	{
		rel: "apple-touch-icon",
		sizes: "114x114",
		href: "/favicon/apple-touch-icon-114x114.png",
	},
	{
		rel: "apple-touch-icon",
		sizes: "120x120",
		href: "/favicon/apple-touch-icon-120x120.png",
	},
	{
		rel: "apple-touch-icon",
		sizes: "144x144",
		href: "/favicon/apple-touch-icon-144x144.png",
	},
	{
		rel: "apple-touch-icon",
		sizes: "152x152",
		href: "/favicon/apple-touch-icon-152x152.png",
	},
	{
		rel: "apple-touch-icon",
		sizes: "180x180",
		href: "/favicon/apple-touch-icon-180x180.png",
	},
	{
		rel: "apple-touch-icon",
		href: "/favicon/apple-touch-icon.png",
	},
	{
		rel: "icon",
		type: "image/png",
		sizes: "192x192",
		href: "/favicon/android-chrome-192x192.png",
	},
	{
		rel: "icon",
		type: "image/png",
		sizes: "384x384",
		href: "/favicon/android-chrome-384x384.png",
	},
	{
		rel: "icon",
		type: "image/png",
		sizes: "32x32",
		href: "/favicon/favicon-32x32.png",
	},
	{
		rel: "icon",
		type: "image/png",
		sizes: "16x16",
		href: "/favicon/favicon-16x16.png",
	},
	{
		rel: "icon",
		href: "/favicon/favicon.ico",
	},
	{
		rel: "mask-icon",
		href: "/favicon/safari-pinned-tab.svg",
		color: "#5bbad5",
	},
	{
		rel: "manifest",
		href: "/favicon/site.webmanifest",
	},
];
