import MyFavorites from "../components/myFavorites/MyFavorites";
import NewsLetter from "../components/newsLetter/NewsLetter";
import PageHeader from "../components/pageHeader/PageHeader";
import SectionHeader from "../components/sectionHeader/SectionHeader";
import UserFavorites from "../components/userFavorites/UserFavorites";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data: product } = useFetch(`https://dummyjson.com/products/5`);

  return (
    <section>
      <PageHeader
        title="Nice Products"
        subTitle="Here you can see all our nice products"
        headerImg={product?.images[0]}
        color="white"
      />
      <SectionHeader title="Customer Favorites" />
      <UserFavorites/>
      <SectionHeader title="Your Favorites" />
      <MyFavorites/>
      <NewsLetter/>
    </section>
  );
};

export default Home;
