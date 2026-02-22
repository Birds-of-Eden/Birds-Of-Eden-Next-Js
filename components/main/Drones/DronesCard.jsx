import React from "react";
import { Clock, Radio, Camera } from "lucide-react";

export const DronesCard = ({ drone }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg md:flex-row">
      <div className="relative md:w-1/2">
        <img
          src={drone.image}
          alt={drone.name}
          className="h-[300px] w-full object-cover md:h-[400px]"
        />
      </div>
      <div className="flex flex-col justify-between p-6 md:w-1/2 md:p-8">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            {drone.name}
          </h2>
          <p className="mb-6 leading-relaxed text-gray-600">
            {drone.description}
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">
                Flight Time: {drone.specs.flightTime}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Radio className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">Range: {drone.specs.range}</span>
            </div>
            <div className="flex items-center gap-3">
              <Camera className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">
                Camera: {drone.specs.camera}
              </span>
            </div>
          </div>
        </div>
        <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-colors duration-200 hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </div>
  );
};
