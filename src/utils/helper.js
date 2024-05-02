

export function filterCards(searchInput, restaurants){
    const filteredData = restaurants?.filter((restaurant) => {
       return restaurant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())
    })
    return filteredData;
}