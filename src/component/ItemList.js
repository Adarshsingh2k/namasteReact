import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  console.log(items);
  // console.log(CDN_URL);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-4 border-blue-200 rounded-b text-left p-4 flex"
        >
          <div className="w-9/12">
            <div className="flex space-x-4">
              <h1 className="text-m font-bold">{item.card.info.name}</h1>
              {item.card.info.itemAttribute.vegClassifier === "NONVEG" ? (
                <label>🟥</label>
              ) : (
                <label>🟩</label>
              )}
            </div>
            <p className="italic mt-2">{item.card.info.description}</p>
            <h3 className="font-semibold mt-2">
              ₹ {item.card.info.price / 100}
            </h3>
          </div>

          <div className="w-3/12 relative">
            <button className="bg-black opacity-75 hover:opacity-100 cursor-pointer text-white rounded-lg p-2 absolute bottom-1 left-[55px]">
              Add +
            </button>
            <img
              className="w-[250px] rounded-lg"
              src={CDN_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
