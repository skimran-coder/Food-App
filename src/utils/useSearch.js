import { useEffect, useState } from "react"

const useSearch = (searchInput) => {

    const [searchResult, setSearchResult] = useState()

    async function getSearchResult () {
        try{
            const data = await fetch(`https://www.swiggy.com/dapi/restaurants/search/suggest?lat=22.51800&lng=88.38320&str=${searchInput}&trackingId=undefined`)
            const json = await data.json()
            setSearchResult(json)

        } catch (error){
            console.log(error)
        }

    }
    
    
    useEffect(() => {
        getSearchResult()
    }, [searchInput])

    return searchResult
}

export default useSearch;