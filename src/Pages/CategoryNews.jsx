import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchNews } from "../utils/fetchNews";

import NewsLayout from "../Components/Layout/NewsLayout";

const CategoryNews = ({ category }) => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 20;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);

      try {
        const data = await fetchNews(category);
        setPosts(data.posts);
        setFilteredPosts(data.posts);
        setTotalItems(data.posts.length);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getPosts();
  }, [category]);

  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredPosts(filtered);
    setTotalItems(filtered.length);
    setCurrentPage(1);
  }, [searchQuery, posts]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= Math.ceil(totalItems / itemsPerPage)) {
      setCurrentPage(page);
    }
  };

  return (
    <NewsLayout
      category={category}
      isLoading={isLoading}
      posts={filteredPosts}
      currentPage={currentPage}
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      onPageChange={handlePageChange}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  );
};

CategoryNews.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryNews;
