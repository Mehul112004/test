import { useState } from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("");
  const [type,setType]=useState("")

  const handleChange = (e) => {
    setUrl(e.target.value);
    console.log(url);
  };
  const handleAudio = () => {
    setType("audio");
    // setUrl("");
    // axios.post("/api/audio", { url: url });
  };

  const handleVideo = () => {
    setType("video");
    // setUrl("");
    // axios.post("/api/video", { url: url });
  };

  return (
    <>
      <div className="flex border border-red-500 flex-col p-8 justify-center items-center h-max gap-5 rounded-xl">
        <h1 className="sm:text-5xl text-diffBlack text-3xl font-mono">
          Enter your Youtube video URL :-{" "}
        </h1>
        <form action = {`https://yt-backend-xq0k.onrender.com/api/send/${type}`} method="POST" className="flex flex-col w-full justify-center items-center gap-4 h-full">
          <input
            type="text"
            className={`px-6 py-4 text-2xl text-gray-300 font-semibold w-full h-full max-w-2xl rounded-lg focus:outline-red-800 bg-diffBlack backdrop-blur-md`}
            name="url"
            onChange={handleChange}
            value={url}
            autocomplete="false"
          />
          <div className="flex gap-4">
            <button
              type="submit"
              className="px-5 py-3 text-2xl rounded-md max-w-md text-white bg-orange-700 active:scale-95"
              onClick={handleAudio}
            >
              Download Audio
            </button>
            <button
              type="submit"
              className="px-5 py-3 text-2xl rounded-md max-w-md text-white bg-orange-700 active:scale-95"
              onClick={handleVideo}
            >
              Download Video
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
