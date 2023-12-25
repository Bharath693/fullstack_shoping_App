import { FaMinus } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

const ProductQuantity = ({quantity,inc,dec}) => {
  return (
    <div className="flex last:border-r last:rounded-tr-lg last:rounded-br-lg first:rounded-tl-lg first:rounded-bl-lg overflow-hidden">
      <span 
      className="flex border p-3 border-r-0 cursor-pointer hover:bg-indigo-500 hover:text-white transition-all"
      onClick={dec}
      >
        <FaMinus />
      </span>
      <span className="flex-1 border flex items-center justify-center font-medium border-r-0">
        {quantity}
      </span>
      <span 
      className="flex border p-3 border-r-0 cursor-pointer hover:bg-indigo-500 hover:text-white transition-all"
      onClick={inc}
      >
        <HiPlus />
      </span>
    </div>
  );
};

export default ProductQuantity;
