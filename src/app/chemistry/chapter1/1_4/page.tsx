'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function HydrolysisOfSalts() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">1.4 Hydrolysis of Salts</h1>

      <p>
        Hydrolysis is a common form of a chemical reaction where water is used to break down the chemical bonds between substances. The term hydrolysis is derived from the Greek words "hydro" (meaning water) and "lysis" (meaning to break or unbind). In hydrolysis, water molecules get attached to two parts of a molecule, with one part receiving the <InlineMath>{'H^+'}</InlineMath> ion and the other receiving the <InlineMath>{'OH^-'}</InlineMath> group. The process of salt hydrolysis refers to the interaction of the anion and cation of a salt, or both, with water.
      </p>

      <p>
        Depending on the strengths of the parent acids and bases, the cation of a salt can act as an acid, base, or be neutral.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Neutralization Reaction Between a Strong Acid and a Strong Base</h2>
      <p>
        The reaction between a strong acid (such as HCl) and a strong base (such as NaOH) can be represented by the ionic equation:
      </p>

      <BlockMath>{'NaOH(aq) + HCl(aq) → NaCl(aq) + H_2O(l)'}</BlockMath>
      <p>
        In terms of the net ionic equation:
      </p>

      <BlockMath>{'H^+(aq) + OH^-(aq) → H_2O(l)'}</BlockMath>

      <p>
        The anions derived from strong acids are weak conjugate bases and do not undergo hydrolysis. Similarly, the cations derived from strong bases are weak conjugate acids and also do not undergo hydrolysis. In the reaction above, chloride ions (<InlineMath>{'Cl^-'}</InlineMath>) and sodium ions (<InlineMath>{'Na+'}</InlineMath>) do not hydrolyze, and the solution remains neutral (pH = 7).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Neutralization of a Weak Acid and a Strong Base</h2>
      <p>
        Consider the neutralization reaction between acetic acid (a weak acid) and sodium hydroxide (a strong base):
      </p>

      <BlockMath>{'CH_3COOH(aq) + NaOH(aq) → CH_3COONa(aq) + H_2O(aq)'}</BlockMath>

      <p>
        The acetate ion (<InlineMath>{'CH_3COO^-'}</InlineMath>) undergoes hydrolysis as follows:
      </p>

      <BlockMath>{'CH_3COO^-(aq) + H_2O(aq) → CH_3COOH(aq) + OH^-(aq)'}</BlockMath>

      <p>
        As a result, the pH at the equivalence point will be greater than 7 due to the excess <InlineMath>{'OH^-'}</InlineMath> ions formed. This situation is similar to the hydrolysis of sodium acetate (<InlineMath>{'CH_3COONa'}</InlineMath>), where the anion of the weak acid is a moderately strong base and can undergo hydrolysis, making the solution basic.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Hydrolysis of Salts from Weak Bases and Strong Acids</h2>
      <p>
        When a weak base is neutralized by a strong acid, the product is a salt containing the conjugate acid of the weak base. This conjugate acid is a strong acid. For example, ammonium chloride (<InlineMath>{'NH_4Cl'}</InlineMath>) is a salt formed by the reaction of ammonia (NH₃) with hydrochloric acid (HCl):
      </p>

      <BlockMath>{'NH_3(aq) + HCl(aq) → NH_4Cl(aq)'}</BlockMath>

      <p>
        In a solution of this salt, chloride ions (<InlineMath>{'Cl^-'}</InlineMath>) are very weak bases and will not accept protons to a measurable extent. However, the ammonium ion (<InlineMath>{'NH_4^+'}</InlineMath>), the conjugate acid of ammonia, reacts with water and increases the hydronium ion concentration:
      </p>

      <BlockMath>{'NH_4^+(aq) + H_2O(l) → H_3O^+(aq) + NH_3(aq)'}</BlockMath>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Hydrolysis of Salts from Weak Acids and Weak Bases</h2>
      <p>
        Solutions of salts formed by the reaction of a weak acid and a weak base involve both cationic and anionic hydrolysis. To predict whether the solution is acidic or basic, you need to compare the Ka (acid dissociation constant) of the weak acid and the Kb (base dissociation constant) of the weak base. 
      </p>

      <p>
        - If the Ka is greater than the Kb, the solution will be acidic.  
        - If the Ka is less than the Kb, the solution will be basic.  
        - If Ka and Kb are equal, the solution will be neutral.
      </p>

      <p>
        For example, solutions of ammonium formate (<InlineMath>{'NH_4CHO_2'}</InlineMath>) are slightly acidic because the Ka of ammonium ion (<InlineMath>{'NH_4^+'}</InlineMath>, 5.6 × 10⁻¹⁰) is somewhat larger than the Kb of formate ion (<InlineMath>{'CHO_2^-'}</InlineMath>, 5.9 × 10⁻¹¹).
      </p>
    </div>
  );
}