import AboutSec from "@/components/sections/aboutSec";
import Faqs from "@/components/sections/faqs";
import Hero from "@/components/sections/hero";
import NewHero from "@/components/sections/newHero";
import One from "@/components/sections/one";
import HomeProducts from "@/components/sections/products";
import BgLayout from "@/components/templates/bgLayout";

export default function Home() {
  return (
    <BgLayout>
      <main>
        {/* <Hero/> */}
        <div className="">
          <NewHero/>
        </div>
        <One/>
        <HomeProducts/>
        <AboutSec/>
        <Faqs/>
        {/* <div className="h-[100vh]"/> */}
      </main>
    </BgLayout>
  );
}
