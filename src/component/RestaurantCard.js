import { CDN_URL } from "../utils/constant"

const RestaurantCard=(props)=>{
   const {resInfo}=props
   const {avgRating,
          areaName,
          cloudinaryImageId,
          costForTwo,
          cuisines,
          isOpen,
          name

         }=resInfo

  return(  
            <div className="res-card">
                <img src={CDN_URL+cloudinaryImageId}/>
               <div className="res-card-header">
                    <h3>{name}</h3>  
                    <h5>{avgRating}⭐</h5>

               </div>
                <h4>{costForTwo}</h4>
                <h5>{cuisines.join(", ")}</h5>
        
            </div>
    )
}

export default RestaurantCard;