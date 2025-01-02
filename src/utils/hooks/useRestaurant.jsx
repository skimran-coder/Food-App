import { useState, useEffect } from "react";

const useRestaurant = (location) => {
  const [restaurants, setRestaurants] = useState(
    null
  );
  const lat = location.lat
  const lng = location.lng


  useEffect(() => {
    async function getRestaurant() {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }restaurants/?lat=${lat}&lng=${lng}`
        );

        const data = await response.json();
        console.log(data.data);
        setRestaurants(data?.data);
      } catch (error) {
        console.log(error);
      }
    }

    getRestaurant();
  }, [lat, lng]);

  return restaurants;
};

export default useRestaurant;
