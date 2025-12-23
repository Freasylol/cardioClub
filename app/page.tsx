import Header from "./components/header";
import Intro from "./components/intro";
import Search from "./components/search";
import Slider from "./components/slider";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
        <Header />
        <Intro />
        <Search />
        <Slider />
        <Footer />
    </div>
  );
}
