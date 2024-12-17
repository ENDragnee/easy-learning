'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function CommonIonEffect() {
  return (
    <div className="px-6 sm:px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">1.3 Common-Ion Effect and Buffer Solutions</h1>

      <p>
        The common-ion effect is the shift in an ionic equilibrium caused by the addition of a solute that provides an ion that
        participates in the equilibrium. It occurs when a given ion is added to an equilibrium mixture that already contains that
        ion.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Common-Ion Effect Example</h2>
      <p>
        Consider a solution of acetic acid, <InlineMath>{'CH_3COOH'}</InlineMath>, in which the following acid-ionization
        equilibrium exists:
      </p>
      <BlockMath>{'CH_3COOH (aq) + H_2O (l) ⇌ CH_3COO⁻ (aq) + H₃O⁺ (aq)'}</BlockMath>
      <p>
        If HCl (aq) is added to this solution, it dissociates to provide H₃O⁺ ions, which are present on the right side of the
        equation for acetic acid ionization. According to Le Châtelier’s principle, the equilibrium will shift to the left, suppressing
        the ionization of acetic acid. This is an example of the common-ion effect.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Common-Ion Effect and Buffer Solution</h2>
      <p>
        When sodium acetate and acetic acid are dissolved in the same solution, they dissociate and ionize to produce CH₃COO⁻ ions.
        This results in a shift in the equilibrium, which can be represented as:
      </p>
      <BlockMath>{'CH_3COOH (aq) + H_2O (l) ⇌ CH_3COO⁻ (aq) + H₃O⁺ (aq)'}</BlockMath>
      <p>
        The degree of ionization of acetic acid decreases by the addition of a strong acid, which is an example of the common-ion effect.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Buffer Solutions</h2>
      <p>
        A buffer solution resists changes in pH when small amounts of acid or base are added, or when the solution is diluted with a
        pure solvent. This property is crucial for maintaining an optimal pH in chemical and biological systems. A buffer typically
        consists of a weak acid and its conjugate base, or a weak base and its conjugate acid. The conjugate forms are referred to as
        "salts."
      </p>

      <p>
        To prepare a simple buffer solution, a comparable amount of acetic acid (<InlineMath>{'CH_3COOH'}</InlineMath>) and sodium
        acetate (<InlineMath>{'CH_3COONa'}</InlineMath>) are added to water. The equilibrium concentrations of both the acid and the
        conjugate base (from <InlineMath>{'CH_3COONa'}</InlineMath>) are assumed to be the same as the starting concentrations.
        This assumption is valid because acetic acid is a weak acid, and its dissociation is minimal.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">How a Buffer Resists pH Changes</h2>
      <p>
        If an acid is added to the buffer solution, the H⁺ ions will be consumed by the conjugate base (CH₃COO⁻) according to the
        equation:
      </p>
      <BlockMath>{'CH_3COO⁻ (aq) + H⁺ (aq) ⇌ CH_3COOH (aq)'}</BlockMath>
      <p>
        If a base is added, the OH⁻ ions will be neutralized by the acid in the buffer:
      </p>
      <BlockMath>{'CH_3COOH (aq) + OH⁻ (aq) ⇌ CH_3COO⁻ (aq) + H₂O (l)'}</BlockMath>

      <p>
        Therefore, a buffer resists pH changes by neutralizing H⁺ and OH⁻ ions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Buffer Importance in Biological Systems</h2>
      <p>
        Buffers are critical in maintaining the pH of chemical and biological systems. For example, the pH of blood is around 7.4,
        while the gastric juice in the stomach has a pH of about 1.5. These pH values are crucial for enzyme function and osmotic
        pressure regulation, and are maintained by buffers.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Henderson-Hasselbalch Equation</h2>
      <p>
        The pH of a buffer solution can be estimated using the Henderson-Hasselbalch equation, which is derived from the acid dissociation constant (Kₐ):
      </p>

      <BlockMath>{'HA ⇌ H⁺ + A⁻'}</BlockMath>
      <BlockMath>{'K_a = \\frac{[H⁺][A⁻]}{[HA]}'}</BlockMath>
      <p>
        The concentration ratio of the acid species to base species determines the <InlineMath>{'[H⁺]'}</InlineMath>. By rearranging the
        expression to isolate <InlineMath>{'[H⁺]'}</InlineMath>, we get:
      </p>
      <BlockMath>{'[H⁺] = K_a \\times \\frac{[HA]}{[A⁻]}'}</BlockMath>
      <p>
        Taking the negative logarithm of both sides, we obtain:
      </p>
      <BlockMath>{'pH = pK_a - \\log \\left( \\frac{[A⁻]}{[HA]} \\right)'}</BlockMath>
      <p>
        The general form of the Henderson-Hasselbalch equation for any conjugate acid-base pair is:
      </p>
      <BlockMath>{'pH = pK_a + \\log \\left( \\frac{[Conjugate base]}{[Weak acid]} \\right)'}</BlockMath>
      <p>
        Similarly, for a weak base dissociation:
      </p>
      <BlockMath>{'pOH = pK_b + \\log \\left( \\frac{[Conjugate acid]}{[Weak base]} \\right)'}</BlockMath>
    </div>
  );
}