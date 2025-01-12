import React from "react";
import home from "../assets/images/home.png"; // Fixed the relative path

function Home() {
  return (
    <div className="relative w-screen h-screen">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        src={home}
        alt="Home"
      />
      
      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-start pl-10 text-left">
        <div>
          <h1 className="text-white text-5xl font-bold bg-black bg-opacity-50 px-6 py-2 rounded-lg mb-4">
            Welcome
          </h1>
          <p className="text-white text-2xl bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            Explore It
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
