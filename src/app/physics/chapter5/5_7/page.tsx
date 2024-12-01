'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function ElectronicsApplications() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">Applications of Electronics</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Aerospace Industry</h2>
      <p>
        Electronics are widely used in aerospace, including in space shuttles, satellite power supplies, and aircraft power management. In commercial airlines, there are numerous instruments used to measure various physical factors such as temperature, pressure, and elevation.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Medical</h2>
      <p>
        The development of electronics, particularly computers, has revolutionized the medical field. Machines such as X-rays, MRIs, and other diagnostic tools combine physics and electronics to provide insights into human health. Recent innovations, such as robotic check-ups, needle-free diabetes care, and electronic aspirin, highlight the significant role of electronics in modern medical advancements.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Automobile</h2>
      <p>
        Electronics are crucial in modern vehicles, powering systems like car computers, telematics, and in-car entertainment. Early automotive electronics were used to control engine functions, known as engine control units (ECUs). Today, electronics are integral to systems in engines, transmissions, chassis, active safety, driver assistance, passenger comfort, and entertainment.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Agriculture</h2>
      <p>
        In agriculture, electronics are employed to monitor crops and soil conditions. For instance, e-Agri Sensors Centre produces devices to track crop health, moisture levels, and soil salinity. These technologies aid in enhancing crop yield and ensuring optimal growth conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Communication</h2>
      <p>
        Electronic devices and systems facilitate the acquisition, processing, storage, and transfer of information. These technologies are the backbone of modern communication networks, enabling everything from phone calls to internet browsing.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">6. Residential</h2>
      <p>
        Electronics make everyday life easier with appliances like air conditioners, refrigerators, cooking appliances, and personal computers. Mobile phones, a ubiquitous tool, are essential in modern life, connecting people across the globe.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">7. Military</h2>
      <p>
        Electronics play a key role in modern military technology, including unmanned aerial vehicles (UAVs) and drones, which are used for reconnaissance and combat. Military electronics also enhance the precision of weapons, with devices such as infrared detectors, night vision cameras, and magnetic anomaly detectors improving targeting and situational awareness.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Important Electronics Components</h3>
      <ul className="list-disc ml-6">
        <li>A junction diode is created by joining N-type and P-type materials together.</li>
        <li>The depletion region is where no mobile charge carriers exist in a P-N junction diode, acting as a barrier to electron and hole flow.</li>
        <li>Biasing is the process of applying a suitable DC voltage to a diode to control its behavior.</li>
        <li>The I-V characteristic curve represents the relationship between current and applied voltage across a diode's terminals.</li>
        <li>Rectification is the conversion of AC voltage to DC voltage.</li>
        <li>A half-wave rectifier only allows one half-cycle of an AC waveform to pass, blocking the other half-cycle.</li>
        <li>A full-wave rectifier transforms the complete cycle of an AC voltage supply into DC.</li>
        <li>Capacitors are used in rectifiers to smooth voltage fluctuations.</li>
        <li>Light-emitting diodes (LEDs) emit light when electricity passes through them.</li>
        <li>Bipolar junction transistors (BJTs) consist of three layers: emitter, base, and collector, and play a key role in amplification and switching.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-4">Conclusion</h3>
      <p>
        Electronics have a vast range of applications across various industries, from space exploration and healthcare to automotive and military use. As technology continues to evolve, the role of electronics in everyday life becomes more significant, providing solutions that improve efficiency, safety, and convenience in many sectors.
      </p>
    </div>
  );
}
