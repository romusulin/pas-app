'use client';

import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
	const router = useRouter();

	return (
		<header
			className="h-22 pr-4 pl-4 bg-gradient-to-r from-blue-700 to-cyan-500 text-white  flex items-center justify-between shadow-md">
			<div className="flex items-center">
				<Image  alt="Logo" src="/icon.png" width={74} height={74} priority/>
				<h1 className="text-xl font-bold px-4">Paragliding Accuracy Scoring Application</h1>
			</div>
			<nav className="flex gap-4">
				<a onClick={() => router.push('/')} className="text-white hover:text-cyan-200 font-medium">Home</a>
				<a onClick={() => router.push('/events')} className="text-white hover:text-cyan-200 font-medium">Events</a>
				<a onClick={() => router.push('/about')} className="text-white hover:text-cyan-200 font-medium">About</a>
				<a onClick={() => router.push('/contact')} className="text-white hover:text-cyan-200 font-medium">Contact</a>
			</nav>
		</header>
	);
}
