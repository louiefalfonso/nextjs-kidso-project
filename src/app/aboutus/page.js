import Layout from "@/components/layouts/Layout";
import AboutArea from "@/components/sections/AboutArea";
import BrandArea from "@/components/sections/BrandArea";
import CounterArea from "@/components/sections/CounterArea";
import TestimonialArea from "@/components/sections/TestimonialArea";
import VideoArea from "@/components/sections/VideoArea";

const AboutUs = () => {
  return (
    <>
      <Layout breadcrumbTitle="About Us">
        <AboutArea />
        <CounterArea />
        <VideoArea />
        <TestimonialArea />
        <BrandArea />
      </Layout>
    </>
  );
};

export default AboutUs;
