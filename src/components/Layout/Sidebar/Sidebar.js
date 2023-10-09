import logo from "../../../assets/icons/icon.jpg";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

function Sidebar() {
  
  return (
    <div className="h-screen bg-sky-300 w-[25%] flex flex-col justify-between">
      <div className="flex flex-col items-center justify-center p-4 pt-6">
        <img
          src={logo}
          alt="logo"
          className="w-[120px] h-[120px] mix-blend-color-burn"
        />
        <h1 className="text-white font-bold text-lg">Dog Breeds</h1>
        <p className="text-white italic text-sm">
          Exploring the World of Dog Breeds
        </p>

        {/* Social Media Icons */}
        <div className="mt-4 flex space-x-4">
          <a href="#" className="text-white text-xl hover:text-blue-800">
            <FaFacebook />
          </a>
          <a href="#" className="text-white text-xl hover:text-blue-800">
            <FaYoutube />
          </a>
          <a href="#" className="text-white text-xl hover:text-blue-800">
            <FaInstagram />
          </a>
        </div>
        <div className="pt-8">
          <p className="text-white italic">
            This is the collection of all images served by Dog API sorted by
            breed. All images you submit will be made available via the Dog API
            endpoints.
          </p>
        </div>
      </div>
      <div className="mt-auto p-4 text-white text-sm text-center">
        <p>
          Powered by the{" "}
          <a href="#" className="underline font-medium">
            Dog API
          </a>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
