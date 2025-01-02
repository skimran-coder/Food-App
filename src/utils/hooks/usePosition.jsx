import { useEffect } from "react";

const usePosition = () => {
  function getLocation() {
    navigator.geolocation.getCurrentPosition(function success(position) {
      const { latitude, longitude } = position.coords;
      localStorage.setItem("lat", String(latitude));
      localStorage.setItem("lng", String(longitude));
    });
  }

  useEffect(() => {
    getLocation();
  }, []);
};

export default usePosition;
