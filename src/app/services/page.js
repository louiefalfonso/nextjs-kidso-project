import React from "react";
import Layout from "@/components/layouts/Layout";
import ServiceArea from "@/components/sections/ServiceArea";
import BrandArea from "@/components/sections/BrandArea";

const Services = () => {
  return (
    <>
      <Layout breadcrumbTitle="Services">
        <ServiceArea />
        <BrandArea />
      </Layout>
    </>
  );
};

export default Services;
