import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewCoffee = () => {
    const item = useLoaderData();
    
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
        className="h-[455px]"
          src={item.photoUrl}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.coffeename}</h2>
        <p>supplier: {item.supplier}</p>
        <p>Chef: {item.chef}</p>
        <p>taste: {item.taste}</p>
        <p>category: {item.category}</p>
        <p>details: {item.details}</p>
        
      </div>
    </div>
  );
};

export default ViewCoffee;
