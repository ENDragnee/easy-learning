'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function AcidBaseIndicators() {
  return (
    <div className="px-6 sm:px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">1.5 Acid–Base Indicators and Titrations</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">How do Acid-Base Indicators Change Color?</h2>
      <p>
        Acid-base indicators are weak organic acids (denoted here as <InlineMath>{'HIn'}</InlineMath>) or weak organic bases (<InlineMath>{'In⁻'}</InlineMath>) that indicate whether a solution is acidic, basic, or neutral. The color of the indicator depends on the pH of the solution to which it is added.
      </p>

      <p>
        When a small amount of indicator is added to a solution, the indicator does not affect the pH of the solution. Instead, the ionization equilibrium of the indicator is affected by the prevailing <InlineMath>{'[H₂O⁺]'}</InlineMath> in the solution.
      </p>

      <BlockMath>
        {`
        HIn (Acid colour) ⇌ H₂O + H₂O⁺ + In⁻ (Base colour)
        `}
      </BlockMath>

      <p>
        If the indicator is in a sufficiently acidic medium (increasing <InlineMath>{'[H₂O⁺]'}</InlineMath>), the equilibrium, according to Le Châtelier’s principle, shifts to the left, and the predominant color of the indicator is that of the non-ionized form (<InlineMath>{'HIn'}</InlineMath>). On the other hand, in a basic medium (decreasing <InlineMath>{'[H₂O⁺]'}</InlineMath>), the equilibrium shifts to the right, and the color of the solution will be blue due to the conjugate base (<InlineMath>{'In⁻'}</InlineMath>).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Acid–Base Indicators and Titrations</h2>
      <p>
        An acid–base indicator is usually prepared as a solution (in water, ethanol, or another solvent). In acid–base titrations, a few drops of the indicator solution are added to the solution being titrated. In other applications, porous paper is impregnated with an indicator solution and dried. When this paper is moistened with the solution being tested, it acquires a color determined by the pH of the solution. This paper is commonly called pH test paper.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Table 1.5: Some Common Indicators</h3>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-4 text-left">Indicator</th>
            <th className="py-2 px-4 text-left">Acid Color</th>
            <th className="py-2 px-4 text-left">Base Color</th>
            <th className="py-2 px-4 text-left">pH Range of Color</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2 px-4">Methyl violet</td>
            <td className="py-2 px-4">Yellow</td>
            <td className="py-2 px-4">Violet</td>
            <td className="py-2 px-4">0.0 – 1.6</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">Methyl orange</td>
            <td className="py-2 px-4">Red</td>
            <td className="py-2 px-4">Yellow</td>
            <td className="py-2 px-4">3.2 – 4.4</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">Bromcresol green</td>
            <td className="py-2 px-4">Yellow</td>
            <td className="py-2 px-4">Blue</td>
            <td className="py-2 px-4">3.8 – 5.4</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">Methyl red</td>
            <td className="py-2 px-4">Red</td>
            <td className="py-2 px-4">Yellow</td>
            <td className="py-2 px-4">4.8 – 6.0</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">Litmus</td>
            <td className="py-2 px-4">Red</td>
            <td className="py-2 px-4">Blue</td>
            <td className="py-2 px-4">5.0 – 8.0</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">Phenolphthalein</td>
            <td className="py-2 px-4">Colorless</td>
            <td className="py-2 px-4">Pink</td>
            <td className="py-2 px-4">8.2 – 10.0</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Equivalents and Normality</h2>
      <p>
        An equivalent is the amount of a substance that reacts with an arbitrary amount (typically one mole) of another substance in a given chemical reaction. In a more formal definition, an equivalent is the amount of a substance needed to react with or supply one mole of hydrogen ions (<InlineMath>{'H⁺'}</InlineMath>) in an acid–base reaction.
      </p>

      <p>
        For example, for sulfuric acid (<InlineMath>{'H₂SO₄'}</InlineMath>), an equivalent is 2. For bases, it is the number of hydroxide ions (<InlineMath>{'OH⁻'}</InlineMath>) provided for a reaction. For example, for barium hydroxide (<InlineMath>{'Ba(OH)₂'}</InlineMath>), the equivalent is 2.
      </p>

      <p>
        The normality of a solution refers to the number of equivalents of solute per liter of solution:
      </p>

      <BlockMath>{'Normality = \\frac{Number \\ of \\ equivalents \\ of \\ solute}{Liters \\ of \\ solution}'}</BlockMath>

      <p>
        The definition of chemical equivalent depends on the substance or type of chemical reaction under consideration. The concept of equivalents ensures that the correct proportions of substances are used, avoiding excess chemicals.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Titrations</h2>
      <p>
        An acid–base titration is a procedure for determining the amount of acid (or base) in a solution by determining the volume of base (or acid) of known concentration that will completely react with it. In a titration, one of the solutions to be neutralized (the acid) is placed in a flask or beaker, along with a few drops of an acid-base indicator.
      </p>

      <p>
        The other solution (the base) used in a titration is added from a burette and is called the titrant. The titrant is added to the acid (titrand or analyte) first rapidly and then drop by drop, up to the equivalence point. The equivalence point of the titration is when the amount of titrant added is just enough to completely neutralize the analyte solution.
      </p>

      <p>
        At the equivalence point in an acid-base titration, moles of base equal moles of acid, and the solution contains only salt and water. The equivalence point is determined by noting the color change of the acid-base indicator. The point at which the indicator changes color is called the end point of the indicator. The end point should match the equivalence point for an accurate titration.
      </p>

      <BlockMath>{'N_1V_1 = N_2V_2'}</BlockMath>
      <p>
        Where <InlineMath>{'N₁'}</InlineMath> and <InlineMath>{'V₁'}</InlineMath> refer to the normality and volume of the acid solution, respectively, and <InlineMath>{'N₂'}</InlineMath> and <InlineMath>{'V₂'}</InlineMath> refer to the normality and volume of the base solution, respectively.
      </p>
    </div>
  );
}