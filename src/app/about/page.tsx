'use client';

import Image from 'next/image';

export default function AboutPage() {
	return (
		<div className="flex flex-col items-center justify-center p-6 bg-center bg-cover h-full"
			 style={{ backgroundImage: 'url(/about/pika-about.jpg)' }}>
			<div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
				<h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">About This Application</h1>

				<p className="text-lg text-gray-700 text-center mb-6">
					This application is designed for paragliding enthusiasts to organize, manage, and score accuracy competitions effectively.
					It helps streamline event setups, track pilot participation, and calculate scores with precision.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
					<div className="relative w-full h-64">
						<Image
							src="/about/about1.jpg"
							alt="Paragliding Image 1"
							layout="fill"
							objectFit="cover"
							className="rounded-lg shadow-md"
						/>
					</div>
					<div className="relative w-full h-64">
						<Image
							src="/about/about2.jpg"
							alt="Paragliding Image 2"
							layout="fill"
							objectFit="cover"
							className="rounded-lg shadow-md"
						/>
					</div>
					<div className="relative w-full h-64">
						<Image
							src="/about/about3.jpg"
							alt="Paragliding Image 3"
							layout="fill"
							objectFit="cover"
							className="rounded-lg shadow-md"
						/>
					</div>
				</div>

				<p className="text-lg text-gray-700 text-center">
					Whether you are a competition organizer or a participant, this tool simplifies the management process,
					making every paragliding event a smooth and enjoyable experience.
				</p>
			</div>
		</div>
	);
}
