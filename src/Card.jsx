import { useState } from "react";

function Cards({ name, images = [], video, intro }) {
    const [showAlbum, setShowAlbum] = useState(false);
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-md m-4 max-w-md mx-auto space-y-6">
            {name && <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>}

            {intro && (
                <p className="text-gray-600 text-sm text-center">{intro}</p>
            )}

            {images.length > 0 && (
                <div className="text-center">
                    <button
                        onClick={() => setShowAlbum(!showAlbum)}
                        className="px-5 py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 transition"
                    >
                        {showAlbum ? "Hide Album" : "Go Album"}
                    </button>

                    {showAlbum && (
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {images.map((img, index) => (
                               <img
                               key={index}
                               src={img}
                               alt={`Album ${index + 1}`}
                               className="w-48 h-48 object-cover rounded-lg shadow-md"
                           />
                           
                            ))}
                        </div>
                    )}
                </div>
            )}

            {video && (
                <div className="text-center">
                    <button
                        onClick={() => setShowVideo(!showVideo)}
                        className="px-5 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
                    >
                        {showVideo ? "Hide Video" : "Show Video"}
                    </button>

                    {showVideo && (
                        <div className="mt-4 space-y-2">
                            <video
                                width="100%"
                                height="auto"
                                controls
                                className="rounded-lg shadow-md"
                            >
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <a
                                href={video}
                                download
                                className="inline-block text-blue-600 underline text-sm hover:text-blue-800"
                            >
                                Download Video
                            </a>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Cards;
