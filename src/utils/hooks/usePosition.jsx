import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAddress, addCoords } from "../Redux/locationSlice";

const usePosition = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    function getLocation() {
      if (localStorage.getItem("lat") && localStorage.getItem("lng")) {
        return;
      }

      navigator.geolocation.getCurrentPosition(async function success(
        position
      ) {
        const { latitude, longitude } = position.coords;
        localStorage.setItem("lat", String(latitude));
        localStorage.setItem("lng", String(longitude));
        dispatch(addCoords({ latitude, longitude }));

        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }position/?lat=${latitude}&lng=${longitude}`
        );

        const data = await response.json();

        localStorage.setItem("address", data.data[0].formatted_address);
        dispatch(addAddress(data.data[0].formatted_address));
      });
    }
    getLocation();
  }, [dispatch]);
};

export default usePosition;
