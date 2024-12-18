'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function CurrentAndMagnetism() {
  return (
    <div className="px-6 sm:px-6 sm:text-xs md:text-base py-6 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">4.3 Current and Magnetism</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Magnetic Field Created by a Long Straight Current-Carrying Wire</h2>
      <p>
        To understand how a magnetic field is created by a current-carrying wire, consider a wire through which current flows when
        connected to a battery. As the current through the conductor increases, the magnetic field also increases proportionally.
        When you move further away from the wire, the magnetic field decreases with the distance.
      </p>

      <p>
        The magnitude of the magnetic field at a point a distance <InlineMath>{'r'}</InlineMath> from a long straight current-carrying
        wire is given by the formula:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'B = \\frac{\\mu_0 I}{2\\pi r}'}</BlockMath>
      </div>
      <p>
        where <InlineMath>{'\\mu_0'}</InlineMath> is the permeability of free space, with a value of <InlineMath>{'\\mu_0 = 4\\pi \\times 10^{-7} T.m/A'}</InlineMath>, 
        <InlineMath>{'r'}</InlineMath> is the distance from the wire where the magnetic field is calculated, and <InlineMath>{'I'}</InlineMath> is the current through the wire.
      </p>

      <p>
        The magnetic field has both magnitude and direction. The SI unit of magnetic field is Tesla (<InlineMath>{'T'}</InlineMath>), and the
        other common unit is Gauss (<InlineMath>{'G'}</InlineMath>). Gauss is related to Tesla through the conversion:
        <InlineMath>{'1 T = 10^4 G'}</InlineMath>.
      </p>

      <p>
        The magnetic field forms a circular pattern around the wire. A compass needle can be used to find the direction of the magnetic field.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Properties of Magnetic Field Produced by a Current-Carrying Wire</h3>
      <ul className="list-disc ml-6 mb-6">
        <li>The magnetic field lines form a circular pattern around the wire.</li>
        <li>The magnetic field strength increases when the current increases.</li>
        <li>The magnetic field strength is stronger near the wire and weaker further away.</li>
        <li>When the direction of the current is reversed, the direction of the magnetic field is reversed too.</li>
      </ul>

      <p>
        The direction of the magnetic field around a wire carrying a current is given by Fleming’s Right Hand Rule. This rule states that
        if you grip a straight wire with your right hand in such a way that your extended thumb points in the direction of the current,
        your fingers wrapped around the wire will point in the direction of the magnetic field lines.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Table 4.1: Approximate Magnitudes of Magnetic Fields</h2>
      <table className="table-auto w-full border-collapse mb-6">
        <thead>
          <tr>
            <th className="border-b px-4 py-2 text-left">Source of Field</th>
            <th className="border-b px-4 py-2 text-left">Field Magnitude (T)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b px-4 py-2">Strong superconducting laboratory magnet</td>
            <td className="border-b px-4 py-2">30</td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2">Strong conventional laboratory magnet</td>
            <td className="border-b px-4 py-2">2</td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2">Medical MRI unit</td>
            <td className="border-b px-4 py-2">1.5</td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2">Bar magnet</td>
            <td className="border-b px-4 py-2">10<sup>-2</sup></td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2">Surface of the sun</td>
            <td className="border-b px-4 py-2">10<sup>-2</sup></td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2">Surface of the Earth</td>
            <td className="border-b px-4 py-2">0.5 × 10<sup>-4</sup></td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2">Inside human brain (due to nerve impulses)</td>
            <td className="border-b px-4 py-2">10<sup>-13</sup></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

