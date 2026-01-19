import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileSubscription from "../../components/ProfileSubscription";

export default function SubscribePage() {
  return (
    <div>
        <Header />
        <ProfileSubscription status="inactive"/>
        <Footer />
    </div>
  );
}
