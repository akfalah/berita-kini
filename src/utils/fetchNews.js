import axios from "axios";

const paths = [
  {
    name: "Terbaru",
    path: "https://api-berita-indonesia.vercel.app/cnn/terbaru/",
  },
  {
    name: "Nasional",
    path: "https://api-berita-indonesia.vercel.app/cnn/nasional/",
  },
  {
    name: "Internasional",
    path: "https://api-berita-indonesia.vercel.app/cnn/internasional/",
  },
  {
    name: "Ekonomi",
    path: "https://api-berita-indonesia.vercel.app/cnn/ekonomi/",
  },
  {
    name: "Olahraga",
    path: "https://api-berita-indonesia.vercel.app/cnn/olahraga/",
  },
  {
    name: "Teknologi",
    path: "https://api-berita-indonesia.vercel.app/cnn/teknologi/",
  },
  {
    name: "Hiburan",
    path: "https://api-berita-indonesia.vercel.app/cnn/hiburan/",
  },
  {
    name: "Gaya Hidup",
    path: "https://api-berita-indonesia.vercel.app/cnn/gayaHidup/",
  },
];

const fetchNews = async (category) => {
  try {
    const selectedCategory = paths.find((path) => path.name === category);

    if (!selectedCategory) {
      throw new Error(`Category "${category}" is not found.`);
    }

    const response = await axios.get(selectedCategory.path);
    
    return {
      category: selectedCategory.name,
      posts: response.data.data.posts.map(post => ({ ...post, category: selectedCategory.name })),
    };
  } catch (error) {
    console.error(`Error fetching news for category "${category}":`, error);
    throw error;
  }
};

export { fetchNews, paths };
