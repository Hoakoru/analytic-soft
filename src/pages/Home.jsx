import Navbar from "../components/NavBar";
import Container from "../components/Container";
import CardGroup from "../components/CardGroup";
import Client from "../components/Clients";
import Footer from "../components/Footer";
import { Element,scrollSpy  } from "react-scroll";

const Home = () => {
  return (
    <>
      <Navbar currentPage="home" />
      <div className="mt-16 flex flex-col">
        <Element name="container">
          <Container />
        </Element>
        <Element name="cardgroup">
          <CardGroup />
        </Element>
        <Element name="client">
          <Client />
        </Element>
      </div>
      <Footer />
    </>
  );
};

export default Home;
