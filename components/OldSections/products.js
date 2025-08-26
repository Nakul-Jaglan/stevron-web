"use client";
import ChromaGrid from '../../ui/chromaGrid.js';
import { motion } from "framer-motion";


function Products() {
    const items = [
    {
        image: "/dc-tools/20J Rotary Hammer.png",
        title: "DC Tools",
        // subtitle: "Rotary Hammer",
        // handle: "@sarahjohnson",
        borderColor: "#3B82F6",
        gradient: "linear-gradient(145deg, #3B82F6, #000)",
        url: "/productos/herramientas-baterias"
    },
    {
        image: "/ac-tools/Router.png",
        title: "AC Tools",
        // subtitle: "Router",
        // handle: "@mikechen",
        borderColor: "#10B981",
        gradient: "linear-gradient(180deg, #10B981, #000)",
        url: "/productos/herramientas-electricas"
    }
    ];
  return (
    <div>
        <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-center mb-8"
        >
            Our <span className="text-[#989b2e]">Products</span>
        </motion.h2>
        <ChromaGrid 
            items={items}
            radius={400}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
        />
    </div>
  )
}

export default Products