import Hero from "@/components/sections/hero";
import NewHero from "@/components/sections/newHero";
import BgLayout from "@/components/templates/bgLayout";

export default function Home() {
  return (
    <BgLayout>
      <main>
        {/* <Hero/> */}
        <div className="hidden lg:block">
          <NewHero/>
        </div>
        <div className="h-[100vh]"/>
      </main>
    </BgLayout>
  );
}
