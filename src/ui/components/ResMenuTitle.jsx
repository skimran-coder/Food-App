const ResMenuTitle = ({
  restaurant,
  categoryVisibility,
  toggleCategoryVisibility,
}) => {
  return (
    <div
      className={`flex justify-between pb-4 ease-in-out duration-300 cursor-pointer ${
        restaurant?.card?.card?.title &&
        categoryVisibility[restaurant?.card?.card?.title]
          ? "opacity-100"
          : "opacity-80"
      }`}
      onClick={() => toggleCategoryVisibility(restaurant?.card?.card?.title)}
    >
      <span className="font-extrabold text-xl">
        {restaurant?.card?.card?.title} (
        {restaurant?.card?.card?.itemCards?.length})
      </span>

      {restaurant?.card?.card?.title &&
      categoryVisibility[restaurant?.card?.card?.title] ? (
        <i
          className={`fa-solid fa-angle-up text-xl pr-4  transition-all duration-300 opacity-80`}
        ></i>
      ) : (
        <i
          className={`fa-solid fa-angle-down text-xl pr-4  transition-all duration-300 opacity-100`}
        ></i>
      )}
    </div>
  );
};

export default ResMenuTitle;
