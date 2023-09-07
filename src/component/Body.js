import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";

const Body=()=>{

    // const [resList, setResList]= useState(resObj); this is correct but initially we need no data in our list
    const [resList, setResList]= useState([]);


    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const jsonOutput=await data.json();

        console.log(jsonOutput)
        setResList(jsonOutput?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

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