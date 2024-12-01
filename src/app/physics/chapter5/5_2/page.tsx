'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function DiodesAndTheirFunctions() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">5.2 Diodes and their Functions</h1>

      <p>
        A diode is a two-terminal electronic component that only conducts current in one direction and blocks current in the reverse direction. Diodes are made from a variety of materials including silicon, germanium, and gallium arsenide, etc.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">P-N Junction Diode</h2>
      <p>
        Semiconductor diodes are the most common type of diode. When an N-type semiconductor is joined with a P-type semiconductor, a P-N junction diode is formed. When a P-N junction is formed, some of the electrons in the N-region diffuse across the junction and combine with holes to form negative ions on the P-side. This leaves behind positive ions in the N-region.
      </p>
      <p>
        The combination of electrons and holes near the junction creates a narrow region called the depletion region. Within the depletion region, there are very few mobile electrons and holes.
      </p>
      <p>
        The electric field created by the ions in the depletion region prevents any further diffusion across the junction by establishing a barrier potential. The barrier potential is the potential difference required to move the electrons through the electric field. The barrier potential of a P-N junction depends on the type of semiconductor material: approximately 0.7V for silicon and 0.3V for germanium.
      </p>
      <p>
        Figure 5.5 shows the symbol of a diode, with the arrowhead pointing in the direction of conventional current flow, meaning the anode is connected to the P-side and the cathode to the N-side.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Biasing of P-N Junction Diode</h2>
      <p>
        Applying a suitable DC voltage to a diode is known as biasing. Biasing can be done in two ways: forward biasing and reverse biasing. Diodes in both forward and reverse bias are useful for computer chips, solar cells, and other electronic devices. Zero biasing occurs when no external voltage is applied to the P-N junction diode.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Forward Biased</h3>
      <p>
        When the positive terminal of the battery is connected to the P-type semiconductor and the negative terminal to the N-type semiconductor, the P-N junction diode is said to be forward biased. In this condition, the electrons move toward the junction due to being repelled by the negative terminal of the battery, while holes move toward the junction as they are repelled by the positive terminal.
      </p>
      <p>
        When a forward biasing voltage is applied, the depletion region becomes very thin, allowing current to flow easily.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Reverse Biased</h3>
      <p>
        When the negative terminal of the battery is connected to the P-type semiconductor and the positive terminal to the N-type semiconductor, the P-N junction diode is reverse biased. In reverse bias, the free electrons from the N-type semiconductor and the holes from the P-type semiconductor move away from the P-N junction, increasing the width of the depletion region and blocking current flow.
      </p>
      <p>
        This results in a high resistance path with nearly zero current flowing through the diode.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Current-Voltage (I-V) Characteristics of the Semiconductor Diode</h2>
      <p>
        From the I-V curve, we can see that current is very low if the forward voltage is lower than the cut-in voltage. The cut-in voltage is the voltage at which forward diode current begins to increase rapidly. Once the forward bias exceeds the cut-in voltage (0.3V for germanium diodes, 0.7V for silicon diodes), current increases dramatically, and the diode behaves almost like a short-circuit.
      </p>
      <p>
        Since the diode can conduct high current above the cut-in voltage, resistors are used in series to limit the current flow.
      </p>
      <p>
        In reverse bias, a small current (called the reverse bias or leakage current) flows due to minority charge carriers. If the reverse bias voltage becomes too high, a sharp change in the reverse current characteristics occurs, known as breakdown voltage. At breakdown voltage, the current increases rapidly.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">External Resources</h2>
      <p>
        You can watch this related video on YouTube: 
        <a href="https://www.youtube.com/watch?v=IvZv910pM7Am" className="text-blue-600">Understanding Diodes</a>.
      </p>
    </div>
  );
}
