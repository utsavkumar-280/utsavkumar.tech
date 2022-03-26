import * as React from "react";
import { SiSpotify } from "react-icons/si";
import useSWR from "swr";
import Image from "next/image";

interface SpotifyData {
	isPlaying: boolean;
	title: string;
	album: string;
	artist: string;
	albumImageUrl: string;
	songUrl: string;
}

export default function Spotify() {
	const fetcher = (url: string) => fetch(url).then((r) => r.json());
	const response = useSWR<SpotifyData>("/api/spotify", fetcher);
	const { data } = response;

	console.log({ response });

	return data?.isPlaying ? (
		<a
			target="_blank"
			rel="noreferrer"
			href={
				data?.isPlaying
					? data.songUrl
					: "https://open.spotify.com/user/31eagzgv4pvvv2b73ybwswtykyaq"
			}
			className=" flex items-start min-w-[256px]  space-x-1 rounded-xl border-[0.5px] border-spotifyBorder lg:my-0 my-3 p-2 transition-shadow hover:shadow-md"
		>
			<div className=" w-16 h-16 relative">
				{data?.isPlaying ? (
					<Image
						className="w-16 h-full shadow-sm rounded-lg "
						src={data?.albumImageUrl}
						alt={data?.album}
						layout="fill"
						objectFit="cover"
						objectPosition="center"
					/>
				) : (
					<SiSpotify size={64} color={"#1ED760"} />
				)}
			</div>

			<div className="flex-1 pl-2 flex flex-col items-start">
				{data?.isPlaying && (
					<p className="component text-[0.7rem] text-navLink">Listening to</p>
				)}

				<p className="component font-bold text-headPrimary">
					{data?.isPlaying ? data.title : "Not Listening"}
				</p>
				<p className="font-dark text-xs text-navLink">
					{data?.isPlaying ? `by ${data.artist}` : "Spotify"}
				</p>
			</div>
			<div className="ml-4 self-end">
				<SiSpotify size={22.5} color={"#1ED760"} />
			</div>
		</a>
	) : null;
}
