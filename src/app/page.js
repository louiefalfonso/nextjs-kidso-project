import SliderArea from "@/components/sections/SliderArea";
import Layout from "@/components/layouts/Layout";
import BrandArea from "@/components/sections/BrandArea";
import ServicesArea from "@/components/sections/ServicesArea";
import AboutArea from "@/components/sections/AboutArea";
import CounterArea from "@/components/sections/CounterArea";
import ClassArea from "@/components/sections/ClassArea";
import StepsArea from "@/components/sections/StepsArea";
import ContactArea from "@/components/sections/ContactArea";

export default function Home() {
  return (
    <>
      <Layout>
        <SliderArea />
        <BrandArea />
        <ServicesArea />
        <AboutArea />
        <CounterArea />
        <ClassArea />
        <StepsArea />
        <ContactArea />
        <BrandArea />
      </Layout>
    </>
  );
}
