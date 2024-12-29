import { useState, useEffect, Fragment } from "react";
import { fetchNews } from "../utils/fetchNews";

import Loader from "./Loader";
import Header from "./Header";
import PopulerCard from "./PopulerCard";

const Populer = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);

      try {
        const category = "Terbaru";
        const data = await fetchNews(category);

        const topPosts = data.posts
          .slice(0, 3)
          .map((post) => ({ ...post, category: data.category }));

        setPosts(topPosts);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getPosts();
  }, []);

  return (
    <section className="flex flex-col space-y-8">
      <Header title="Berita Terpopuler" />

      <div className="w-full flex justify-center items-center space-x-6">
        {isLoading && <Loader />}

        {posts.map((post, index) => (
          <Fragment key={index}>
            <PopulerCard item={post} index={index} />

            {index < posts.length - 1 && (
              <div className="w-px h-[100px] bg-[#E0E0E0] flex-shrink-0" />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Populer;
