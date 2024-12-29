import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchNews } from "../utils/fetchNews";
import formatDate from "../utils/formatDate";

import Breadcrumb from "../Components/Breadcrumb";
import Loader from "../Components/Loader";
import Header from "../Components/Header";
import PopulerCard from "../Components/PopulerCard";
import Rekomendasi from "../Components/Rekomendasi";
import NotFound from "./NotFound";

import ava1 from "../Assets/Images/ava-1.png";

const PostDetail = () => {
  const { title } = useParams();
  const [post, setPost] = useState(null);
  const [populer, setPopuler] = useState([]);
  const [comment, setComment] = useState("");
  const [isLoadingPost, setIsLoadingPost] = useState(true);
  const [isLoadingPopuler, setIsLoadingPopuler] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      setIsLoadingPost(true);
      
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
        
        let foundPost = null;
        
        for (const category of categories) {
          const data = await fetchNews(category);
          
          foundPost = data.posts.find((post) => post.title === title);
          
          if (foundPost) {
            foundPost.category = category;
            break;
          }
        }
        
        setPost(foundPost);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingPost(false);
      }
    };
    
    getPost();
  }, [title]);
  
  useEffect(() => {
    const getPopuler = async () => {
      setIsLoadingPopuler(true);

      try {
        const category = "Terbaru";
        const data = await fetchNews(category);

        const topPosts = data.posts
          .slice(0, 3)
          .map((post) => ({ ...post, category: data.category }));

        setPopuler(topPosts);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingPopuler(false);
      }
    };

    getPopuler();
  }, []);

  if (isLoadingPost) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (!post) {
    return <NotFound />;
  }

  const handleCommentChange = (e) => {
    if (e.target.value.length <= 50) {
      setComment(e.target.value);
    }
  };

  return (
    <main className="w-full flex flex-col space-y-8 lg:space-y-12 animate-fade-in">
      {isLoadingPost && <Loader />}
      <Breadcrumb category={post.category} />

      <section className="w-full flex flex-col justify-center items-center space-y-20 lg:space-y-36">
        {isLoadingPopuler && <Loader />}

        <div className="w-full flex space-x-[22px]">
          <article className="flex flex-col space-y-12 lg:space-y-[72px]">
            <section className="flex flex-col space-y-9">
              <div className="flex flex-col space-y-6">
                <h1 className="font-sora text-4xl font-semibold">
                  {post.title}
                </h1>

                <div className="flex items-center space-x-3">
                  <p className="text-body-sm-semibold text-primary-500">
                    {post.category}
                  </p>

                  <div className="w-[4.76px] h-[4.76px] bg-[#D9D9D9] rounded-full" />

                  <p className="text-body-sm-medium text-[#526071]">
                    {formatDate(post.pubDate)}
                  </p>
                </div>
              </div>

              <figure className="flex flex-col space-y-3">
                <img
                  src={post.thumbnail}
                  alt="post-thumbnail"
                  className="w-full rounded-2xl"
                />

                <figcaption className="text-body-md-medium text-[#959EA9]">
                  {post.description}
                </figcaption>
              </figure>
            </section>

            <section className="*:mb-6 *:text-body-md-medium *:text-[#526071]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
                est vitae nisl tristique eleifend id id nisl. Praesent posuere
                hendrerit lacus, quis euismod dui. Phasellus quis suscipit
                dolor. Ut ullamcorper a dolor id dapibus. Nunc iaculis nisi
                velit, quis auctor lacus dapibus a. Maecenas tempor aliquam
                arcu, quis vulputate justo imperdiet gravida. Vestibulum ac arcu
                at mauris fringilla semper non et odio. Aliquam ut pharetra
                orci, iaculis cursus leo.
              </p>

              <p>
                Integer scelerisque elit a leo convallis porttitor. Morbi
                sollicitudin consectetur dolor. Fusce hendrerit, nunc feugiat
                tristique condimentum, diam dolor placerat neque, ac convallis
                tellus dolor et augue. Aenean vel auctor dui. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Etiam ullamcorper bibendum lorem sit amet porttitor.
                Vivamus sed ante laoreet, venenatis leo ut, luctus tortor.
                Mauris vel sapien ac leo imperdiet iaculis. Curabitur semper
                semper ipsum ut lobortis. Duis tincidunt mauris et lorem
                ultricies pharetra nec et mi.
              </p>

              <p>
                Integer velit erat, laoreet eu convallis non, suscipit sed
                sapien. Phasellus molestie neque vitae augue consectetur, eget
                pretium felis euismod. Ut lectus sem, iaculis eget condimentum
                ac, sollicitudin ut dui. Nullam a interdum quam, sed dictum
                augue. Proin fringilla tincidunt velit, non eleifend turpis
                accumsan a. Fusce a efficitur ligula. Nunc elit urna, convallis
                sed interdum nec, suscipit ac lacus. Etiam interdum sit amet
                odio a consequat. Quisque a magna sit amet nibh laoreet iaculis.
              </p>
            </section>

            <section className="w-full flex flex-col space-y-4">
              <Header title={"Komentar"} />

              <div className="py-3 lg:p-6 flex space-x-4 border-b border-[#E0E0E0]">
                <img
                  src={ava1}
                  alt="ava-user"
                  className="max-w-10 lg:max-w-14 max-h-10 lg:max-h-14 object-fill"
                />

                <div className="w-full flex flex-col space-y-1.5">
                  <div className="flex flex-col items-end space-y-1.5">
                    <textarea
                      name="comment"
                      id="comment"
                      placeholder="Apa yang ingin anda tanyakan?"
                      className="w-full h-[166px] resize-none p-3 border border-[#E0E0E0] rounded-lg focus:outline-none focus:shadow-[0_0_0_2px_#E0E0E0]"
                      value={comment}
                      onChange={handleCommentChange}
                    />
                    <span className="text-body-xs text-[#526071]">
                      {comment.length}/50
                    </span>
                  </div>

                  <button className="btn-primary w-fit">Kirim</button>
                </div>
              </div>
            </section>
          </article>

          <section className="hidden lg:flex flex-col space-y-8">
            <Header title="Berita Terpopuler" />

            <div className="w-max-[419px] flex flex-col justify-center items-center space-y-6">
              {populer.map((post, index) => (
                <Fragment key={index}>
                  <PopulerCard item={post} index={index} />
                  {index < populer.length - 1 && (
                    <div className="w-full h-px bg-[#E0E0E0] flex-shrink-0" />
                  )}
                </Fragment>
              ))}
            </div>
          </section>
        </div>

        <Rekomendasi />
      </section>
    </main>
  );
};

export default PostDetail;
