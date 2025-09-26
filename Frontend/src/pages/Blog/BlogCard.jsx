import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogCard = ({ title, category, photo, date, description, updatedAt }) => {
  const removeHTMLTags = (text) => {
    return text.replace(/<[^>]*>/g, '');
  };

  const truncateText = (text, maxLength) => {
    const cleanText = removeHTMLTags(text);
    if (cleanText.length > maxLength) {
      return cleanText.slice(0, maxLength) + '...';
    }
    return cleanText;
  };

  const maxLength = 100;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure 2-digit month
    const day = String(date.getDate()).padStart(2, '0'); // Ensure 2-digit day
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="flex flex-col h-full rounded-md relative group overflow-hidden  shadow-lg transition-transform duration-300 transform hover:scale-105">
      <img
        src={photo?.secure_url}
        alt={title}
        className="w-full h-64 object-cover transition-opacity duration-500 group-hover:opacity-80"
      />

      <div className="absolute top-4 left-4 bg-white bg-opacity-75 rounded-full px-3 py-1 flex items-center text-gray-800 text-sm">
        <FaRegCalendarAlt className="mr-2" />
        <span>{formatDate(updatedAt)}</span>
      </div>

      <div className="p-2 bg-white flex-grow flex flex-col">
        <Link to={`/blog/${title}`} state={{ title, category, photo, date, description }}            aria-label={`Read more about ${title}`} >   <h2 className="text-lg font-bold text-gray-800 mb-2 transition-colors duration-300 hover:text-red-700">{title}</h2></Link>

        <p className="text-sm text-gray-500 ">{category}</p>
        <p className="text-sm text-gray-700 mb-2 flex-grow">
          {truncateText(description, maxLength)}
        </p>


        <Link
          to={`/blog/${encodeURIComponent(title)}`} // Encode URL to handle spaces
          state={{ title, category, photo, date, description }} // Pass the data here
          className="mt-auto text-[#4f6f8f] font-bold hover:text-[#4679ac] transition-colors duration-300"
          aria-label={`Read more about ${title}`} // Added aria-label for accessibility
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
