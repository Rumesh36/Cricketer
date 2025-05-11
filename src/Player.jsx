import Cards from "./Card"
import Img1 from "./assets/Img/WhatsApp Image 2025-05-11 at 11.17.09 AM.jpeg"
import Nar2 from "./assets/Img/nar2.jpeg" // Fixed typo in extension

import Clip1 from "./assets/video/clip1.mp4"
import Clip2 from "./assets/video/clip2.mp4"
import Clip3 from "./assets/video/clip3.mp4"
import Clip4 from "./assets/video/clip4.mp4"

function Player() {
    return (
        <>
          <h1 className="text-3xl font-bold mt-5 text-center">
                Best Cricketer in the World
            </h1>

            <div className="flex">
            <Cards name="Narasimha" pics={Img1} />
            <Cards  pics={Nar2} />
            </div>

            <Cards name="Video 1" video={Clip1} />
            <Cards name="Video 2" video={Clip2} />
            <Cards name="Video 3" video={Clip3} />
            <Cards name="Video 4" video={Clip4} />
        </>
    );
}

export default Player;
