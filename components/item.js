import React from "react";
// import "../styles.css";

const Item = ({ item, children }) => {
  return (
    <div className="h-full max-w-sm mx-auto">
      <img
        src={item.url}
        className="object-cover object-center w-full h-48 border rounded-lg shadow-md"
        alt="json-photos"
      />
      <div className="relative px-4 -mt-12">
        <div className="px-4 pt-3 pb-3 bg-white bg-gray-100 border rounded-lg shadow-lg">
          <div className="text-lg font-semibold text-gray-800">{item.name}</div>
          <div className="mt-1 text-base leading-tight text-gray-900 truncate">
            {item.description}
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="text-xl text-gray-600">${item.price}</div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
