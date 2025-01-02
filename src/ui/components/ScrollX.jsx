import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";

const ScrollX = () => {
  return (
    <div className="flex gap-4 pr-8 pt-8">
      <span className="bg-myGrayDark rounded-full p-2 cursor-pointer">
        <LeftArrow />
      </span>
      <span className="bg-myGrayDark rounded-full p-2 ">
        <RightArrow />{" "}
      </span>
    </div>
  );
};

export default ScrollX;
