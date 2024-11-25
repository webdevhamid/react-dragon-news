import LatestNews from "../components/LatestNews";
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import Main from "./../components/Main";
import Navbar from "./../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header className="container mx-auto">
        {/* Header */}
        <Header />
        {/* Latest News */}
        <LatestNews />
        {/* Navbar */}
        <Navbar />
      </header>
      <section className="py-10">
        {/* Main Content */}
        <Main />
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeLayout;
