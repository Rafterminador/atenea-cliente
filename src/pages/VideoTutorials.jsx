import { Link } from "react-router-dom";
import ArrowLeft from "../assets/images/arrow_left.svg";
import Search from "../assets/images/search.svg";
// import Video from "../assets/youtube2.mp4";

export default function VideoTutorials() {
  return (
    <div>
      <div className="w-full h-16 grid grid-cols-3 place-items-center border-b-2">
        <div className="col-start-1 justify-self-start text-[#7064FF]">
          <Link to="/home">
            <div className="flex justify-center items-center">
              <div className="w-8 h-8 flex justify-center items-center">
                <img src={ArrowLeft} alt="Arrow Left" />
              </div>
              Atras
            </div>
          </Link>
        </div>
        <div className="col-start-2 justify-self-center">
          <h1 className="font-semibold text-2xl">Videotutoriales</h1>
        </div>
      </div>
      <div className="mx-5 mt-4">
        <div className="relative h-12">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Buscar un videotutorial"
            className="h-10 w-full font-normal border-solid border-2 border-[#DBD8FF] rounded-[15px] py-2.5 px-12 focus:outline-2 focus:outline-[#A954FF]"
          />
          <div className="h-10 w-10 absolute left-0 top-0 bg-[#DBD8FF] flex justify-center items-center rounded-l-[15px] focus:bg-transparent">
            <img src={Search} alt="Eye" />
          </div>
        </div>
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
