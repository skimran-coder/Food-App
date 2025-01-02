import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(false)

    const checkOffline = () => {
        setIsOnline(false);
    }

    const checkOnline = () => {
        setIsOnline(true);
    }

    useEffect(() => {
        window.addEventListener("offline", checkOffline)

        window.addEventListener("online", checkOnline)

        return () => {
            window.removeEventListener("offline", checkOffline);
            window.removeEventListener("online", checkOnline);
        }


    }, [])

    return isOnline
}

export default useOnline