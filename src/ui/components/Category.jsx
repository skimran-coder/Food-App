import { IMG_CDN_URL } from "../../Constant";

const Category = ({ imageId }) => {
  return <img src={IMG_CDN_URL + imageId} className="w-36"></img>;
};

export default Category;
