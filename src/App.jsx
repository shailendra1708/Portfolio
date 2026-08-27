import { lazy, Suspense, useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TalesPage from "./components/Tales";
import GalleryPage from "./components/Gallery";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

const Services = lazy(() => import("./components/Services"));

function App() {
  const [page, setPage] = useState(() => {
    const hash = window.location.hash;
    return hash === "#gallery" || hash === "#tales" ? hash.slice(1) : "home";
  });

  useEffect(() => {
    const updateView = () => {
      const hash = window.location.hash;
      setPage(hash === "#gallery" || hash === "#tales" ? hash.slice(1) : "home");
    };

    window.addEventListener("hashchange", updateView);
    return () => window.removeEventListener("hashchange", updateView);
  }, []);

  useEffect(() => {
    if (page !== "home") return;

    const hash = window.location.hash;
    if (!hash) return;

    document.querySelector(hash)?.scrollIntoView();
  }, [page]);

  return (
    <>
      <Navbar />
      {page === "gallery" ? (
        <GalleryPage />
      ) : page === "tales" ? (
        <TalesPage />
      ) : (
        <>
          <Hero />
          <About />
          <Suspense fallback={<div className="min-h-24 bg-black" aria-label="Loading services" />}>
            <Services />
          </Suspense>
          <Feedback />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
