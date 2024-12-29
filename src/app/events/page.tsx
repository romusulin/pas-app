'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const mockEvents = [
	{ id: 1, name: 'Nubigena Open 2025', location: 'California, USA', date: '2025-05-20' },
	{ id: 2, name: 'Sky High Invitational', location: 'Colorado, USA', date: '2025-06-15' },
	{ id: 3,name:'Alps Challenge', location: 'Chamonix, France', date: '2025-07-10' },
	{ id: 4, name:'Cloud Kings', location: 'Queenstown, New Zealand', date: '2025-08-05' },
	{ id: 5,name:'Desert Wings', location: 'Dubai, UAE', date: '2025-09-01' },
];

export default function Events() {
	const router= useRouter();
	return (
		<div
			className="flex flex-grow h-full flex-col items-center p-6 bg-cover bg-center relative"
			style={{backgroundImage: 'url(/pexels-pixabay-161173.jpg)'}}
		>
			<div className="absolute inset-0 bg-black bg-opacity-50"></div>

			<div className="relative z-10 w-full max-w-7xl">
				<div className="w-full max-w-7xl flex items-center justify-between mb-6">
					<h1 className="text-4xl font-extrabold text-gray-100">Upcoming Events</h1>
					<button
						className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-200"
						onClick={() => {
							router.push('/events/create')
						}}
					>
						Create Event
					</button>
				</div>

				<div className="bg-white rounded-lg shadow-md overflow-hidden">
					<table className="min-w-full table-auto text-left">
						<thead className="bg-blue-700 text-white">
						<tr>
							<th className="px-6 py-3 text-sm font-semibold uppercase">Event Name</th>
							<th className="px-6 py-3 text-sm font-semibold uppercase">Location</th>
							<th className="px-6 py-3 text-sm font-semibold uppercase">Date</th>
						</tr>
						</thead>
						<tbody>
						{mockEvents.map((event, index) => (
							<tr key={index}
								className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200`}>
								<td className="px-6 py-4 text-blue-600 font-medium">
									<Link href={`/events/${event.id}`}>
										{event.name}
									</Link>
								</td>
								<td className="px-6 py-4 text-gray-600">{event.location}</td>
								<td className="px-6 py-4 text-gray-600">{event.date}</td>
							</tr>
						))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
