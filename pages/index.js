import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Movies from "@/components/Movies";
import allRequests from "@/lib/allRequests";
import Head from "next/head";

const index = ({ results }) => {
  return (
    <>
      <Head>
        <title>MovieMind</title>
        <MetaTags />
      </Head>
      <Header />
      <Banner />
      <Movies results={results} />
      <Footer />
    </>
  );
};

// Serverside Rendering help us to fetch the data on the server side rather than the client side.
export async function getServerSideProps(context) {
  const userQuery = context.query.results;
  let results;
  try {
    const request = await fetch(
      `https://api.themoviedb.org/3${
        allRequests[userQuery]?.url || allRequests.trending.url
      }`
    );
    results = await request.json();
  } catch (error) {
    results = [];
    console.error(error);
  }
  return {
    props: { results }, // will be passed to the page component as props
  };
}

export default index;
