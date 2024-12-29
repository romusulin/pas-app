'use client';

import { useState } from 'react';

export default function PilotsTable() {
	const [pilots, setPilots] = useState([
		{ name: '', age: '', club: '', status: 'Waiting', country: '' }
	]);

	const [search, setSearch] = useState('');
	const statuses = ['Waiting', 'Confirmed'];

	const addPilotRow = () => {
		setPilots([...pilots, { name: '', age: '', club: '', status: 'Waiting', country: '' }]);
	};

	const updatePilot = (index, field, value) => {
		const updatedPilots = pilots.map((pilot, i) =>
			i === index ? { ...pilot, [field]: value } : pilot
		);
		setPilots(updatedPilots);
	};

	const deletePilot = (index) => {
		setPilots(pilots.filter((_, i) => i !== index));
	};

	const clonePilot = (index) => {
		const clonedPilot = { ...pilots[index] };
		setPilots([...pilots, clonedPilot]);
	};

	const filteredPilots = pilots.filter((pilot) =>
		Object.values(pilot).some((val) =>
			val.toString().toLowerCase().includes(search.toLowerCase())
		)
	);

	return (
		<div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
			<div className="mb-4">
				<input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					placeholder="Search..."
				/>
			</div>

			<div className="overflow-auto border rounded-lg">
				<table className="min-w-full text-left border-collapse">
					<thead className="bg-blue-700 text-white">
					<tr>
						<th
							className="px-4 py-2 cursor-pointer"
						>
							Name
						</th>
						<th
							className="px-4 py-2 cursor-pointer"
						>
							Age
						</th>
						<th
							className="px-4 py-2 cursor-pointer"
						>
							Club
						</th>
						<th
							className="px-4 py-2 cursor-pointer"
						>
							Status
						</th>
						<th
							className="px-4 py-2 cursor-pointer"
						>
							Country
						</th>
						<th className="px-4 py-2">Actions</th>
					</tr>
					</thead>
					<tbody>
					{filteredPilots.map((pilot, index) => (
						<tr
							key={index}
							className={`group ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
						>
							<td className="px-4 py-2 w-1/4">
								<input
									type="text"
									value={pilot.name}
									onChange={(e) => updatePilot(index, 'name', e.target.value)}
									className="w-full border rounded p-1 focus:outline-none"
								/>
							</td>
							<td className="px-4 py-2">
								<input
									type="number"
									value={pilot.age}
									onChange={(e) => updatePilot(index, 'age', e.target.value)}
									className="w-full border rounded p-1 focus:outline-none"
								/>
							</td>
							<td className="px-4 py-2">
								<input
									type="text"
									value={pilot.club}
									onChange={(e) => updatePilot(index, 'club', e.target.value)}
									className="w-full border rounded p-1 focus:outline-none"
								/>
							</td>
							<td className="px-4 py-2">
								<select
									value={pilot.status}
									onChange={(e) => updatePilot(index, 'status', e.target.value)}
									className="w-full border rounded p-1 focus:outline-none"
								>
									{statuses.map((status) => (
										<option key={status} value={status}>
											{status}
										</option>
									))}
								</select>
							</td>
							<td className="px-4 py-2">
								<input
									type="text"
									value={pilot.country}
									onChange={(e) => updatePilot(index, 'country', e.target.value)}
									className="w-full border rounded p-1 focus:outline-none"
								/>
							</td>
							<td className="px-4 py-2 text-center flex gap-2 justify-center">
								<button
									onClick={() => deletePilot(index)}
									className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"
								>
									⛔
								</button>
								<button
									onClick={() => clonePilot(index)}
									className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"
								>
									📑
								</button>
							</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>

			<button
				onClick={addPilotRow}
				className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg"
			>
				Add Pilot
			</button>
		</div>
	);
}
