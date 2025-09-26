import React, { useEffect } from 'react';
import BlogCard from './BlogCard';

import blogimage from '../../assets/blog.jpg';
import blogimage2 from '../../assets/blog1.jpeg';
import blogimage3 from '../../assets/blof2.jpeg';

import AOS from 'aos'; // Import AOS
import BreadCrumbs from '../../Component/BreadCums';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { getSections } from '../../redux/Slice/Parent.slice';
import SkeletonBlogCard from './SkeletonCard';

const BlogPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const section1 = useSelector((state) => state?.parent?.sections);
  const loading = useSelector((state) => state?.parent?.loading);
  const error = useSelector((state) => state?.parent?.error);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog' },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    dispatch(getSections());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.pathname === '/blog') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <section>
      <BreadCrumbs headText={"Our Blog"} items={breadcrumbItems} />
      <Helmet>
        <title>Our Blogs - Dr. Manas Aggarwal</title>
        <meta name="description" content="Explore insightful blogs by Dr. Manas Aggarwal, a leading gastroenterology surgeon in Lucknow, covering health tips, patient care, and medical insights." />
        <meta name="keywords" content="Blogs, Dr. Manas Aggarwal, Gastroenterology, Health Tips, Surgeon, Lucknow, Medical Insights" />
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] p-4 max-w-7xl items-center justify-center mx-auto mt-[3rem] mb-[2.5rem]">
        {loading ? (
          // Show skeleton cards while loading
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonBlogCard key={index} />
          ))
        ) : (
          section1.map((post, index) => (
            <BlogCard
              key={index}
              {...post}
              data-aos="fade-up" // Add AOS attribute for animation
            />
          ))
        )}
      </div>
    </section>
  );
};

export default BlogPage;
