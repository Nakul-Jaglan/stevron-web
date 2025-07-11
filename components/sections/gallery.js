import CircularGallery from '../../ui/circularGallery.js'

function Gallery() {
  return (
    <section>
        <div style={{ height: '50vh', position: 'relative' }}>
        <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.1} scrollEase={0.02}/>
        </div>
    </section>
  )
}

export default Gallery