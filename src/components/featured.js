

import React from "react";

const Featured = () => (
  <div className="mb-10 border shadow p-6">
    <h2 className="text-xl font-bold">
      Featured: Tucson Shop Tucson
    </h2>

    <p className="mt-4">
    Buy Now. Gift Later. Shop Local. 
    </p>
    <p className="mt-4">
    Our curated marketplace of amazing local companies gives you the ability to support our talented entrepreneurs during this difficult economic moment.
    </p>

    <p className="mt-4">
      <a
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        href="https://www.startuptucson.com/tucsonshopstucson"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shop Local
      </a>
    </p>
  </div>
);

export default Featured;