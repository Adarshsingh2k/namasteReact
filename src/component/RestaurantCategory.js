import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { categoryData, accordionState, setIndex } = props;
  const { title, itemCards } = categoryData;

  // const [accordionState, setAccordionState] = useState(false);

  const handleClick = () => {
    setIndex();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-7    bg-slate-100  p-4 rounded-lg shadow cursor-pointer">
        <div
          className="flex justify-between font-bold text-lg"
          onClick={handleClick}
        >
          {" "}
          <span>
            {title}({itemCards.length})
          </span>
          <span>👇</span>
        </div>
        {accordionState && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
