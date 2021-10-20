import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import Hero from "../components/Card/Hero";
import TheGame from "../components/Card/TheGame";
import Feature from "../components/Card/Feature";
import Requirement from "../components/Card/Requirement";
import TopScore from "../components/Card/TopScore";
import NewsLetter from "../components/Card/NewsLetter";

const Index = () => {
  return (
    <Layout pageTitle="Games">
      <Header />
      <Hero />
      <TheGame />
      <Feature />
      <Requirement />
      <TopScore />
      <NewsLetter />
    </Layout>
  );
};
export default Index;
