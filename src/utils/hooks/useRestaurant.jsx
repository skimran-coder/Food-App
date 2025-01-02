import { useState, useEffect } from "react";

const useRestaurant = () => {
  const [restaurants, setRestaurants] = useState(
    null
  );
  const lat = localStorage.getItem("lat") || "22.51800";
  const lng = localStorage.getItem("lng") || "88.38320";

  console.log(lat, lng);

  useEffect(() => {
    async function getRestaurant() {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }restaurants/?lat=${lat}&lng=${lng}`
        );

        const data = await response.json();
        console.log(data);
        setRestaurants(data?.data);
      } catch (error) {
        console.log(error);
      }
    }

    getRestaurant();
  }, [lat, lng]);

  console.log(restaurants);
  return restaurants;
};

export default useRestaurant;
