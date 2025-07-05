"use client";

interface LoadingSpinnerProps {
	size?: "sm" | "md" | "lg";
	color?: "primary" | "secondary" | "accent";
	text?: string;
}

export default function LoadingSpinner({ size = "md", color = "primary", text }: LoadingSpinnerProps) {
	const sizeClasses = {
		sm: "w-4 h-4",
		md: "w-8 h-8",
		lg: "w-12 h-12",
	};

	const colorClasses = {
		primary: "text-hackrpi-light-purple",
		secondary: "text-hackrpi-orange",
		accent: "text-hackrpi-yellow",
	};

	return (
		<div className="flex flex-col items-center justify-center space-y-4">
			<div className="relative">
				<div
					className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]`}
				></div>
				{/* Retro-style inner glow */}
				<div
					className={`absolute inset-0 ${sizeClasses[size]} ${colorClasses[color]} animate-pulse rounded-full border-2 border-current opacity-30`}
				></div>
			</div>
			{text && <p className="text-hackrpi-secondary-grey font-neutral text-sm animate-pulse">{text}</p>}
		</div>
	);
}

// Retro-themed loading dots
export function RetroLoadingDots() {
	return (
		<div className="flex items-center space-x-2">
			<div className="w-3 h-3 bg-hackrpi-light-purple rounded-full animate-bounce"></div>
			<div className="w-3 h-3 bg-hackrpi-orange rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
			<div className="w-3 h-3 bg-hackrpi-yellow rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
		</div>
	);
}

// Full page loading component
export function FullPageLoading() {
	return (
		<div className="fixed inset-0 bg-hackrpi-dark-blue/90 backdrop-blur-sm flex items-center justify-center z-50">
			<div className="bg-hackrpi-secondary-dark-blue/50 p-8 rounded-2xl border border-hackrpi-light-purple/30 backdrop-blur-md">
				<LoadingSpinner size="lg" text="Loading HackRPI..." />
			</div>
		</div>
	);
}
