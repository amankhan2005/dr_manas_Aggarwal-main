import React, { useEffect } from 'react';
import BlogList from './BlogList';

import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { useDispatch, useSelector } from 'react-redux';
import { getSections } from '../../redux/Slice/Parent.slice';
import SkeletonBlogCard from './SkeletonCard';

const BlogSection = () => {
  const dispatch = useDispatch();
  
  const section1 = useSelector((state) => state?.parent?.sections);
  const loading = useSelector((state) => state?.parent?.loading);
  const error = useSelector((state) => state?.parent?.error);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getSections());
    };
    fetchData();
  }, [dispatch]);

  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  // Only show a maximum of 3 blogs
  const visibleBlogs = section1 && section1.length > 0 ? section1.slice(0, 3) : [];

  return (
    <div className="mx-auto px-4 max-w-7xl py-10 md:py-12">
       <div className="mb-2 flex flex-col items-center ">
          <h2 className="text-start md:text-center w-full md:w-auto">
            Our Blog
          </h2>
          <h1 className="mb-1 text-start md:text-center  leading-tight w-full sm:w-11/12 md:w-3/2 lg:w-full">
           Latest Articles & Insights
          </h1>
        </div>
      {loading ? (
        <div className="flex flex-row space-y-4 justify-between">
          <SkeletonBlogCard />
          <SkeletonBlogCard />
          <SkeletonBlogCard />
        </div>
      ) : (
        <BlogList section={visibleBlogs} />
      )}
      {error && <p className="text-red-500 text-center">Error loading blogs.</p>}
    </div>
  );
};

export default BlogSection;
