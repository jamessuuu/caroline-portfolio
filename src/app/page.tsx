import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import AIEdge from "@/components/AIEdge";
import Experience from "@/components/Experience";
import CaseStudies from "@/components/CaseStudies";
import Tools from "@/components/Tools";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FallingLeaves from "@/components/FallingLeaves";

export default function Home() {
  return (
    <>
      <FallingLeaves />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <AIEdge />
        <Experience />
        <CaseStudies />
        <Tools />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
