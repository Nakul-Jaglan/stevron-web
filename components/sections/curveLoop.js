import CurvedLoop from '../../ui/curvedLoop.js';

function CurveLoop() {
  return (
    <section>
        <CurvedLoop 
        marqueeText="Rotary Hammer ✦ Impact Drill ✦ Palm Sander ✦ Trimmer ✦ Jigsaw ✦ Angle Grinder ✦ Polisher ✦ Marble Cutter ✦ Router ✦"
        speed={5}
        curveAmount={400}
        direction="left"
        interactive={false}
        className="custom-text-style"
        />
    </section>
  )
}

export default CurveLoop