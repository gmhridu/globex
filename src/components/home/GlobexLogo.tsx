import Image from "next/image";
import React from "react";

const GlobexLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        decoding="async"
        width="160"
        height="40"
        src="/logos/Globex_Logo_Reversed.png"
        alt="Globex Logo"
      />
    </div>
  );
};

export default GlobexLogo;
