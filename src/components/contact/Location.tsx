import LocationCard from "./LocationCard";

export default function Locations() {
  return (
    <div className="w-full flex items-center justify-center mt-18 mb-10 gap-6 flex-wrap">
      <LocationCard
        title="London"
        address="60 London Wall, London"
        postalCode="EC2M 5TQ"
        imageUrl="/assests/contact/london.jpg"
      />
      <LocationCard
        title="South Africa"
        imageUrl="/assests/contact/south-africa.jpg"
      />
    </div>
  );
}
