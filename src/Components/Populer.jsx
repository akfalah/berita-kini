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
    <section className="w-full flex flex-col space-y-4 lg:space-y-8 animate-fade-in">
      <Header title="Berita Terpopuler" />

      <div className="flex flex-col items-center">
        {isLoading && <Loader />}

        <div className="w-full flex flex-col lg:flex-row justify-center space-y-8 md:space-y-0 lg:space-x-6">
          {posts.map((post, index) => (
            <Fragment key={index}>
              <PopulerCard item={post} index={index} />
              {index < posts.length - 1 && (
                <div className="hidden lg:block w-px h-[100px] bg-[#E0E0E0] flex-shrink-0" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Populer;
