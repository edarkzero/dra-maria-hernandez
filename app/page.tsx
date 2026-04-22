import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Process />
        <FAQ />
        {/* TODO: agregar sección <Testimonials /> cuando la Dra. proporcione testimonios reales */}
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
