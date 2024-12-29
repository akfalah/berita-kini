import Beranda from "../Pages/Beranda";
import CategoryNews from "../Pages/CategoryNews";
import PostDetail from "../Pages/PostDetail";

const base = "/berita-kini";

const routes = [
  { name: "Beranda", path: `${base}/`, component: <Beranda /> },
  {
    name: "Nasional",
    path: `${base}/nasional`,
    component: <CategoryNews category="Nasional" />,
  },
  {
    name: "Internasional",
    path: `${base}/internasional`,
    component: <CategoryNews category="Internasional" />,
  },
  {
    name: "Ekonomi",
    path: `${base}/ekonomi`,
    component: <CategoryNews category="Ekonomi" />,
  },
  {
    name: "Olahraga",
    path: `${base}/olahraga`,
    component: <CategoryNews category="Olahraga" />,
  },
  {
    name: "Teknologi",
    path: `${base}/teknologi`,
    component: <CategoryNews category="Teknologi" />,
  },
  {
    name: "Hiburan",
    path: `${base}/hiburan`,
    component: <CategoryNews category="Hiburan" />,
  },
  {
    name: "Gaya Hidup",
    path: `${base}/gaya-hidup`,
    component: <CategoryNews category="Gaya Hidup" />,
  },
  { name: "Post Detail", path: `${base}/post/:title`, component: <PostDetail /> },
];

export default routes;
