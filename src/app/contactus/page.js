import Layout from "@/components/layouts/Layout";
import BrandArea from "@/components/sections/BrandArea";
import ContactDetails from "@/components/sections/ContactDetails";
import MapArea from "@/components/sections/MapArea";

const ContactUs = () => {
  return (
    <>
      <Layout breadcrumbTitle="Contact Us">
        <ContactDetails />
        <MapArea />
      </Layout>
    </>
  );
};

export default ContactUs;
