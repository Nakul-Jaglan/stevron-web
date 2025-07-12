import Footer from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";
import Brand from "@/components/sections/brand";
import Gallery from "@/components/sections/gallery";
import Hero from "@/components/sections/hero";
import HeroSection from "@/components/sections/heroOld";
import ImageTrail from "@/components/sections/imageTrail";
import Products from "@/components/sections/products";
import BgLayout from "@/components/templates/bgLayout";

export default function Home() {
  return (
    <BgLayout>
      <main>
        {/* <HeroSection/> */}
        <Hero/>
        <Products/>
        <Brand/>
        {/* <div className="w-full h-screen relative">
        </div> */}

        {/* <Gallery/> */}
      </main>
    </BgLayout>
  );
}
