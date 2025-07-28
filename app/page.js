import House from "../components/sections/house";
import AboutSec from "../components/sections/aboutSec";
import Faqs from "../components/sections/faqs";
import Hero from "../components/sections/hero";
import NewHero from "../components/sections/newHero";
import One from "../components/sections/one";
import HomeProducts from "../components/sections/products";
import BgLayout from "../components/templates/bgLayout";

export const metadata = {
  title: "Professional AC, DC & Hand Tools | Stevron Tools - Industrial Equipment Supplier",
  description: "Discover Stevron Tools' comprehensive range of professional-grade AC tools, DC tools, hand tools, and accessories. Trusted by professionals worldwide for precision, reliability, and durability. Shop quality industrial equipment online with fast shipping.",
  keywords: [
    "professional tools",
    "AC power tools",
    "DC cordless tools", 
    "hand tools",
    "industrial equipment",
    "precision tools",
    "workshop tools",
    "construction tools",
    "electrical tools",
    "mechanical tools",
    "tool accessories",
    "professional grade equipment",
    "Stevron Tools",
    "quality tools online"
  ],
  openGraph: {
    title: "Professional AC, DC & Hand Tools | Stevron Tools",
    description: "Discover premium professional-grade tools trusted by experts worldwide. AC tools, DC tools, hand tools & accessories with precision and reliability.",
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Stevron Tools - Professional Grade Tools Collection',
      }
    ],
  },
  twitter: {
    title: "Professional AC, DC & Hand Tools | Stevron Tools",
    description: "Premium professional-grade tools trusted by experts worldwide. AC tools, DC tools, hand tools & accessories.",
    images: ['/twitter-home.jpg'],
  },
  alternates: {
    canonical: 'https://stevrontools.com',
  },
};

export default function Home() {
  return (
    <BgLayout>
      <main>
        {/* <Hero/> */}
        <div className="">
          <NewHero/>
        </div>
        <House/>
        <One/>
        <HomeProducts/>
        <AboutSec/>
        <Faqs/>
        {/* <div className="h-[100vh]"/> */}
      </main>
    </BgLayout>
  );
}
