import Image from "next/image";
import React from "react";

const Partner = () => {
  return (
    <section className="relative bg-white py-16 px-8">
      <div className="relative container mx-auto max-w-6xl mb-12">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Partnering for a Brighter Future: Supporting Shooting Star
            Children&apos;s Hospices
          </h1>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {/* First Paragraph */}
          <p className="text-lg md:text-xl text-center">
            <span className="font-semibold text-gray-900">We Are Globex</span>{" "}
            is honored to partner with{" "}
            <span className="font-semibold text-gray-900">
              Shooting Star Children&apos;s Hospices
            </span>
            , a charity dedicated to providing exceptional care to babies,
            children, and young people with life-limiting conditions, and their
            families, across south-west London, north-west London, and Surrey.
          </p>

          {/* Second Paragraph */}
          <p className="text-lg text-center leading-relaxed">
            <span className="font-semibold text-gray-900">
              Shooting Star Children&apos;s Hospices
            </span>{" "}
            is committed to making every moment count, offering support through
            all stages of life – whether those moments are measured in days,
            weeks, months, or years. From diagnosis to end of life, and
            throughout bereavement, they provide a wide range of nursing,
            practical, emotional, and medical care, all at no cost to the
            families they serve. Their services are available{" "}
            <span className="font-semibold text-blue-600">
              24 hours a day, 365 days a year
            </span>
            , ensuring that families have the support they need, whenever they
            need it.
          </p>

          {/* Third Paragraph */}
          <p className="text-lg text-center leading-relaxed">
            Supporting approximately{" "}
            <span className="font-semibold text-blue-600">
              500 babies, children, and young adults
            </span>{" "}
            with life-limiting conditions, as well as{" "}
            <span className="font-semibold text-blue-600">
              200 bereaved families
            </span>
            , Shooting Star Children&apos;s Hospices relies on the generosity of
            supporters to continue offering these vital services, which cost{" "}
            <span className="font-semibold text-blue-600">
              £10 million annually
            </span>{" "}
            to run.
          </p>

          {/* Fourth Paragraph */}
          <p className="text-lg text-center leading-relaxed">
            At{" "}
            <span className="font-semibold text-gray-900">We Are Globex</span>,
            we are deeply moved by the life-changing work of{" "}
            <span className="font-semibold text-gray-900">
              Shooting Star Children&apos;s Hospices
            </span>{" "}
            and are proud to contribute to their mission. By joining forces with
            this incredible charity, we hope to help ensure they can continue to
            provide vital care and support to families in need, making every
            moment truly count.
          </p>

          {/* Call to Action */}
          <div className="text-center pt-8">
            <p className="text-lg mb-4">
              Get involved today at{" "}
              <a
                href="https://www.shootingstar.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 underline font-medium transition-colors duration-200"
              >
                www.shootingstar.org.uk
              </a>{" "}
              and make a difference in a child&apos;s life!
            </p>
          </div>

          {/* Charity Registration */}
          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 font-medium">
              Shooting Star Children&apos;s Hospices are a Registered Charity
              No: 1042495*
            </p>
          </div>
        </div>

        {/* Optional: Add a subtle background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent pointer-events-none -z-10 rounded-3xl"></div>
      </div>

      <div className="flex items-center justify-center">
        <Image
          src={"/assests/charity/shooting-star.jpeg"}
          alt="shooting-star"
          width={600}
          height={400}
          className="max-w-[600px] h-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default Partner;
