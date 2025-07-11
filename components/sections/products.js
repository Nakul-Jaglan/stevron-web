import ChromaGrid from '../../ui/chromaGrid.js';

function Products() {
    const items = [
    {
        image: "/dc-tools/20J Rotary Hammer.png",
        title: "DC Tools",
        // subtitle: "Rotary Hammer",
        // handle: "@sarahjohnson",
        borderColor: "#3B82F6",
        gradient: "linear-gradient(145deg, #3B82F6, #000)",
        url: "/products/dc-tools"
    },
    {
        image: "/ac-tools/Router.png",
        title: "AC Tools",
        // subtitle: "Router",
        // handle: "@mikechen",
        borderColor: "#10B981",
        gradient: "linear-gradient(180deg, #10B981, #000)",
        url: "/products/ac-tools"
    }
    ];
  return (
    <div>
        <h2 className="text-6xl font-bold text-center mb-8">Our <span className='text-[#989b2e]'>Products</span></h2>
        <ChromaGrid 
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
        />
    </div>
  )
}

export default Products