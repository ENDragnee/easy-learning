'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function Rectification() {
  return (
    <div className="px-6 sm:px-6 sm:text-xs md:text-base py-6 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">5.3 Rectification</h1>

      <p>
        A P-N junction diode conducts electricity when it is forward biased and it does not conduct electricity when it is reverse biased. Hence, it is used to rectify an alternating current (AC) voltage supply. The process in which an AC voltage supply is converted into a unidirectional (DC) voltage is known as rectification and the electric circuit used for the conversion is called a rectifier. When the AC input is applied to a junction diode, it becomes forward biased during the positive half cycle and reverse biased during the negative half-cycle. Rectification is the main function of diodes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Half Wave Rectification</h2>
      <p>
        A half-wave rectifier only allows one half-cycle of an AC voltage waveform to pass by blocking the other half-cycle. Therefore, the current in the circuit flows in only one direction. A half-wave rectifier consists of a diode and a load resistor connected in series to the cathode end of the diode. The basic principle of a half-wave rectifier is shown in Figure 5.9.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Working Principle of Half Wave Rectifier</h3>
      <p>
        In a half-wave rectifier circuit during the positive half-cycle of the input, the diode is forward biased. Current flows through the load resistor and a voltage is developed across it. During the negative half-cycle, the diode is reverse biased and does not conduct. Therefore, in the negative half-cycle of the supply, no current flows in the load resistor as no voltage appears across it. Thus, the DC voltage across the load is sinusoidal for the first half-cycle only and a pure AC input signal is converted into a DC pulsating output signal.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Full Wave Rectification</h2>
      <p>
        The fact that the current flows only during half of each cycle in a half-wave rectifier is a disadvantage. To overcome this disadvantage, a full-wave rectifier can be used. Figure 5.10 shows a basic full-wave rectifier circuit, which uses four diodes arranged in a particular way.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Working Principle of Full Wave Bridge Rectifier</h3>
      <p>
        The four diodes, labeled D1 to D4, are arranged in such a way that only two diodes conduct current during each half-cycle. During the positive half-cycle of the supply, diodes D1 and D2 conduct in series. However, diodes D3 and D4 are reverse biased and so the current flows through the load resistor. During the negative half-cycle of the supply, diodes D3 and D4 conduct in series, but diodes D1 and D2 switch off as they are now reverse biased. The current flowing through the load is in the same direction as before.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Diodes and Capacitor</h2>
      <p>
        A capacitor is used in rectifier circuits to smooth the fluctuations of the output voltage. A capacitor stores charge and releases it later. The capacitor is connected across the terminals as shown in Figure 5.12. During the positive quarter-cycle of the output voltage, the capacitor is charged to the peak voltage. Then, as the rectifier voltage falls, the capacitor discharges and provides the required current to the load resistor from its stored charge. This charging and discharging process of the capacitor smooths out the waveform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Practical Uses of Diodes</h2>

      <h3 className="text-xl font-semibold mt-6 mb-4">Light Emitting Diodes (LED)</h3>
      <p>
        A light emitting diode (LED) is a P-N junction diode which can emit light when an electrical current flows through it. It uses a special kind of doping so that when an electron crosses the P-N junction, a photon is emitted, which creates light. The frequency (color) of the light emitted is determined by the type of semiconductor material used in the construction of the diode. LED allows the current to flow in the forward direction and blocks the current in the reverse direction. LEDs are very efficient producers of light.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Photodiode</h3>
      <p>
        A photodiode is a semiconductor device with a P-N junction that converts photons (or light) into electrical current. Photons absorbed in the depletion region (or close to it) will create electron-hole pairs, which will move to opposite ends of the diode due to the electric field. Electrons will move toward the positive potential on the cathode, and the holes will move toward the negative potential on the anode. These moving charge carriers form the current (photocurrent) in the photodiode.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Logic Gates</h2>
      <p>
        Diodes and resistors can be combined with other components to construct AND and OR logic gates. This is referred to as diode-resistor logic. These are discussed in detail in section 5.5.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Over-Voltage Protection</h2>
      <p>
        Excess voltage can damage our electronic devices. Sensitive electronic devices need to be protected from fluctuations in voltage; the diode is perfect for this. Diodes achieve this by shutting down the switch after sensing an over-voltage condition.
      </p>
    </div>
  );
}
