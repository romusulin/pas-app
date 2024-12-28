'use client'

import { useEffect, useState } from 'react';

const videos = [
    '/paragliding1.mp4',
    '/paragliding2.mp4',
    '/paragliding3.mp4'
];

export default function Home() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }, 10000); // Change video every 10 seconds

        return () => clearInterval(interval);
    }, []);

  return (
      <div className="flex-grow flex items-center justify-center h-full">
          <div className="relative w-full h-full flex items-center justify-center bg-black">
              <video
                  key={currentVideoIndex}
                  className="absolute top-0 left-0 w-full h-full object-cover blur-sm"
                  autoPlay
                  loop
                  muted
              >
                  <source src={videos[currentVideoIndex]} type="video/mp4"/>
                  Your browser does not support the video tag.
              </video>

              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
                      Welcome to Paragliding Accuracy Scoring
                  </h1>
                  <div className="flex gap-6">
                      <button
                          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-200"
                          onClick={() => console.log('View Events Clicked')}
                      >
                          View Events
                      </button>
                      <button
                          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-200"
                          onClick={() => console.log('Create New Event Clicked')}
                      >
                          Create New Event
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
}
