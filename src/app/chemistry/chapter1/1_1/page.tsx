'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function AcidBaseConcepts() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">1.1 Acid-Base Concepts</h1>

      <p>
        The Swedish chemist Svante Arrhenius framed the first successful concept of acids and bases. He defined acids and bases in terms of the effect these substances have on water. According to Arrhenius, acids are substances that increase the concentration of <InlineMath>{'H^+'}</InlineMath> (proton ion) in aqueous solution, and bases increase the concentration of <InlineMath>{'OH^-'}</InlineMath> (hydroxide ion) in aqueous solution.
      </p>

      <p>
        In Arrhenius’s theory, a strong acid is a substance that completely ionizes in aqueous solution to give <InlineMath>{'H_2O^+'}</InlineMath> (aq) and an anion. An example is perchloric acid, represented as:
      </p>
      <BlockMath>
        {`HClO4 (aq) + H2O (l) → H2O^+ (aq) + ClO4^− (aq)`}
      </BlockMath>
      <p>
        Other examples of strong acids include H<sub>2</sub>SO<sub>4</sub>, HI, HBr, HCl, and HNO<sub>3</sub>. A strong base completely ionizes in aqueous solution to give OH<sup>−</sup> and a cation. Sodium hydroxide is an example of a strong base:
      </p>
      <BlockMath>
        {`NaOH (s) → Na^+ (aq) + OH^− (aq)`}
      </BlockMath>
      <p>
        The principal strong bases are the hydroxides of Group IA elements and Group IIA elements (except Be). Despite its early successes and continued usefulness, the Arrhenius theory does have limitations.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Brønsted-Lowry Theory</h2>
      <p>
        In 1923, J. N. Brønsted and T. M. Lowry independently proposed a new acid-base theory. They pointed out that acid–base reactions can be seen as proton-transfer reactions, where acids are proton donors and bases are proton acceptors.
      </p>

      <p>
        Using the Brønsted–Lowry theory, let's describe the ionization of ammonia in aqueous solution. In this reaction, water acts as an acid, donating a proton (H<sup>+</sup>) to NH<sub>3</sub> (a base). This results in the formation of NH<sub>4</sub><sup>+</sup> and OH<sup>−</sup> ions, the same ions produced by the ionization of NH<sub>4</sub>OH in the Arrhenius theory.
      </p>

      <p>
        The Brønsted-Lowry theory has the advantage that it is not limited to aqueous solutions. Acid-base reactions can also occur in non-aqueous solvents.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Conjugate Acid-Base Pairs</h2>
      <p>
        Brønsted-Lowry acids and bases always occur in pairs, known as conjugate acid-base pairs. A conjugate acid is formed when a base accepts a proton, and a conjugate base is formed when an acid donates a proton.
      </p>

      <p>
        For example, in the reaction:
      </p>
      <BlockMath>
        {`CH3COOH (aq) + H2O (l) ⇌ CH3COO^− (aq) + H3O^+ (aq)`}
      </BlockMath>
      <p>
        CH<sub>3</sub>COOH (acetic acid) acts as an acid, donating a proton to water, which acts as a base. The resulting conjugate acid is H<sub>3</sub>O<sup>+</sup> and the conjugate base is CH<sub>3</sub>COO<sup>−</sup>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Strength of Conjugate Acid-Base Pairs</h2>
      <p>
        The strength of a conjugate acid-base pair depends on the relative strength of the acid and base. A reaction proceeds in the direction where a stronger acid and a stronger base form a weaker acid and weaker base.
      </p>

      <p>
        For example, HCl is a strong acid, and its conjugate base Cl<sup>−</sup> is a weak base. Acetic acid (CH<sub>3</sub>COOH) is a weak acid, and its conjugate base CH<sub>3</sub>COO<sup>−</sup> is a stronger base.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Ions in Water</h2>
      <p>
        Water undergoes self-ionization, where two water molecules react to form H<sub>3</sub>O<sup>+</sup> and OH<sup>−</sup> ions:
      </p>
      <BlockMath>
        {`2H2O (l) ⇌ H3O^+ (aq) + OH^− (aq)`}
      </BlockMath>
      <p>
        This reaction is called the autoionization of water. Water is a weak electrolyte and poor conductor of electricity, but it still ionizes to a small extent.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Amphiprotic Species</h2>
      <p>
        Molecules or ions that can either donate or accept a proton, depending on the other reactant, are called amphiprotic species. For example, HCO<sup>−</sup> acts as an acid in the presence of OH<sup>−</sup> but as a base in the presence of HF. Water is the most important amphiprotic species.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Lewis Acid-Base Theory</h2>
      <p>
        G. N. Lewis generalized the acid-base concept to include reactions involving acidic and basic oxides, as well as proton-transfer reactions. According to this theory:
      </p>
      <ul className="list-disc ml-8">
        <li>A base is any species that donates an electron pair to form a bond.</li>
        <li>An acid is any species that accepts an electron pair to form a bond.</li>
      </ul>

      <p>
        For example, the reaction of boron trifluoride (BF<sub>3</sub>) with ammonia (NH<sub>3</sub>) is a Lewis acid-base reaction. In this case, BF<sub>3</sub> (Lewis acid) accepts a pair of electrons from NH<sub>3</sub> (Lewis base), forming a bond.
      </p>

      <p>
        The Lewis definition allows us to consider typical Brønsted-Lowry bases, such as OH<sup>−</sup>, NH<sub>3</sub>, and H<sub>2</sub>O, as Lewis bases, since they all have electron pairs available to donate to electron-deficient species.
      </p>
    </div>
  );
}