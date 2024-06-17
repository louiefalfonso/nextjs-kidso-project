import React from "react";
import Layout from "@/components/layouts/Layout";
import ClassArea from "@/components/sections/ClassArea";
import BrandArea from "@/components/sections/BrandArea";

const Classes = () => {
  return (
    <>
      <Layout breadcrumbTitle="Classes">
        <ClassArea />
        <BrandArea />
      </Layout>
    </>
  );
};

export default Classes;
