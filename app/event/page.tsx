"use client";

import React from "react";
import "@/app/globals.css";
import NavBar from "@/components/nav-bar/nav-bar";
import MapsDCCLow from "@/components/maps/maps";
// import GoogleMapsWidget from "@/components/maps/google_maps"; // Commenting out for now, may be used in the future
import HackRPILink from "@/components/themed-components/hackrpi-link";
import Image from "next/image";

function EventPage() {
	return (
		<>
			<NavBar showOnScroll={false} />

			<div className="justify-center flex w-full flex-col  bg-hackrpi-dark-blue pt-24 desktop:pt-16">
				<div className="px-4 flex flex-wrap items-start justify-center mb-8">
					<div className="w-full desktop:w-1/2 p-4 min-w-[350px] sm:min-w-[450px]">
						<h1 className="font-semibold text-5xl text-hackrpi-orange mb-4 font-neutral">Location:</h1>
						<div className="text-2xl mb-10">
							<h3 className="text-hackrpi-orange text-3xl font-bold">📍 Darrin Communications Center 📍</h3>
							<h3 className="text-hackrpi-yellow font-bold"> Rensselaer Polytechnic Institute</h3>
							<p className="text-hackrpi-yellow">
								Address:{" "}
								<a
									href="https://maps.google.com/?q=Darrin+Communications+Center+51+College+Ave+Troy+NY+12180"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-500 hover:underline"
								>
									Darrin Communications Center, Troy, NY 12180
								</a>
							</p>
						</div>

						<div className="w-full h-96">
							<iframe
								width="100%"
								height="100%"
								frameBorder="0"
								style={{ border: 0 }}
								src="https://maps.google.com/?q=Darrin+Communications+Center+51+College+Ave+Troy+NY+12180&output=embed"
								allowFullScreen
							></iframe>
						</div>

						<div className="text-2xl mt-10">
							<h3 className="font-bold text-4xl text-hackrpi-orange font-neutral">Free Parking</h3>
							<p className="text-hackrpi-yellow">
								Parking is available at North Hall Parking Lot, 2-minute walk to Darrin Communications Center
							</p>
							<p className="text-hackrpi-yellow">
								Parking Address:{" "}
								<a
									href="https://maps.google.com/?q=North+Lot+Troy+NY+12180"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-500 hover:underline"
								>
									North Lot, Troy, NY 12180
								</a>
							</p>
						</div>
						<div className="mt-4 text-2xl text-hackrpi-yellow">
							<p>
								Be sure to check-in with our organizers at the organizing team table in the front of the DCC.
								Participants will be given a wrist band at check-in which will grant access to food, and activities.
								Check-in is open throughout the event!
							</p>
						</div>
					</div>

					{/* Right Side - Map */}
					<div className="w-full desktop:w-1/2 p-4 min-w-[350px] sm:min-w-[450px] desktop:mt-8">
						<MapsDCCLow />
					</div>
				</div>
				<div className="flex flex-row items-center justify-center bg-gradient-to-r from-hackrpi-pink via-hackrpi-light-purple to-hackrpi-pink w-full py-8">
					<h1 className="text-4xl text-white font-modern ml-4">Need Help?</h1>
					<div className="w-full flex items-start justify-start flex-col md:flex-row">
						<div className="container p-4">
							<h2 className=" font-retro text-2xl mb-4 text-white">MENTORING INFORMATION</h2>
							<p className=" text-xl text-white">
								Mentors will be available throughout HackRPI to provide invaluable guidance and assistance to
								participants. Whether you need help with coding, debugging, refining your project idea, or navigating
								the challenges of a hackathon, our experienced mentors are here to support you every step of the way.
								With their expertise, you&apos;ll be able to overcome obstacles, learn new skills, and maximize your
								hackathon experience. Don&apos;t hesitate to seek out their advice and make the most of the mentorship
								opportunities available at HackRPI.
							</p>
						</div>

						<div className="container flex flex-col items-start p-4">
							<h2 className="font-retro text-2xl mb-4 text-white">EVENT DISCORD</h2>
							<p className="text-xl mb-8 text-white">
								Join the HackRPI 2025 Discord server to stay connected and make the most of your hackathon experience!
								Have questions for the staff? Want to chat with other participants? Looking for a team? Join the
								conversation on Discord and get the support you need to succeed at HackRPI.
							</p>
							{/* //TODO: Change the discord link to 2025 HackRPI Discord */}
							<HackRPILink
								href="https://discord.gg/7b2zc8fe26"
								className="hover:bg-gradient-to-br hover:from-[#5865F2] hover:to-[#7289da] hover:bg-transparent hover:border-[#5865F2] w-20 h-20 flex items-center justify-center"
								target="_blank"
							>
								<Image src="/social/discord.svg" alt="Discord Logo" width={50} height={50} />
							</HackRPILink>
						</div>
					</div>
				</div>

				{/* Project Submission and Judging Section - Redesigned */}
				<div className="w-full py-16 px-4" id="project-submission">
					{/* Main Header */}
					<div className="text-center mb-16">
						<h1 className="text-5xl desktop:text-6xl font-modern text-hackrpi-orange mb-6">
							Project Submission & Judging
						</h1>
						<div className="w-24 h-1 bg-gradient-to-r from-hackrpi-pink via-hackrpi-light-purple to-hackrpi-pink mx-auto rounded-full"></div>
					</div>

					{/* Main Content Grid */}
					<div className="max-w-7xl mx-auto grid desktop:grid-cols-2 gap-8 desktop:gap-12">
						
						{/* Judging Criteria Section */}
						<div className="space-y-8">
							{/* Section Header */}
							<div className="text-center desktop:text-left">
								<div className="inline-flex items-center justify-center desktop:justify-start mb-4">
									<div className="w-12 h-12 bg-gradient-to-br from-hackrpi-pink to-hackrpi-light-purple rounded-full flex items-center justify-center mr-4">
										<svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									</div>
									<h2 className="text-3xl desktop:text-4xl font-retro text-hackrpi-orange">JUDGING CRITERIA</h2>
								</div>
								<p className="text-lg text-hackrpi-yellow leading-relaxed">
									After coding ends, at noon on Sunday, you will have the opportunity to present your project to a panel
									of judges. These judges are industry professionals, professors, alumni, and fellow students who will
									evaluate your project based on the following criteria:
								</p>
							</div>

							{/* Criteria Cards */}
							<div className="space-y-6">
								{/* Practicality & Utility */}
								<div className="bg-gradient-to-br from-hackrpi-dark-blue to-hackrpi-dark-purple rounded-2xl p-6 border-2 border-hackrpi-pink hover:border-hackrpi-light-purple transition-all duration-300 hover:shadow-2xl hover:shadow-hackrpi-pink/20">
									<div className="flex items-start space-x-4">
										<div className="w-10 h-10 bg-hackrpi-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<span className="text-white font-bold text-lg">1</span>
										</div>
										<div>
											<h3 className="text-xl font-bold text-hackrpi-pink mb-2 font-pix">Practicality & Utility</h3>
											<p className="text-hackrpi-yellow leading-relaxed">
												What problem do you want to solve? How applicable is your hack to problems we're facing today? Any future plans?
											</p>
										</div>
									</div>
								</div>

								{/* Creativity */}
								<div className="bg-gradient-to-br from-hackrpi-dark-blue to-hackrpi-dark-purple rounded-2xl p-6 border-2 border-hackrpi-light-purple hover:border-hackrpi-pink transition-all duration-300 hover:shadow-2xl hover:shadow-hackrpi-light-purple/20">
									<div className="flex items-start space-x-4">
										<div className="w-10 h-10 bg-hackrpi-light-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<span className="text-white font-bold text-lg">2</span>
										</div>
										<div>
											<h3 className="text-xl font-bold text-hackrpi-light-purple mb-2 font-pix">Creativity</h3>
											<p className="text-hackrpi-yellow leading-relaxed">
												How original is your hack? Is this a novel idea or something that many people have come across?
											</p>
										</div>
									</div>
								</div>

								{/* Technical Difficulty */}
								<div className="bg-gradient-to-br from-hackrpi-dark-blue to-hackrpi-dark-purple rounded-2xl p-6 border-2 border-hackrpi-pink hover:border-hackrpi-light-purple transition-all duration-300 hover:shadow-2xl hover:shadow-hackrpi-pink/20">
									<div className="flex items-start space-x-4">
										<div className="w-10 h-10 bg-hackrpi-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<span className="text-white font-bold text-lg">3</span>
										</div>
										<div>
											<h3 className="text-xl font-bold text-hackrpi-pink mb-2 font-pix">Technical Difficulty</h3>
											<p className="text-hackrpi-yellow leading-relaxed">
												How technically challenging is it? Which technologies did you use?
											</p>
										</div>
									</div>
								</div>

								{/* Effort */}
								<div className="bg-gradient-to-br from-hackrpi-dark-blue to-hackrpi-dark-purple rounded-2xl p-6 border-2 border-hackrpi-light-purple hover:border-hackrpi-pink transition-all duration-300 hover:shadow-2xl hover:shadow-hackrpi-light-purple/20">
									<div className="flex items-start space-x-4">
										<div className="w-10 h-10 bg-hackrpi-light-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<span className="text-white font-bold text-lg">4</span>
										</div>
										<div>
											<h3 className="text-xl font-bold text-hackrpi-light-purple mb-2 font-pix">Effort</h3>
											<p className="text-hackrpi-yellow leading-relaxed">
												Did the team genuinely commit time and effort to this product?
											</p>
										</div>
									</div>
								</div>

								{/* User Experience */}
								<div className="bg-gradient-to-br from-hackrpi-dark-blue to-hackrpi-dark-purple rounded-2xl p-6 border-2 border-hackrpi-pink hover:border-hackrpi-light-purple transition-all duration-300 hover:shadow-2xl hover:shadow-hackrpi-pink/20">
									<div className="flex items-start space-x-4">
										<div className="w-10 h-10 bg-hackrpi-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<span className="text-white font-bold text-lg">5</span>
										</div>
										<div>
											<h3 className="text-xl font-bold text-hackrpi-pink mb-2 font-pix">User Experience</h3>
											<p className="text-hackrpi-yellow leading-relaxed">
												What impression do you get from the hack? Does it provide for a smooth user experience?
											</p>
										</div>
									</div>
								</div>

								{/* Collaboration & Learning */}
								<div className="bg-gradient-to-br from-hackrpi-dark-blue to-hackrpi-dark-purple rounded-2xl p-6 border-2 border-hackrpi-light-purple hover:border-hackrpi-pink transition-all duration-300 hover:shadow-2xl hover:shadow-hackrpi-light-purple/20">
									<div className="flex items-start space-x-4">
										<div className="w-10 h-10 bg-hackrpi-light-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<span className="text-white font-bold text-lg">6</span>
										</div>
										<div>
											<h3 className="text-xl font-bold text-hackrpi-light-purple mb-2 font-pix">Collaboration & Learning</h3>
											<p className="text-hackrpi-yellow leading-relaxed">
												Did the team work well together and split up work? Did they learn from the experience?
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Project Submission Section */}
						<div className="space-y-8">
							{/* Section Header */}
							<div className="text-center desktop:text-left">
								<div className="inline-flex items-center justify-center desktop:justify-start mb-4">
									<div className="w-12 h-12 bg-gradient-to-br from-hackrpi-orange to-hackrpi-yellow rounded-full flex items-center justify-center mr-4">
										<svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
										</svg>
									</div>
									<h2 className="text-3xl desktop:text-4xl font-retro text-hackrpi-orange">PROJECT SUBMISSION</h2>
								</div>
							</div>

							{/* Submission Info Card */}
							<div className="bg-gradient-to-br from-hackrpi-dark-blue to-hackrpi-dark-purple rounded-2xl p-8 border-2 border-hackrpi-orange hover:border-hackrpi-yellow transition-all duration-300 hover:shadow-2xl hover:shadow-hackrpi-orange/20">
								<div className="space-y-6">
									{/* Devpost Account Creation */}
									<div className="flex items-start space-x-4">
										<div className="w-8 h-8 bg-hackrpi-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
											</svg>
										</div>
										<div>
											<h3 className="text-lg font-bold text-hackrpi-orange mb-2 font-pix">Create Your Devpost Account</h3>
											<p className="text-hackrpi-yellow leading-relaxed">
												HackRPI uses Devpost to manage project submissions. You will need to{" "}
												<a
													href="https://secure.devpost.com/users/register?ref_content=signup_global_nav&ref_feature=signup&ref_medium=button"
													target="_blank"
													rel="noopener noreferrer"
													className="text-hackrpi-pink hover:text-hackrpi-light-purple underline font-semibold transition-colors duration-200"
												>
													create a Devpost account
												</a>{" "}
												and submit your project to the HackRPI 2025 hackathon page. Make sure to include a title, description,
												demo video, and any other relevant information about your project.
											</p>
										</div>
									</div>

									{/* Submission Timeline */}
									<div className="flex items-start space-x-4">
										<div className="w-8 h-8 bg-hackrpi-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
											</svg>
										</div>
										<div>
											<h3 className="text-lg font-bold text-hackrpi-yellow mb-2 font-pix">Submission Timeline</h3>
											<div className="space-y-2 text-hackrpi-yellow">
												<p className="leading-relaxed">
													<strong className="text-hackrpi-orange">Deadline:</strong> Submit before 11:00 AM on Sunday
												</p>
												<p className="leading-relaxed">
													<strong className="text-hackrpi-orange">Editing:</strong> You can edit until 12:00 PM on Sunday
												</p>
												<p className="leading-relaxed">
													<strong className="text-hackrpi-orange">Final:</strong> No changes after noon - judging begins immediately
												</p>
											</div>
										</div>
									</div>

									{/* Live Demo Requirement */}
									<div className="flex items-start space-x-4">
										<div className="w-8 h-8 bg-hackrpi-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
												<path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
											</svg>
										</div>
										<div>
											<h3 className="text-lg font-bold text-hackrpi-pink mb-2 font-pix">Live Demo Required</h3>
											<p className="text-hackrpi-yellow leading-relaxed">
												You must be present at the event to give a live demo and explain your project to the judges.
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Devpost Button */}
							<div className="text-center">
								<HackRPILink
									href="https://hackrpi2024.devpost.com/"
									className="inline-flex items-center justify-center px-8 py-4 text-2xl desktop:text-3xl font-pix font-bold bg-gradient-to-r from-hackrpi-orange to-hackrpi-yellow text-white hover:from-hackrpi-yellow hover:to-hackrpi-orange transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-hackrpi-orange/30 border-0"
									target="_blank"
								>
									<svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
									</svg>
									SUBMIT ON DEVPOST
								</HackRPILink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default EventPage;
