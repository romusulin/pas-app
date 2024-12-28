export default function CompetitionSettingsModal({handleCloseModal, eventData}) {
	return (
		<div onClick={handleCloseModal} className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
			<div className="bg-white p-6 rounded-lg shadow-lg w-96">
				<h3 className="text-lg font-bold mb-4">Competition Settings</h3>
				<form>
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700 mb-1">Event Name</label>
						<input
							type="text"
							className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							defaultValue={eventData.name}
						/>
					</div>
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700 mb-1">Number of Rounds</label>
						<input
							type="number"
							className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							defaultValue={eventData.numberOfRounds}
						/>
					</div>
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700 mb-1">Maximum Score</label>
						<input
							type="number"
							className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							defaultValue={eventData.maximumScore}
						/>
					</div>
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700 mb-1">Number of Pardoned Rounds</label>
						<input
							type="number"
							className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							defaultValue={eventData.numberOfPardonedRounds}
						/>
					</div>
					<div className="flex justify-end gap-4">
						<button
							type="button"
							onClick={handleCloseModal}
							className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-lg shadow">
							Cancel
						</button>
						<button
							type="submit"
							className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow">
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
