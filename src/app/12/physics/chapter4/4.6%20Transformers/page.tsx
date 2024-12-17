'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function Transformers() {
  return (
    <div className="px-6 sm:px-6 sm:text-xs md:text-base py-6 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">4.6 Transformers</h1>

      <p>
        A transformer is an electrical device that transfers electrical energy from one circuit to another through the process of electromagnetic induction. It is most commonly used to increase (’step up’) or decrease (’step down’) voltage levels between circuits without altering the frequency. 
      </p>

      <p>
        A step-up transformer converts low primary voltage to high secondary voltage, thereby stepping up the input voltage. In contrast, a step-down transformer decreases the input voltage.
      </p>

      <p>
        A transformer consists of a pair of coils wound on the same core. The core is often shaped as a square loop with the primary and secondary coils wound on opposite sides. The construction allows the magnetic flux generated by a current changing in one coil to induce a current in the neighboring coil.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Operating Principle of Transformers</h2>
      <p>
        The operating principle of a transformer is based on electromagnetic induction. The alternating current (AC) supplied to the primary coil generates a changing magnetic field, which links the primary and secondary coils. This changing magnetic flux induces a current in the secondary coil.
      </p>

      <p>
        Transformers are widely used in power generation grids, the distribution sector, and various electrical devices, including household appliances and industrial equipment. The primary and secondary windings are electrically isolated from each other but are magnetically linked through the common core, allowing electrical power to be transferred between the coils.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Turns Ratio and Voltage Relation</h2>
      <p>
        The voltage difference between the primary and secondary windings is determined by the ratio of turns between the coils. The relationship between the voltage applied to the primary winding (<InlineMath>{'V_p'}</InlineMath>) and the voltage produced on the secondary winding (<InlineMath>{'V_s'}</InlineMath>) is given by:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'\\frac{N_p}{N_s} = \\frac{V_p}{V_s} = \\text{Turns Ratio}'}</BlockMath>
      </div>

      <p>
        Where <InlineMath>{'N_p'}</InlineMath> and <InlineMath>{'N_s'}</InlineMath> are the number of primary and secondary turns, and <InlineMath>{'V_p'}</InlineMath> and <InlineMath>{'V_s'}</InlineMath> are the primary and secondary voltages, respectively.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Efficiency of Transformers</h2>
      <p>
        Transformers can operate with high efficiency, often reaching up to 98%. The efficiency <InlineMath>{'\\eta'}</InlineMath> of a transformer is given by:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'\\eta = \\frac{\\text{output power}}{\\text{input power}} \\times 100%'}</BlockMath>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Working Principle of Transformers in Household Appliances</h2>
      <p>
        Alternating current (AC) is typically used to supply power to run household appliances and industrial equipment. Transformers in devices such as phone chargers, laptops, and microwaves are common examples of how transformers step up or step down voltage to suitable levels.
      </p>

      <p>
        For example, in a phone or laptop charger, the voltage from the wall outlet is stepped down to a safe level to charge the device battery. If the voltage were not reduced, it could damage the circuits of the phone or laptop. These electronics are designed to work with low voltages compared to the high voltage supplied by wall outlets.
      </p>

      <p>
        Additionally, a mobile phone charger typically contains a rectifier. After stepping down the voltage, the AC is converted to DC using the rectifier. You will learn about the working principle of rectifiers in Unit 5.
      </p>
    </div>
  );
}