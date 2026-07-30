import LocationCard from "./LocationCard";

export default function Locations() {
  return (
    <div className="w-full flex items-center justify-center mt-12 mb-10 gap-6 flex-wrap">
      <LocationCard
        title="London"
        address="Victory Way Admirals Park, Dartford, Kent"
        postalCode="DA2 6QD"
        imageUrl="/assests/contact/london.jpg"
      />
      <LocationCard
        title="South Africa"
        imageUrl="/assests/contact/south-africa.jpg"
      />
    </div>
  );
}
