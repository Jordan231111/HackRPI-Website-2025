import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock the image imports
jest.mock("@/public/HackRPI_Logo_Yellow_Arrow.png", () => "logo-image-stub");
jest.mock("next/image", () => ({
	__esModule: true,
	default: (props: any) => {
		// eslint-disable-next-line jsx-a11y/alt-text
		return <img {...props} />;
	},
}));

// Mock the registration button
jest.mock("@/components/themed-components/registration-link", () => ({
	__esModule: true,
	default: () => <div data-testid="registration-button">Register Now</div>,
}));

// Mock NavGroupComponent
jest.mock("@/components/nav-bar/desktop/nav-group", () => ({
	__esModule: true,
	default: ({ name, links }: { name: string; links: any[] }) => <div data-testid={`nav-group-${name}`}>{name}</div>,
}));

import DesktopNavBar from "@/components/nav-bar/desktop/nav-bar-desktop";
import { NavGroup } from "@/data/nav-bar-links";

describe("DesktopNavBar Component", () => {
	// Mock data for testing
	const mockLinks: NavGroup[] = [
		{
			name: "About",
			links: [
				{ href: "#about", children: "About Us" },
				{ href: "#faq", children: "FAQ" },
			],
		},
		{
			name: "Resources",
			links: [
				{ href: "/resources", children: "Resources Page" },
				{ href: "/last-year", children: "Last Year" },
			],
		},
	];

	it("renders the logo with correct link", () => {
		render(<DesktopNavBar links={mockLinks} />);

		// Check logo presence and home link
		const logoImage = screen.getByAltText("HackRPI Logo");
		expect(logoImage).toBeInTheDocument();

		// Check if the logo links to home
		const homeLink = logoImage.closest("a");
		expect(homeLink).toHaveAttribute("href", "/");
	});

	it("renders navigation groups correctly", () => {
		render(<DesktopNavBar links={mockLinks} />);

		// Check if navigation group names are rendered
		expect(screen.getByText("About")).toBeInTheDocument();
		expect(screen.getByText("Resources")).toBeInTheDocument();
	});

	it("renders direct links correctly", () => {
		render(<DesktopNavBar links={mockLinks} />);

		// Check direct links
		expect(screen.getByText("Sponsor Us")).toBeInTheDocument();
		expect(screen.getByText("Event Info")).toBeInTheDocument();
		expect(screen.getByText("Schedule")).toBeInTheDocument();
		expect(screen.getByText("Announcements")).toBeInTheDocument();
		expect(screen.getByText("Prizes")).toBeInTheDocument();
		expect(screen.getByText("2048 Leaderboard")).toBeInTheDocument();
		expect(screen.getByText("Code of Conduct")).toBeInTheDocument();
	});

	it("includes registration button", () => {
		render(<DesktopNavBar links={mockLinks} />);

		// Check for the registration button
		expect(screen.getByTestId("registration-button")).toBeInTheDocument();
	});

	it("applies correct styling to the navbar", () => {
		render(<DesktopNavBar links={mockLinks} />);

		// Check if the navbar has the correct background color and height
		const navbarContainer = screen.getByRole("navigation").parentElement;
		expect(navbarContainer).toHaveClass("bg-hackrpi-dark-blue");
		expect(navbarContainer).toHaveClass("h-16");
	});

	it('has external links with target="_blank"', () => {
		render(<DesktopNavBar links={mockLinks} />);

		// Check if Code of Conduct link opens in a new tab
		const codeOfConductLink = screen.getByText("Code of Conduct");
		expect(codeOfConductLink).toHaveAttribute("target", "_blank");
	});
});
