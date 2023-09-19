import React from "react";

const ProductSizes = ({ productList, deleteSize }) => {

  return (
    <div className="colors">
      {productList.length > 0 && (
        <h3 className="captalize text-gray-400">Sizes List</h3>
      )}
      <div className="ProductSizes">
        {productList.length > 0 &&
          productList.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  className="AllignIndividualProductSizes"
                  onClick={() =>deleteSize(item)}
                >
                    {item}
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default ProductSizes;
