import type { Metadata } from "next";
import "./globals.css";
import ErrorBoundary from "@/components/ui/error-boundary";
import ScrollToTop from "@/components/ui/scroll-to-top";

export const metadata: Metadata = {
	title: "HackRPI 2025 - Retro vs. Modern",
	description:
		"Join us for RPI's 12th annual hackathon! 24 hours of innovation, creativity, and collaboration. November 15-16, 2025 at Rensselaer Polytechnic Institute.",
	keywords: ["hackathon", "RPI", "programming", "innovation", "technology", "retro", "modern"],
	authors: [{ name: "HackRPI Team" }],
	openGraph: {
		title: "HackRPI 2025 - Retro vs. Modern",
		description: "Join us for RPI's 12th annual hackathon! 24 hours of innovation, creativity, and collaboration.",
		url: "https://hackrpi.com",
		siteName: "HackRPI",
		images: [
			{
				url: "/HackRPI_Logo_Yellow_Arrow.png",
				width: 1200,
				height: 630,
				alt: "HackRPI 2025 - Retro vs. Modern",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "HackRPI 2025 - Retro vs. Modern",
		description: "Join us for RPI's 12th annual hackathon! 24 hours of innovation, creativity, and collaboration.",
		images: ["/HackRPI_Logo_Yellow_Arrow.png"],
		creator: "@HackRPI",
	},
	viewport: "width=device-width, initial-scale=1",
	robots: "index, follow",
};

import ClientLayout from "@/components/layout/client-layout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" data-theme="hackrpi">
			<body className="bg-hackrpi-dark-blue text-hackrpi-secondary-grey">
				<ErrorBoundary>
					<ClientLayout>{children}</ClientLayout>
					<ScrollToTop />
				</ErrorBoundary>
			</body>
		</html>
	);
}
