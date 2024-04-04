import React from 'react';

const Shimmer = ({ width, height }) => {
  return (
    <div className="flex justify-center items-center">
   <div className="w-64 h-80 m-5 p-5 border border-gray-300 rounded-lg overflow-hidden"></div>
   <div className="w-64 h-80 m-5 p-5 border border-gray-300 rounded-lg overflow-hidden"></div>
   <div className="w-64 h-80 m-5 p-5 border border-gray-300 rounded-lg overflow-hidden"></div>
   <div className="w-64 h-80 m-5 p-5 border border-gray-300 rounded-lg overflow-hidden"></div>
    
  </div>
  );
};

export default Shimmer;
