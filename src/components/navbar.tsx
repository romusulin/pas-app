import Image from 'next/image';
import React from 'react';

export default function Navbar() {
	return (
		<header
			className="h-22 pr-4 pl-4 bg-gradient-to-r from-blue-700 to-cyan-500 text-white p-2 flex items-center justify-between shadow-md">
			<div className="flex items-center">
				<Image className="dark:invert" alt="Logo" src="/logo.svg" width={54} height={74} priority/>
				<h1 className="text-xl font-bold px-4">Paragliding Accuracy Scoring Application</h1>
			</div>
			<nav className="flex gap-4">
				<a href="#" className="text-white hover:text-cyan-200 font-medium">Home</a>
				<a href="#" className="text-white hover:text-cyan-200 font-medium">Events</a>
				<a href="#" className="text-white hover:text-cyan-200 font-medium">About</a>
				<a href="#" className="text-white hover:text-cyan-200 font-medium">Contact</a>
			</nav>
		</header>
	);
}
