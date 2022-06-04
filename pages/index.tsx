import type { NextPage } from "next";
import Head from "next/head";
import Header from "components/Header";
import Hero from "components/Hero";
import Work from "components/Section/Work";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Xavier Vila Rubio</title>
        <meta name="description" content="Xavier Vila Rubio Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Header />
        <Hero />
        <Work />
      </div>
    </>
  );
};

export default Home;
