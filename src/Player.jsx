import Cards from "./Card";

import Img1 from "./assets/Img/WhatsApp Image 2025-05-11 at 11.17.09 AM.jpeg";
import Nar2 from "./assets/Img/nar2.jpeg";
import Img2 from "./assets/Img/img2.jpeg";
import Img3 from "./assets/Img/img3.jpeg";
import Img4 from "./assets/Img/img4.jpeg";
import Img5 from "./assets/Img/img5.jpeg";

import Clip1 from "./assets/video/clip1.mp4";
import Clip2 from "./assets/video/clip2.mp4";
import Clip3 from "./assets/video/clip3.mp4";
import Clip4 from "./assets/video/clip4.mp4";
import Clip5 from "./assets/video/clip5.mp4";
import Clip6 from "./assets/video/clip6.mp4";
import Clip7 from "./assets/video/clip7.mp4";

function Player() {
    return (
        <>
            <h1 className="text-3xl font-bold mt-5 mb-8 text-center dark: text-gray-800 ">
                Best Cricketers in the World
            </h1>

            <div className="flex flex-wrap justify-center gap-6 px-4">
                <Cards
                    name="Narasimha"
                    intro="Upcoming star with a passion for batting and leadership."
                    images={[Img1]}
                />
                <Cards
                    name="Team Moments"
                    images={[Nar2, Img2, Img3]}
                    intro="Team camaraderie and iconic cricket moments captured in time."
                />
                <Cards
                    name="Legendary Players"
                    intro="A collection of the most iconic players of all time."
                    images={[Img4, Img5]}
                />
                <Cards
                    name="  Movements Album"
                    intro="This is an album of legendary cricketers and a tribute video."
                    images={[Img1, Img2, Img3]}
                    video={Clip2}
                />
                <Cards name="Video 1" video={Clip1} />
                <Cards name="Video 3" video={Clip3} />
                <Cards name="Video 4" video={Clip4} />
                <Cards name="Video 5" video={Clip5} />
                <Cards name="Video 6" video={Clip6} />
                <Cards name="Video 7" video={Clip7} />
            </div>
        </>
    );
}

export default Player;
