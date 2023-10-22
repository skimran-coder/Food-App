import { restaurantList } from "./Config";
import CardComponent from "./Card";

const Body = () =>{
    return(
        

        <div className="cards">

            {
                restaurantList.map((restaurant) => {
                    return(
                        <CardComponent {...restaurant.data} key={restaurant.data?.id}/>
                    )
                })
            }
            

        </div>
    )
}

export default Body;