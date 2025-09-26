import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';

const SkeletonBlogCard = () => {
  return (
    <div className="flex flex-col h-full lg:w-[25rem] relative group overflow-hidden rounded-lg shadow-lg bg-gray-200 animate-pulse">
      <div className="w-full h-64 bg-gray-300"></div>

      <div className="absolute top-4 left-4 bg-white bg-opacity-75 rounded-full px-3 py-1 flex items-center text-gray-600 text-sm">
        <FaRegCalendarAlt className="mr-2" />
        <span className="h-4 bg-gray-300 w-20"></span> {/* Skeleton for date */}
      </div>

      <div className="p-4 bg-white flex-grow flex flex-col">
        <h2 className="h-6 bg-gray-300 rounded mb-2"></h2> {/* Skeleton for title */}
        <p className="h-4 bg-gray-300 rounded mb-2"></p> {/* Skeleton for category */}
        <p className="h-4 bg-gray-300 rounded mb-4 flex-grow"></p> {/* Skeleton for description */}

        {/* Read More Link */}
        <div className="h-4 bg-gray-300 rounded w-32"></div> {/* Skeleton for Read More link */}
      </div>
    </div>
  );
};

export default SkeletonBlogCard;
