import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; // Import useParams to get the title from URL
import { getSections } from '../../redux/Slice/Parent.slice';
import BreadCrumbs from '../../Component/BreadCums';

const BlogDetail = () => {
  const dispatch = useDispatch();
  const { title } = useParams(); // Get the title from URL

  console.log(title);
  
  
  const [currentPost, setCurrentPost] = useState(null);
  const section1 = useSelector((state) => state?.parent?.sections);
  const loading = useSelector((state) => state?.parent?.loading);

  console.log("All Section Titles:", section1.map(post => post.title));

  // Fetch sections if not available
  useEffect(() => {
    if (!section1?.length) {
      dispatch(getSections());
    }
  }, [dispatch, section1]);

  // Find the blog post using the title from URL
  useEffect(() => {
    if (section1?.length > 0) {
      console.log("Finding Post with Title:", decodeURIComponent(title));
      const foundPost = section1.find(post => 
        post.title.toLowerCase().trim() === decodeURIComponent(title).toLowerCase().trim()
      );
      setCurrentPost(foundPost || null);
    }
  }, [title, section1]); 


  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <p className="text-center text-black">Loading...</p>;
  if (!currentPost) return <p className="text-center text-black">Blog not found</p>;

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: currentPost?.title },
  ];

  return (
    <div>
      <BreadCrumbs headText={currentPost?.title} items={breadcrumbItems} />
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 gap-4 pt-6">
        {/* Main Blog Content */}
        <div className="md:w-3/4 w-full">
          <img
            src={currentPost.photo?.secure_url}
            alt={currentPost.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <div
            className="prose text-black"
            dangerouslySetInnerHTML={{ __html: currentPost.description }}
          />
        </div>

        {/* Sidebar for Related Blogs */}
        <div className="md:w-1/4 w-full p-4 bg-white shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-black">Recent Blogs</h2>
          <ul className="space-y-4">
            {section1.map((post) => (
              <li key={post.id} className="flex items-center bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition">
                <a
                  href={`/blog/${encodeURIComponent(post.title)}`} // Update URL for navigation
                  className="flex items-center w-full"
                >
                  <img
                    src={post.photo?.secure_url}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-md mr-2"
                  />
                  <span className="text-gray-700 hover:text-[#4A6F8F] ease-in-out duration-500 cursor-pointer">
                    {post.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
