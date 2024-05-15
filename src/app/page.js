import Head from "next/head";
import Image from "next/image";
// import { useState } from "react";
// import { useClient } from "next/client";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import Footer from "./components/Footer/Footer";

export default function Home() {
  // useClient(); // Mark the component as a client-rendered component

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Charity Page</title>
        <meta name="description" content="Charity page with a game and donation popup." />
      </Head>

      {/* Header Section */}
      <Header />

      {/* Main Section */}
      <MainSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
