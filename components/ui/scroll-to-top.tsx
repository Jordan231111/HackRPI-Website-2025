"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			{isVisible && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-8 right-8 z-50 bg-hackrpi-light-purple hover:bg-hackrpi-dark-purple 
                     text-white p-3 rounded-full shadow-lg transition-all duration-300 
                     hover:shadow-xl hover:scale-110 group"
					aria-label="Scroll to top"
				>
					<svg
						className="w-6 h-6 transition-transform group-hover:-translate-y-1"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
					</svg>
				</button>
			)}
		</>
	);
}
