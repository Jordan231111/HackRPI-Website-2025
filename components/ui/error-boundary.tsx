"use client";

import React from "react";

interface ErrorBoundaryState {
	hasError: boolean;
	error?: Error;
}

interface ErrorBoundaryProps {
	children: React.ReactNode;
	fallback?: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error("Error caught by boundary:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				this.props.fallback || (
					<div className="min-h-screen bg-hackrpi-dark-blue flex items-center justify-center p-4">
						<div className="max-w-md w-full bg-hackrpi-secondary-dark-blue/50 backdrop-blur-md rounded-2xl border border-hackrpi-light-purple/30 p-8 text-center">
							<div className="mb-6">
								<div className="text-6xl mb-4 font-retro text-hackrpi-orange">
									4<span className="text-hackrpi-light-purple">0</span>4
								</div>
								<h2 className="text-2xl font-modern text-hackrpi-light-purple mb-2">Something went wrong</h2>
								<p className="text-hackrpi-secondary-grey font-neutral">
									We encountered an error in the retro-modern matrix. Our engineers are debugging this glitch!
								</p>
							</div>

							<div className="space-y-4">
								<button
									onClick={() => window.location.reload()}
									className="w-full bg-hackrpi-light-purple hover:bg-hackrpi-dark-purple text-white px-6 py-3 rounded-lg font-neutral transition-all duration-300 hover:shadow-lg hover:shadow-hackrpi-light-purple/25"
								>
									Reload Page
								</button>

								<button
									onClick={() => (window.location.href = "/")}
									className="w-full bg-transparent hover:bg-hackrpi-orange/20 text-hackrpi-orange border border-hackrpi-orange px-6 py-3 rounded-lg font-neutral transition-all duration-300"
								>
									Return Home
								</button>
							</div>

							{process.env.NODE_ENV === "development" && this.state.error && (
								<details className="mt-6 text-left">
									<summary className="text-hackrpi-yellow cursor-pointer hover:text-hackrpi-orange transition-colors">
										Debug Info
									</summary>
									<pre className="mt-2 text-xs text-hackrpi-secondary-grey bg-hackrpi-dark-blue/50 p-3 rounded overflow-auto">
										{this.state.error.stack}
									</pre>
								</details>
							)}
						</div>
					</div>
				)
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
