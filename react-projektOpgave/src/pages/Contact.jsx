import NewsLetter from "../components/newsLetter/NewsLetter";
import PageHeader from "../components/pageHeader/PageHeader";
import SectionHeader from "../components/sectionHeader/SectionHeader";
import useFetch from "../hooks/useFetch";

const Contact = () => {
  const { data: product } = useFetch(`https://dummyjson.com/products/17`);

  return (
    <section>
      <PageHeader
        title="Contact Us!"
        subTitle=""
        headerImg={product?.images[0]}
        color="aqua"
      />
      <NewsLetter />
    </section>
  );
};

export default Contact;
