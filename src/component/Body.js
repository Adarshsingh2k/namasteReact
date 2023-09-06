import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body=()=>{

    const [resList, setResList]= useState(resObj);

    // const filterRes=()=>{
    //    return setResList( resObj.filter((data)=>{
    //       if(data.info.avgRating>4){
    //         return <RestaurantCard key={data.info.id} resInfo={data.info} ></RestaurantCard>
    //       }
    //     }))
    // }

    const filterRes = () => {
        const topRated = resObj.filter(data => data.info.avgRating > 4);
        setResList(topRated); // Update state with filtered restaurants
    }
    return(
        <div className="body">
            <div className="search">Search</div>
            <button onClick={()=>{filterRes()}} className="filter-btn">Top 🌟 Restaurants</button>
            <div className="res-container">
                
            {resList.map(data => (
                    <RestaurantCard key={data.info.id} resInfo={data.info} />
                ))}
               
            </div>
        </div>
    )
}


export default Body;