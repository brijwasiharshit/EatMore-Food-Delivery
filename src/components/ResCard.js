import { CDN_URL } from "../utils/constants.js";

const ResCard = ({ resData }) => {
  const { cloudinaryImageId, name, costForTwo, sla, avgRating } = resData?.info || {};
  return (
    <div className="m-4 p-4 w-72 max-w-xs bg-gray-150 h-[400px] hover:bg-gray-300 rounded-lg shadow-lg border-100">
      <img className="w-full h-48 object-cover rounded-t-lg" src={CDN_URL + cloudinaryImageId} alt={name} />
      <div className="p-4">
        <h4 className="text-xl font-bold mb-2">{name}</h4>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Cost for Two:</span>
          <span className="text-gray-900 font-bold">{costForTwo}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Average Rating:</span>
          <span className="text-gray-900 font-bold">{avgRating}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Delivery Time:</span>
          <span className="text-gray-900 font-bold">{sla?.deliveryTime} mins</span>
        </div>
      </div>
    </div>
  );
}

export const FastDelivery = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute mx-5 my-2 p-1 bg-black text-white rounded-md">Fast delivery</label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
