import ImageTrailP from '../../ui/imageTrailP.js'

function ImageTrail() {
  return (
    <section>
        <div style={{ height: '100vh', position: 'relative', overflow: 'hidden'}}>
        <ImageTrailP
            key={2}
            items={[
            // 'https://picsum.photos/id/287/300/300',
            // 'https://picsum.photos/id/1001/300/300',
            // 'https://picsum.photos/id/1025/300/300',
            // 'https://picsum.photos/id/1026/300/300',
            // 'https://picsum.photos/id/1027/300/300',
            // 'https://picsum.photos/id/1028/300/300',
            // 'https://picsum.photos/id/1029/300/300',
            // 'https://picsum.photos/id/1030/300/300',
            // ...
            '/ac-tools/240W-Palm-Sander.png',
            '/ac-tools/350W-Trimmer.png,',
            '/ac-tools/500W-Drill.png',
            '/ac-tools/600W-Jigsaw.jpg',
            '/ac-tools/710W-Impact-Drill.png',
            '/ac-tools/950W-Angle-Grinder.png',
            '/ac-tools/850W-Impact-Drill.png',
            '/ac-tools/800W-SDS-Rotary-Hammer.png',
            '/ac-tools/800W-Rotary-Hammer.png',
            '/ac-tools/750W-Angle-Grinder.png',
            '/ac-tools/1100W-Impact-Drill.png',
            '/ac-tools/1400W-185mm-Circular-Saw.png'
            ]}
            variant={1}
        />
        </div>
    </section>
  )
}

export default ImageTrail