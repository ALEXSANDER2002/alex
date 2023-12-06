import Breadcrumb from "./breadcrumb";
import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="template-base">
      <Header />
      <main className="d-flex flex-fill mb-5" id="main">
        <div className="container-lg d-flex">
          {
            //<Menu />
          }
          <div className="col mb-5">
            <Breadcrumb />
            <div className="main-content pl-sm-3 mt-4 px-2" id="main-content">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
