import React from "react";
import Layout from "@/components/layouts/Layout";
import TeamAreas from "@/components/sections/TeamAreas";
import BrandArea from "@/components/sections/BrandArea";

const Teachers = () => {
  return (
    <>
      <Layout breadcrumbTitle="Teachers">
        <TeamAreas />
        <BrandArea />
      </Layout>
    </>
  );
};

export default Teachers;
