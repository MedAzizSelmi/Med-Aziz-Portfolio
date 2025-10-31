import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Med Aziz | Portofolio",

    description:
		"My name is Med Aziz, I'm a Software Engineer and I'm passionate about it. I'm currently studying at Tek-up University.",

    author: "Med Aziz Selmi",
    siteUrl: "https://www.medaziz.my.id",
    applicationName: "MedAziz",

    keywords: [
		"mohamed",
		"aziz",
		"aziz selmi",
		"selmi",
		"mohamed selmi",
		"mohamed aziz selmi",
		"med aziz porto",
	],

    openGraph: {
		type: "website",
		url: "https://www.medaziz.my.id",
		title: "Med Aziz | Portofolio",
		site_name: "Med Aziz | Portofolio",
		description: "My name is Med Aziz, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Alvalens Portofolio",
			},
		],
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
                {/* <Chat /> */}
				<Analytics />
			</body>
		</html>
	);
}
