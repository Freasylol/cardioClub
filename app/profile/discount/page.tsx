import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Profile from "../../components/ProfileSubscription";

export default function SubscribePage() {
  return (
    <div>
        <Header />
        <Profile status="inactive"/>
        <Footer />
    </div>
  );
}
