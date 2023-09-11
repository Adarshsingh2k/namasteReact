import { useEffect, useState } from "react";
import { RES_MENU_APT } from "../utils/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU_APT + id);
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <h1>Loading...</h1>;

  const { name, costForTwoMessage, avgRatingString } =
    resInfo?.cards[0]?.card?.card?.info;

  //   const { title, itemCards } =
  //     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;

  const card =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
      (card) =>
        card.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const { title, itemCards } = card?.card?.card || {};

  return (
    <div className="menu">
      <h1>
        {name} - {avgRatingString}⭐
      </h1>
      <h3>{costForTwoMessage}</h3>
      <br></br>

      <h2>menu</h2>
      <h3>{title}</h3>
      <br></br>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} -{"Rs. "}
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : "Not Found"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
