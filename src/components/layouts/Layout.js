import { Breadcrumbs } from "./Breadcrumbs";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, breadcrumbTitle }) => {
  return (
    <>
      <Header />
      {breadcrumbTitle && <Breadcrumbs breadcrumbTitle={breadcrumbTitle} />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
