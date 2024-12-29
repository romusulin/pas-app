'use client';

import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
	return (
		<div className="flex flex-col items-center justify-center p-6 bg-center bg-cover h-full"
			 style={{ backgroundImage: 'url(/contact-bg.jpg)' }}
		>
			<div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
				<h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">Contact Us</h1>

				<p className="text-lg text-gray-700 text-center mb-8">
					We would love to hear from you! Reach out to us via email or follow us on social media.
				</p>

				<div className="flex justify-center gap-6 mb-8">
					<a
						href="https://www.facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 hover:text-blue-800 text-4xl"
					>
						<FaFacebook />
					</a>
					<a
						href="https://www.twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-400 hover:text-blue-600 text-4xl"
					>
						<FaTwitter />
					</a>
					<a
						href="https://www.instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-pink-500 hover:text-pink-700 text-4xl"
					>
						<FaInstagram />
					</a>
					<a
						href="mailto:contact@paraglidingapp.com"
						className="text-gray-700 hover:text-gray-900 text-4xl"
					>
						<FaEnvelope />
					</a>
				</div>

				<div className="text-center">
					<p className="text-gray-700">
						<strong>Email:</strong> contact@paraglidingapp.com
					</p>
				</div>
			</div>
		</div>
	);
}
