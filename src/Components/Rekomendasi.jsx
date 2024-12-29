import { useEffect, useState } from "react";
import { fetchNews } from "../utils/fetchNews";

import NewsLayout from "./Layout/NewsLayout";

const Rekomendasi = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 8;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);

      try {
        const categories = [
          "Nasional",
          "Internasional",
          "Ekonomi",
          "Olahraga",
          "Teknologi",
          "Hiburan",
          "Gaya Hidup",
        ];

        const allPosts = [];

        for (const category of categories) {
          const data = await fetchNews(category);

          allPosts.push(
            ...data.posts
              .slice(0, 4)
              .map((post) => ({ ...post, category: data.category }))
          );
        }

        setPosts(allPosts);
        setFilteredPosts(allPosts);
        setTotalItems(allPosts.length);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getPosts();
  }, []);

  useEffect(() => {
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
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
      category="Rekomendasi Untuk Anda"
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

export default Rekomendasi;
