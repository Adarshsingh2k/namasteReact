import { useEffect, useState } from "react";
import { RES_MENU_APT } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { id } = useParams();

  const resInfo = useRestaurantMenu(id);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <h1>Loading...</h1>;

  const { name, costForTwoMessage, avgRatingString } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  // const recomended =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
  //     (card) =>
  //       card.card.card["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   );

  // const { title, itemCards } = recomended?.card?.card || {};

  return (
    <div className="menu text-center">
      <h1 className="font-extrabold text-4xl mt-10">
        {name} - {avgRatingString}⭐
      </h1>
      <h3 className="italic text-lg mt-5">{costForTwoMessage}</h3>
      <br></br>

      <h2 className="font-bold text-2xl ">Menu</h2>
      {/* <h3 className="font-extrabold">{title}</h3> */}
      {/* <br></br> */}

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          categoryData={category?.card?.card}
          accordionState={index === showIndex ? true : false}
          setIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
