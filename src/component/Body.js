import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [fltrdList, setFltrdList] = useState([]);
  const [srchText, setSrchText] = useState("");

  const [isFiltered, setIsFiltered] = useState(false);

  const PromotedCard = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonOutput = await data.json();

    console.log(jsonOutput);
    setResList(
      jsonOutput?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFltrdList(
      jsonOutput?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>You are offline</h1>;

  if (fltrdList === null) return <h1>Loading....</h1>;

  const filterRes = () => {
    const topRated = resList.filter((data) => data.info.avgRating > 4.5);
    setFltrdList(topRated); // Update state with filtered restaurants
  };

  const toggleFilter = () => {
    if (isFiltered) {
      // fetchData();  => this call was hitting api every time
      setFltrdList(resList);
    } else {
      filterRes();
    }
    setIsFiltered(!isFiltered);
  };

  const searchFilter = () => {
    const srchedRes = resList.filter((data) => {
      return data.info.name.toLowerCase().includes(srchText.toLowerCase());
    });
    console.log("Filtered Results:", srchedRes);

    srchedRes.length > 0
      ? setFltrdList(srchedRes)
      : alert("no Restaurant found");
  };

  return (
    <div className="body">
      <div className="filter-bar flex m-10 justify-around">
        <div className="search ">
          <input
            className="border border-solid border-black"
            type="text"
            value={srchText}
            onChange={(e) => {
              setSrchText(e.target.value);
            }}
          />
          <button
            className="m-2 px-4 py-1 bg-green-200"
            onClick={() => {
              searchFilter();
            }}
          >
            Search
          </button>

          <button
            onClick={() => {
              toggleFilter();
            }}
            className="filter-btn bg-red-200 p-1 mx-1 rounded"
          >
            {isFiltered ? "Remove Filter ❌" : "Top 🌟 Restaurants"}
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap justify-center">
        {fltrdList.map((data) => (
          <Link key={data.info.id} to={"restaurant/" + data.info.id}>
            {data.info.isOpen ? (
              <PromotedCard resInfo={data.info} />
            ) : (
              <RestaurantCard resInfo={data.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
