import Headline from "../Components/Headline";
import Populer from "../Components/Populer";
import Rekomendasi from "../Components/Rekomendasi";
import Banner from "../Components/Banner";

const Beranda = () => {
  return (
    <section className="w-full flex flex-col space-y-32">
      <Headline />
      <Populer />
      <Rekomendasi />
      <Banner />
    </section>
  );
};

export default Beranda;
