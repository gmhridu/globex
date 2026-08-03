import Image from "next/image";
import Link from "next/link";

interface OfferSectionCardsProps {
  imageSrc: string;
  badgeText: string;
  title: string;
  description: string;
  lists: {
    icon: string;
    text: string;
  }[];
  buttonText: string;
  buttonLink: string;
}

const OfferSectionCards: OfferSectionCardsProps[] = [
  {
    imageSrc: "/assests/home/home_banner.png",
    badgeText: "PRIMARY OFFER",
    title: "Distribution Hub",
    description:
      "We build distribution across Europe and the Middle East by identifying the right partners, opening doors, and supporting you to commercial results.",
    lists: [
      {
        icon: "/icons/By_Page/Homepage/distribution-identify-partners.svg",
        text: "Identify and qualify ideal partners",
      },
      {
        icon: "/icons/By_Page/Homepage/distribution-right-introductions.svg",
        text: "Make the right introductions",
      },
      {
        icon: "/icons/By_Page/Homepage/distribution-opportunity-conversion.svg",
        text: "Support opportunity conversion",
      },
      {
        icon: "/icons/By_Page/Homepage/distribution-market-traction.svg",
        text: "Drive sustainable market traction",
      },
    ],
    buttonText: "Explore Distribution Hub",
    buttonLink: "/the-distribution-hub",
  },
  {
    imageSrc: "/assests/home/product.png",
    badgeText: "SECONDARY OFFER",
    title: "Private Label Hub",
    description:
      "We connect manufacturers with qualified private-label buyers across retail and wholesale channels in Europe and the Middle East.",
    lists: [
      {
        icon: "/icons/By_Page/Homepage/private-label-opportunities.svg",
        text: "Identify private-label opportunities",
      },
      {
        icon: "/icons/By_Page/Homepage/private-label-qualified-buyers.svg",
        text: "Match with qualified buyers",
      },
      {
        icon: "/icons/By_Page/Homepage/private-label-commercial-negotiations.svg",
        text: "Support commercial negotiations",
      },
      {
        icon: "/icons/By_Page/Homepage/private-label-long-term-partnerships.svg",
        text: "Drive long-term partnerships",
      },
    ],
    buttonText: "Explore Private Label Hub",
    buttonLink: "/private-label-hub",
  },
];

export function OfferSection() {
  return (
    <section className="container mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {OfferSectionCards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden min-h-80 flex flex-col justify-between"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.imageSrc})` }}
            />
            <div className="absolute inset-0 bg-[#11151D]/35" />

            <div className="relative z-10 p-8 lg:p-10 flex flex-col h-full">
              <span className="text-(--primary) text-xs font-bold tracking-widest uppercase mb-3">
                {card.badgeText}
              </span>

              <h3 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                {card.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
                {card.description}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {card.lists.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Image
                      src={item.icon}
                      alt={item.text}
                      width={20}
                      height={20}
                      className="shrink-0"
                    />
                    <span className="text-gray-200 text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={card.buttonLink}
                className="inline-flex items-center gap-2 bg-(--primary) text-black font-semibold px-6 py-3 rounded-full text-sm w-fit hover:bg-white transition-colors duration-300"
              >
                {card.buttonText}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
