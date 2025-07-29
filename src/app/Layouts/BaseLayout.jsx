import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";

const BaseLayout = ({ children = null, className = "", ...props }) => {
  return (
    <div className={className} {...props}>
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    </div>
  );
};

export default BaseLayout;
