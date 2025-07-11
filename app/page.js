import Footer from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";
import Gallery from "@/components/sections/gallery";
import Hero from "@/components/sections/hero";
import HeroSection from "@/components/sections/heroOld";
import ImageTrail from "@/components/sections/imageTrail";
import Products from "@/components/sections/products";

export default function Home() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        {/* <HeroSection/> */}
        <Hero/>
        <Products/>
        <div className="w-full h-screen relative">
        </div>

        {/* <Gallery/> */}
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}
