import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import AuthLayout from "./AuthLayout";

const BaseLayout = ({ children = null, className = "", ...props }) => {
  return (
    <div className={className} {...props}>
      <>
        <Header />
        <main>{children}</main>
        <AuthLayout>
          <Footer />
        </AuthLayout>
      </>
    </div>
  );
};

export default BaseLayout;
