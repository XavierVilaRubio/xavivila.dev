import type { NextPage } from "next";
import Head from "next/head";
import Header from "components/Header";
import Hero from "components/Hero";
import Work from "components/Section/Work";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import Resume from "components/Section/Resume";
import Contact from "components/Section/Contact";

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Xavier Vila Rubio</title>
        <meta name="description" content="Xavier Vila Rubio Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Header t={t} />
        <Hero t={t} />
        <Work t={t} />
        <Resume t={t} />
        <Contact t={t} />
      </div>
    </>
  );
};

export default Home;
