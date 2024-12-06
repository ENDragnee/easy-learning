'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function QuantitativeAspectsOfElectrolysis() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">Quantitative Aspects of Electrolysis</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Is it possible to calculate the amount of product formed at the electrodes?</h2>
      <div>
        The quantitative treatment of electrolysis was developed primarily by Michael Faraday in the year 1834. His early research on electrolysis led him to propose a relationship between the amount of current passed through a solution and the amount of substance decomposed or produced by the current.
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Faraday's First Law of Electrolysis</h2>
      <div>
        Faraday’s First Law of Electrolysis states that when an electrolyte, either in molten state or solution state, is electrolyzed, the mass of a substance (m) deposited or dissolved at the electrodes is directly proportional to the quantity of electricity (coulombs, Q) passed through the electrolyte.
      </div>
      <div className="mt-4">
        Mathematically, <InlineMath math="m \propto Q" /> or <InlineMath math="m = z Q" />, where <InlineMath math="z" /> is a proportionality constant called electrochemical equivalent.
      </div>
      <div className="mt-4">
        Since <InlineMath math="z = \frac{E}{F}" /> and <InlineMath math="Q = It" />, we can rewrite the equation as:
      </div>
      <div className="mt-4">
        <BlockMath math="m = \frac{EI t}{F}" />
      </div>
      <div>
        Where:
        <ul className="list-disc pl-5 mt-4">
          <li><strong>E</strong> = equivalent weight of substance</li>
          <li><strong>F</strong> = Faraday Constant (96,500 Coulombs)</li>
          <li><strong>m</strong> = mass of substance</li>
          <li><strong>I</strong> = current in amperes</li>
          <li><strong>t</strong> = time required</li>
        </ul>
      </div>
      <div className="mt-4">
        The equivalent weight of a substance is given by <InlineMath math="E = \frac{M}{n}" />, where:
        <ul className="list-disc pl-5 mt-4">
          <li><strong>M</strong> = molecular mass</li>
          <li><strong>n</strong> = valence</li>
        </ul>
        Thus, the equation becomes:
        <BlockMath math="m = \frac{MI t}{n F}" />
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Faraday’s Second Law of Electrolysis</h2>
      <div>
        Faraday’s second law of electrolysis states that the masses of different substances, liberated or dissolved by the same amount of electricity, are proportional to their equivalent masses. When the same quantity of electricity is passed through several electrolytic solutions connected in series, the masses of the different materials liberated or dissolved (m₁, m₂, m₃...) at the respective electrodes are in the ratio of their equivalent masses (E₁, E₂, E₃...).
      </div>
      <div className="mt-4">
        Mathematically, <InlineMath math="m \propto E" /> or <InlineMath math="m_1 \propto E_1, m_2 \propto E_2, m_3 \propto E_3" />.
      </div>
      <div className="mt-4">
        Replacing the proportionality by the proportionality constant, the equation becomes:
        <BlockMath math="\frac{m_1}{E_1} = \frac{m_2}{E_2} = \frac{m_3}{E_3}" />
      </div>
      <div>
        This law can be illustrated by passing the same quantity of electric current through three solutions containing H₂SO₄, CuSO₄, and AgNO₃, connected in series. In the first solution, hydrogen and oxygen are liberated; in the second solution, copper is deposited; and in the third, silver is deposited.
      </div>

      <div className="mt-4">
        The mass of hydrogen is to the mass of copper as the equivalent mass of hydrogen is to the equivalent mass of copper, and similarly for silver:
        <BlockMath math="\frac{m_{\text{hydrogen}}}{E_{\text{hydrogen}}} = \frac{m_{\text{copper}}}{E_{\text{copper}}} = \frac{m_{\text{silver}}}{E_{\text{silver}}}" />
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-2">Example 2.5</h3>
      <div>
        Example 2.5 demonstrates the application of Faraday's Second Law of Electrolysis.
      </div>
    </div>
  );
}
