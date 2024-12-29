'use client'

import { useState } from 'react';
import PilotsTable from '@/components/pilots-table';

export default function CreateEvent() {
	const categories = [
		'Overall',
		'Overall Female',
		'Juniors',
		'Club'
	];

	const [activeTab, setActiveTab] = useState('eventSettings');

	const [eventSettings, setEventSettings] = useState({
		name: '',
		location: '',
		gpsCoordinates: '',
		startTime: '',
		description: '',
		regulations: null,
		categories: [] as string[],
		rounds: '',
		pardonedRounds: '',
		maxScore: ''
	});

	const handleEventSettingsChange = (field, value) => {
		setEventSettings({ ...eventSettings, [field]: value });
	};

	const toggleCategory = (category) => {
		setEventSettings((prevState) => {
			const categories = prevState.categories.includes(category)
				? prevState.categories.filter((c) => c !== category)
				: [...prevState.categories, category];
			return { ...prevState, categories };
		});
	};

	return (
		<div
			className="flex flex-col items-center p-6 bg-gray-100 min-h-screen bg-center bg-cover"
			style={{ backgroundImage: 'url(/event/create.jpg)' }}
		>
			<h1 className="text-4xl font-extrabold text-gray-800 mb-6">Create New Event</h1>

			{/* Tabs */}
			<div className="flex justify-center bg-white shadow-md rounded-t-lg">
				<button
					onClick={() => setActiveTab('eventSettings')}
					className={`px-6 py-3 font-medium text-lg rounded-t-lg transition-all duration-200 ${
						activeTab === 'eventSettings'
							? 'bg-blue-500 text-white shadow-lg'
							: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
					}`}
				>
					Event Settings
				</button>
				<button
					onClick={() => setActiveTab('pilots')}
					className={`px-6 py-3 font-medium text-lg rounded-t-lg transition-all duration-200 ${
						activeTab === 'pilots'
							? 'bg-blue-500 text-white shadow-lg'
							: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
					}`}
				>
					Pilots
				</button>
			</div>

			{activeTab === 'eventSettings' && (
				<div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
					{/* Event Name */}
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700 mb-2">Event Name</label>
						<input
							type="text"
							value={eventSettings.name}
							onChange={(e) => handleEventSettingsChange('name', e.target.value)}
							className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							placeholder="Enter the event name"
						/>
					</div>

					{/* Location */}
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
						<input
							type="text"
							value={eventSettings.location}
							onChange={(e) => handleEventSettingsChange('location', e.target.value)}
							className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							placeholder="Enter the event location"
						/>
					</div>

					{/* GPS Coordinates */}
					<div className="mb-4 grid grid-cols-2 gap-4">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">GPS Coordinates</label>
							<input
								type="text"
								value={eventSettings.gpsCoordinates}
								onChange={(e) => handleEventSettingsChange('gpsCoordinates', e.target.value)}
								className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
								placeholder="41.40338, 2.17403"
							/>
						</div>

					</div>

					{/* Event Start Time */}
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700 mb-2">Event Start Time</label>
						<input
							type="datetime-local"
							value={eventSettings.startTime}
							onChange={(e) => handleEventSettingsChange('startTime', e.target.value)}
							className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						/>
					</div>

					{/* Description */}
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
						<textarea
							value={eventSettings.description}
							onChange={(e) => handleEventSettingsChange('description', e.target.value)}
							className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							placeholder="Provide a brief description of the event"
							rows={4}
						></textarea>
					</div>

					{/* File Attachment */}
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700 mb-2">Local Regulations (PDF)</label>
						<input
							type="file"
							onChange={(e) => handleEventSettingsChange('regulations', e.target?.files?.[0])}
							accept=".pdf"
							className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						/>
					</div>

					{/* Award Categories */}
					<div className="mb-6">
						<label className="block text-sm font-medium text-gray-700 mb-2">Award Categories</label>
						<div className="flex flex-wrap gap-2">
							{categories.map((category, index) => (
								<div key={index} className="flex items-center gap-2">
									<input
										type="checkbox"
										checked={eventSettings.categories.includes(category)}
										onChange={() => toggleCategory(category)}
										className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
									/>
									<label className="text-sm text-gray-700">{category}</label>
								</div>
							))}
						</div>
					</div>

					{/* Additional Fields */}
					<div className="mb-4 grid grid-cols-3 gap-4">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">Number of Rounds</label>
							<input
								type="number"
								value={eventSettings.rounds}
								onChange={(e) => handleEventSettingsChange('rounds', e.target.value)}
								className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
								placeholder="Enter number of rounds"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">Pardoned Rounds</label>
							<input
								type="number"
								value={eventSettings.pardonedRounds}
								onChange={(e) => handleEventSettingsChange('pardonedRounds', e.target.value)}
								className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
								placeholder="Enter number of pardoned rounds"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">Maximum Score</label>
							<input
								type="number"
								value={eventSettings.maxScore}
								onChange={(e) => handleEventSettingsChange('maxScore', e.target.value)}
								className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
								placeholder="Enter maximum score"
							/>
						</div>
					</div>
				</div>
			)}

			{activeTab === 'pilots' && <PilotsTable />}
		</div>
	);
}
