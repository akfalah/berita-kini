import Beranda from "../Pages/Beranda";
import CategoryNews from "../Pages/CategoryNews";
import PostDetail from "../Pages/PostDetail";

const routes = [
  { name: "Beranda", path: "/", component: <Beranda /> },
  {
    name: "Nasional",
    path: "/nasional",
    component: <CategoryNews category="Nasional" />,
  },
  {
    name: "Internasional",
    path: "/internasional",
    component: <CategoryNews category="Internasional" />,
  },
  {
    name: "Ekonomi",
    path: "/ekonomi",
    component: <CategoryNews category="Ekonomi" />,
  },
  {
    name: "Olahraga",
    path: "/olahraga",
    component: <CategoryNews category="Olahraga" />,
  },
  {
    name: "Teknologi",
    path: "/teknologi",
    component: <CategoryNews category="Teknologi" />,
  },
  {
    name: "Hiburan",
    path: "/hiburan",
    component: <CategoryNews category="Hiburan" />,
  },
  {
    name: "Gaya Hidup",
    path: "/gaya-hidup",
    component: <CategoryNews category="Gaya Hidup" />,
  },
  { name: "Post Detail", path: "/post/:title", component: <PostDetail /> },
];

export default routes;
