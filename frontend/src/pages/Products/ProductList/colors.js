import React from "react";
import "./colors.scss"

const Colors = ({ colorsList, deleteColor }) => {

  return (
    <div className="colors">
      {colorsList.length > 0 && <h3 className="captalize text-gray-400">Color List</h3>}
      <div className="AllignColors">
      {colorsList.length > 0 &&
        colorsList.map((item) => {
          return (
            <>
              <div key={item.id} 
              className="cursor-pointer rounded-full w-[30px] h-[30px] me-3 my-2" 
              style={{backgroundColor :item.color}}
              onClick={() =>deleteColor(item.color)}
              >
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Colors;