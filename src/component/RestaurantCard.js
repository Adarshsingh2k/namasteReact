import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resInfo } = props;
  const {
    avgRating,
    areaName,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    isOpen,
    name,
  } = resInfo;

  return (
    <div className="res-card w-[280px] p-4 bg-orange-100 m-4 rounded h-[400px]">
      <img
        className="rounded-lg h-[200px] w-[300px] content-center"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="flex justify-between mb-3 mt-2">
        <h3 className="font-bold text-lg">{name}</h3>
        <h5 className="font-thin bg-green-200 p-1 rounded">{avgRating}⭐</h5>
      </div>
      <h4>{costForTwo}</h4>
      <h5 className="pt-2 italic">{cuisines.join(", ")}</h5>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-green-200 rounded-lg absolute ms-5 italic mt-2 p-2">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
