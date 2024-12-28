'use client'

import React, { ReactElement, useState } from 'react';
import CompetitionSettingsModal from '@/components/competition-settings-modal';

const initialEventData = {
	event: {
		id: 0,
		name: 'Nubigena Open 2025',
		numberOfRounds: 5,
		numberOfPardonedRounds: 1,
		maximumScore: 500
	},
	pilots: [
		{
			id: 0,
			startNumber: 1,
			name: 'Pilot 1',
			sex: 'M',
			score: [500,3,4,200,400]
		},
		{
			id: 1,
			startNumber: 2,
			name: 'Pilot 2',
			sex: 'M',
			score: [500,3,4,200,400]
		},
		{
			id: 2,
			startNumber: 3,
			name: 'Pilot 3',
			sex: 'M',
			score: [500,3,4,200,400]
		},
		{
			id: 3,
			startNumber: 4,
			name: 'Pilot 4',
			sex: 'F',
			score: [500,3,4,200,400]
		},
		{
			id: 4,
			startNumber: 5,
			name: 'Pilot 5',
			sex: 'F',
			score: [500,3,4,200,400]
		},
		{
			id: 5,
			startNumber: 6,
			name: 'Pilot 6',
			sex: 'F',
			score: [500,3,4,200,400]
		},
		{
			id: 6,
			startNumber: 7,
			name: 'Marinko Eugen Kuzmanović',
			sex: 'F',
			score: [500,3,4,200,400,5,5,5,5]
		},
		{
			id: 7,
			startNumber: 7,
			name: 'Marinko Eugen Kuzmanović',
			sex: 'F',
			score: [500,3,4,200,400,5,5,5,5]
		},
		{
			id: 8,
			startNumber: 7,
			name: 'Marinko Eugen Kuzmanović',
			sex: 'F',
			score: [500,3,4,200,400,5,5,5,5]
		},
		{
			id: 9,
			startNumber: 7,
			name: 'Marinko Eugen Kuzmanović',
			sex: 'F',
			score: [500,3,4,200,400,5,5,5,5]
		},
		{
			id: 10,
			startNumber: 7,
			name: 'Marinko Eugen Kuzmanović',
			sex: 'F',
			score: [500,3,4,200,400,5,5,5,5]
		},
		{
			id: 11,
			startNumber: 7,
			name: 'Marinko Eugen Kuzmanović',
			sex: 'F',
			score: [500,3,4,200,400,5,5,5,5]
		},
		{
			id: 12,
			startNumber: 7,
			name: 'Marinko Eugen Kuzmanović',
			sex: 'F',
			score: [500,3,4,200,400,5,5,5,5]
		},
		{
			id: 13,
			startNumber: 7,
			name: 'Marinko Eugen Kuzmanović',
			sex: 'F',
			score: [500,3,4,200,400,5,5,5,5]
		},
		{
			id: 14,
			startNumber: 7,
			name: 'Marinko Eugen Kuzmanović',
			sex: 'F',
			score: [500,3,4,200,400,5,5,5,5]
		}
	]
};

export default function Page() {
	const [eventData, setEventData] = useState(initialEventData);
	const [isCompetitionSettingsModalOpen, setIsCompetitionSettingsModalOpen] = useState(false);

	const handleOpenCompetitionSettingsModal = () => setIsCompetitionSettingsModalOpen(true);
	const handleCloseCompetitionSettingsModal = () => setIsCompetitionSettingsModalOpen(false);

	const handleScoreChange = (id: number, parentTr) => {
		const inputElements = parentTr.querySelectorAll('input');
		const newScore: number[] = [];
		inputElements.forEach((el) => {
			newScore.push(el.value > eventData.event.maximumScore ? eventData.event.maximumScore : el.value);
		})
		const newEventData = {
			...eventData,
			pilots: eventData.pilots.map((p) => {
				return p.id === id ? {...p, score: newScore} : p;
			})
		};
		setEventData(newEventData);
	};

	const saveScores = () => {
		// Mock function to simulate saving to a database
		console.log("Saving scores to the database...", eventData);
		// In a real-world scenario, you would make an API call here
		// fetch('/api/save-scores', {
		//     method: 'POST',
		//     headers: {
		//         'Content-Type': 'application/json',
		//     },
		//     body: JSON.stringify(pilots),
		// })
		// .then(response => response.json())
		// .then(data => {
		//     console.log('Success:', data);
		// })
		// .catch((error) => {
		//     console.error('Error:', error);
		// });
	};


	const maxNumberOfRounds = eventData.event.numberOfRounds;

	function getScoreInputsForPilot(pilot) {
		const inputs: ReactElement[] = [];
		for (let i = 0; i < maxNumberOfRounds; i++) {
			inputs.push(
				<td className="py-2 px-4 border-t">
					<input
						type="number"
						value={pilot?.score?.[i] || ''}
						onChange={(e) => handleScoreChange(pilot.id, e.target.closest('tr'))}
						className="border rounded px-2 py-1 w-full"
						style={{appearance: "textfield"}}
					/>
				</td>
			);
		}

		return inputs;
	}

	function getScoreHeaders() {
		const headers: ReactElement[] = [];
		for (let i = 0; i < maxNumberOfRounds; i++) {
			headers.push(<th className="py-2 px-4">Round #{i+1}</th>);
		}

		return headers;
	}

	return (
		<>
			<div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-6 h-16">
				<h2 className="text-lg font-semibold text-gray-800">Nubigena Open 2025</h2>
				<div className="flex gap-4">
					<button
						className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition duration-200">
						Pilot List
					</button>
					<button
						onClick={handleOpenCompetitionSettingsModal}
						className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition duration-200">
						Competition Settings
					</button>
					<button
						className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition duration-200">
						Save
					</button>
					<button
						className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition duration-200">
						Finish
					</button>
				</div>
			</div>
			<div className="overflow-auto flex-grow rounded-t-lg">
				<table className="min-w-full bg-white border border-gray-300 shadow-md">
					<thead className="bg-gray-200">
					<tr>
						<th className="py-2 px-4">Start Number</th>
						<th className="py-2 px-4">Pilot</th>
						{...getScoreHeaders()}
					</tr>
					</thead>
					<tbody>
					{eventData.pilots.map(pilot => (
						<tr key={pilot.id} className="hover:bg-gray-100 transition duration-200">
							<td className="py-2 px-4 border-t">{pilot.startNumber}</td>
							<td className="py-2 px-4 border-t">{pilot.name}</td>
							{...getScoreInputsForPilot(pilot)}
						</tr>
					))}
					</tbody>
				</table>
			</div>
			{isCompetitionSettingsModalOpen &&
				<CompetitionSettingsModal handleCloseModal={handleCloseCompetitionSettingsModal}
										  eventData={eventData.event}/>}
		</>
	);
}
