import Hero from "@/components/sections/hero";
import NewHero from "@/components/sections/newHero";
import One from "@/components/sections/one";
import BgLayout from "@/components/templates/bgLayout";

export default function Home() {
  return (
    <BgLayout>
      <main>
        {/* <Hero/> */}
        <div className="hidden lg:block">
          <NewHero/>
        </div>
        <One/>
        <div className="h-[100vh]"/>
      </main>
    </BgLayout>
  );
}
