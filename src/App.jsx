import { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import GalleryPage from "./components/Gallery";
import ProjectsPage from "./components/Projects";
import VideoEdits from "./components/VideoEdits";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

const Services = lazy(() => import("./components/Services"));

function App() {
  const [page, setPage] = useState(() => {
    const hash = window.location.hash;
    return ["#gallery", "#projects", "#video-edits"].includes(hash) ? hash.slice(1) : "home";
  });

  useEffect(() => {
    const updateView = () => {
      const hash = window.location.hash;
      setPage(["#gallery", "#projects", "#video-edits"].includes(hash) ? hash.slice(1) : "home");
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

  useEffect(() => {
    if (page === "home") return;
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <Navbar />
      {page === "gallery" ? (
        <GalleryPage />
      ) : page === "projects" ? (
        <ProjectsPage />
      ) : page === "video-edits" ? (
        <VideoEdits />
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
