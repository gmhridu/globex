"use client";

import { FC } from "react";
import { Building2 } from "lucide-react";

interface LocationCardProps {
  title: string;
  address?: string;
  postalCode?: string;
  imageUrl?: string;
}

const LocationCard: FC<LocationCardProps> = ({ title, address, postalCode, imageUrl }) => {
  return (
    <div className="w-72 h-96 relative group rounded-lg overflow-hidden shadow-md">
      {/* Background image (hidden until hover) */}
      {imageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}

      {/* Content overlay */}
      <div className="absolute inset-0 bg-[#031226] group-hover:bg-black/50 transition-colors duration-500 flex flex-col items-center justify-center text-center p-6">
        {/* Icon */}
        <Building2
          size={130}
          className={`mb-4 transition-colors duration-300 text-yellow-500 ${
            imageUrl ? "text-white group-hover:text-white" : "text-yellow-500"
          }`}
        />
        <h4
          className={`text-xl font-bold mb-2 transition-colors duration-300 ${
            imageUrl ? "text-white" : "text-white"
          }`}
        >
          {title}
        </h4>

        {/* Address (only visible if provided) */}
        {address && postalCode && (
          <p className="text-white text-md font-medium">
            {address} <br />
            {postalCode}
          </p>
        )}
      </div>
    </div>
  );
};

export default LocationCard;
