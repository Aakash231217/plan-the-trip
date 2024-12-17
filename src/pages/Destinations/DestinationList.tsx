
import { DestinationCard } from './DestinationCard';
import { useDestinations } from '../../hooks/useDestinations';

export const DestinationList = () => {
  const { destinations, loading, error } = useDestinations();

  if (loading) return <div className="text-center">Loading destinations...</div>;
  if (error) return <div className="text-center text-red-500">Error loading destinations</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinations.map((destination) => (
        <DestinationCard key={destination._id} destination={destination} />
      ))}
    </div>
  );
};
