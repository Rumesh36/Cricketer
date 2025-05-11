import { useState } from "react";

function Cards({ name, pics, video }) {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className="p-4 border rounded-xl shadow-md m-3 text-center w-full">
            {pics && (
                <div className="img flex flex-col justify-center items-center">
                    <img
                        src={pics}
                        alt={name || "Cricketer"}
                        className="w-50 h- "
                    />
                    {name && <h1 className="text-xl mt-2">{name}</h1>}
                </div>
            )}

            {video && (
                <div className="video mt-5 flex flex-col items-center">
                    <button
                        onClick={() => setShowVideo(!showVideo)}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        {showVideo ? "Hide Video" : "Show Video"}
                    </button>

                    {showVideo && (
                        <>
                            <video
                                width="320"
                                height="240"
                                controls
                                className="mt-3 rounded shadow"
                            >
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <a
                                href={video}
                                download
                                className="mt-2 text-blue-600 underline"
                            >
                                Download Video
                            </a>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default Cards;
