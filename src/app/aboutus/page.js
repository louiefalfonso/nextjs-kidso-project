import Layout from "@/components/layouts/Layout";
import AboutArea from "@/components/sections/AboutArea";
import BrandArea from "@/components/sections/BrandArea";
import CounterArea from "@/components/sections/CounterArea";

const AboutUs = () => {
  return (
    <>
      <Layout breadcrumbTitle="About Us">
        <BrandArea />
        <AboutArea />
        <CounterArea />
      </Layout>
    </>
  );
};

export default AboutUs;
