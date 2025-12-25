import Header from "./components/Header";
import Intro from "./components/Intro";
import Search from "./components/Search";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import RegisterForm from "./components/RegisterForm";

export default function Home() {
  return (
    <div>
        <Header />
        <Intro />
        <Search />
        <Slider />
        <RegisterForm />
        <Footer />
    </div>
  );
}
