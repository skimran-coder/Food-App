import { useEffect, useState } from "react";

const useFilterRestaurant = (restaurants, filterState) => {
    const [filteredData, setFilteredData] = useState()

    function filterData (){
        if (filterState === "ratings 4.0+") {
            const data = restaurants?.filter((restaurant) => restaurant?.info?.avgRating > 4)
            setFilteredData(data)

        } else if (filterState === "fast delivery"){
            const data = restaurants?.filter((restaurant) => restaurant?.info?.sla?.deliveryTime <= 30)
            setFilteredData(data)
        } else if (filterState === "offers") {
            const data = restaurants?.filter((restaurant) => restaurant?.info?.aggregatedDiscountInfoV3?.header)
            setFilteredData(data)
        }
        else{
            setFilteredData(restaurants)
        } 
    }

    useEffect(()=>{
        filterData()
    }, [filterState])

    return filteredData
    
}

export default useFilterRestaurant;