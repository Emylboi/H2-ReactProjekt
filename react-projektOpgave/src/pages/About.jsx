import PageHeader from "../components/pageHeader/PageHeader";
import SectionHeader from "../components/sectionHeader/SectionHeader";
import useFetch from "../hooks/useFetch";

const About = () => {
  const { data: product } = useFetch(`https://dummyjson.com/products/14`);

  return (
    <section>
      <PageHeader
        title="You should know this about us!"
        subTitle=""
        headerImg={product?.images[0]}
        color="black"
      />
      <SectionHeader title="About Us" /> 
    </section>
  );
};

export default About;
