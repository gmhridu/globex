interface InternationalGrowthCardsProps {
  imageSrc: string;
  title: string;
  description: string;
}

const InternationalGrowthCard: InternationalGrowthCardsProps[] = [
  {
    imageSrc: "/icons/By_Page/Homepage/choosing-the-right-markets.svg",
    title: "Choosing the Right Markets",
    description:
      "It's hard to know where your product fits, who needs it, and where to focus first.",
  },
  {
    imageSrc: "/icons/By_Page/Homepage/finding-the-right-distributors.svg",
    title: "Finding the Right Distributors",
    description:
      "Identifying trustworthy, capable partners with the reach and commitment you can't find online.",
  },
  {
    imageSrc: "/icons/By_Page/Homepage/lack-of-local-follow-up.svg",
    title: "Lack of Local Follow-Up",
    description:
      "Leads go cold without local presence, consistent follow-up, and relationship building.",
  },
  {
    imageSrc: "/icons/By_Page/Homepage/execution-over-advice.svg",
    title: "Slow International Tracation",
    description:
      "Without the right strategy and execution, it takes too long (and costs too much) to gain real momentum.",
  },
];

export function InternationalGrowth() {
  return (
    <div className="mt-10 container mx-auto">
      <h2 className="text-3xl font-medium text-center">
        Why International Growth Feels Harder Than It Should Be.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {InternationalGrowthCard.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-50 rounded-lg shadow p-6 flex flex-col items-center text-center"
          >
            <img
              src={card.imageSrc}
              alt={card.title}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
