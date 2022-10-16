import Retroceder from "../components/Retroceder";
import SearchBar from "../components/SearchBar";
// import Video from "../assets/youtube2.mp4";

export default function VideoTutorials() {
  return (
    <div>
      <Retroceder text={"Videotutoriales"} />
      <div className="mx-5 mt-4">
        <SearchBar />
        <div className="mt-6 text-center font-semibold text-base">
          <h2>¿Como crear un nuevo estudiante?</h2>
          <div className="bg-black w-full h-44 mt-2">
            {/* <iframe
              width="350"
              height="176"
              src="https://www.youtube.com/embed/54VN06WDV_E"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
            {/* <video
              src="https://youtu.be/VevIg9VzZYU"
              type="video/mp4"
              controls
              width={350}
              height={176}
            ></video> */}
          </div>
        </div>
      </div>
    </div>
  );
}
