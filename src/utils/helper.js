export function filterHandler(e, setFilterState){
    if (e.target.value.toLowerCase() === "ratings 4.0+") {
        setFilterState("ratings 4.0+")
    } else if (e.target.value.toLowerCase() === "fast delivery"){
        setFilterState("fast delivery")
    } else if (e.target.value.toLowerCase() === "offers"){
        setFilterState("offers")
    }
    else{
        setFilterState("all")
    }
}
