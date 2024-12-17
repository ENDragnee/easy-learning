'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function IonicEquilibria() {
  return (
    <div className="px-6 sm:px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">1.2 Ionic Equilibria of Weak Acids and Bases</h1>

      <p>
        In aqueous solutions, water can act as both an acid and a base, as it can self-ionize to produce hydronium (<InlineMath>{'H_3O^+'}</InlineMath>) and hydroxide (<InlineMath>{'OH^-'}</InlineMath>) ions. This process is known as autoionization or self-ionization.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Self-Ionization of Water</h2>
      <p>
        The self-ionization of water is represented as:
      </p>
      <BlockMath>
        {`H_2O(l) + H_2O(l) ⇌ H_3O^+(aq) + OH^-(aq)`}
      </BlockMath>
      <p>
        This process is governed by an equilibrium constant, <InlineMath>{'K_c'}</InlineMath>, which can be written as:
      </p>
      <BlockMath>{'K_c = \\frac{[H_3O^+][OH^-]}{[H_2O]^2}'}</BlockMath>

      <p>
        However, since the concentration of water is large and nearly constant (around 56 M at 25°C), we multiply <InlineMath>{'K_c'}</InlineMath> by <InlineMath>{'[H_2O]^2'}</InlineMath> to obtain a new constant, known as the ion-product constant for water, <InlineMath>{'K_w'}</InlineMath>:
      </p>
      <BlockMath>
        {`K_w = [H_3O^+][OH^-]`}
      </BlockMath>

      <p>
        The value of <InlineMath>{'K_w'}</InlineMath> at 25°C is <InlineMath>{'1.0 x 10^{-14}'}</InlineMath>. This value changes with temperature, and at body temperature (37°C), <InlineMath>{'K_w'}</InlineMath> equals <InlineMath>{'2.5 x 10^{-14}'}</InlineMath>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Calculating Ion Concentrations in Pure Water</h2>
      <p>
        In pure water, the concentrations of <InlineMath>{'H_3O^+'}</InlineMath> and <InlineMath>{'OH^-'}</InlineMath> are equal. Let <InlineMath>{'x'}</InlineMath> represent the concentration of each ion. From the equation for <InlineMath>{'K_w'}</InlineMath>:
      </p>
      <BlockMath>{'K_w = [H_3O^+][OH^-] = (x)(x) = x^2'}</BlockMath>
      <p>
        Substituting the value of <InlineMath>{'K_w'}</InlineMath> at 25°C:
      </p>
      <BlockMath>{'1.0 x 10^{-14} = x^2'}</BlockMath>
      <p>
        Solving for <InlineMath>{'x'}</InlineMath> gives:
      </p>
      <BlockMath>{'x = 1.0 x 10^{-7}'}</BlockMath>

      <p>
        Thus, in pure water, the concentrations of both <InlineMath>{'H_3O^+'}</InlineMath> and <InlineMath>{'OH^-'}</InlineMath> are <InlineMath>{'1.0 x 10^{-7} M'}</InlineMath>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Acidic and Basic Solutions</h2>
      <p>
        If an acid or a base is added to water, the concentrations of <InlineMath>{'H_3O^+'}</InlineMath> and <InlineMath>{'OH^-'}</InlineMath> will no longer be equal. The relationship between these concentrations will still satisfy the equation:
      </p>
      <BlockMath>{'K_w = [H_3O^+][OH^-]'}</BlockMath>

      <p>
        We can define the following types of solutions:
      </p>
      <ul className="list-disc ml-6">
        <li>A neutral solution, where <InlineMath>{'[H_3O^+] = [OH^-]'}</InlineMath></li>
        <li>An acidic solution, where <InlineMath>{'[H_3O^+] > [OH^-]'}</InlineMath></li>
        <li>A basic solution, where <InlineMath>{'[OH^-] > [H_3O^+]'} </InlineMath></li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">The pH Scale</h2>
      <p>
        The pH scale is commonly used to measure the acidity of a solution. It is defined as the negative logarithm of the hydronium-ion concentration:
      </p>
      <BlockMath>{'pH = -\\log[H_3O^+]'}</BlockMath>

      <p>
        For example, for a solution with a hydronium ion concentration of <InlineMath>{'2.5 x 10^{-3} M'}</InlineMath>, the pH would be:
      </p>
      <BlockMath>{'pH = -\\log(2.5 x 10^{-3}) = 2.60'}</BlockMath>

      <p>
        To calculate the hydronium ion concentration from a given pH, use the inverse calculation:
      </p>
      <BlockMath>{'[H_3O^+] = 10^{-pH}'}</BlockMath>

      <p>
        For example, for a solution with pH = 4.5:
      </p>
      <BlockMath>{'[H_3O^+] = 10^{-4.5} = 3.2 x 10^{-5} M'}</BlockMath>

      <h2 className="text-2xl font-semibold mt-6 mb-4">pOH and Its Relationship to pH</h2>
      <p>
        The pOH scale is analogous to the pH scale and is defined as the negative logarithm of the hydroxide ion concentration:
      </p>
      <BlockMath>{'pOH = -\\log[OH^-]'}</BlockMath>

      <p>
        If the pOH value is given, you can calculate the hydroxide ion concentration:
      </p>
      <BlockMath>{'[OH^-] = 10^{-pOH}'}</BlockMath>

      <p>
        The relationship between pH and pOH is derived from the ion product constant for water:
      </p>
      <BlockMath>{'K_w = [H_3O^+][OH^-] = 1.0 x 10^{-14}'}</BlockMath>
      <p>
        Taking the negative logarithm of both sides:
      </p>
      <BlockMath>{'-\\log[H_3O^+] - \\log[OH^-] = -\\log(1.0 x 10^{-14})'}</BlockMath>
      <p>
        This simplifies to:
      </p>
      <BlockMath>{'pH + pOH = 14'}</BlockMath>

      <p>
        Thus, the sum of pH and pOH must always equal 14 at 25°C. This provides another way to express the relationship between <InlineMath>{'[H_3O^+]'}</InlineMath> and <InlineMath>{'[OH^-]'}</InlineMath>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Example</h2>
      <p>
        For a solution with pH = 6.6, the hydroxide ion concentration can be calculated as:
      </p>
      <BlockMath>{'[OH^-] = 10^{-6.6} = 2.51 x 10^{-7} M'}</BlockMath>

      <h1 className="text-3xl font-bold mb-6">Acid and Base Strength</h1>

      <p>
        The strength of acids and bases depends on a number of factors. Some of the ways to compare the strengths of acids and bases are the concentration of hydrogen and hydroxide ions, pH and pOH, percent dissociation, and ionization in water.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Concentration of Hydrogen and Hydroxide Ions</h2>
      <p>
        The strength of acids and bases is influenced by the concentration of hydrogen (<InlineMath>{'H^+'}</InlineMath>) and hydroxide (<InlineMath>{'OH^-'}</InlineMath>) ions. A strong acid dissociates completely in water, releasing protons, while weak acids only partially dissociate. Strong acids such as hydrochloric acid (<InlineMath>{'HCl'}</InlineMath>) and sulfuric acid (<InlineMath>{'H_2SO_4'}</InlineMath>) ionize nearly 100% in solution. A weak acid, like acetic acid, will dissociate only partially.
      </p>
      <p>
        Base strength refers to the ability of a base to accept protons. A strong base accepts more protons readily, leading to higher concentrations of hydroxide ions in solution compared to weaker bases.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">pH and pOH</h2>
      <p>
        The pH of a solution can determine if it's acidic, neutral, or basic. For example, a pH of 2 indicates an acidic solution. The concentration of hydroxide ions in a solution is related to its pOH. The strength of a base increases with a decreasing pOH value.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Percent Ionization</h2>
      <p>
        Percent ionization is the proportion of acid or base molecules that dissociate in solution, expressed as a percentage. For an acid, it is given by:
      </p>
      <BlockMath>{'\\text{Percent Ionization} = \\frac{\\text{Ionized Acid Concentration at Equilibrium}}{\\text{Initial Acid Concentration}} \\times 100%'}</BlockMath>
      <p>
        The percent ionization increases with acid or base strength. Strong acids and bases ionize nearly completely, while weak acids and bases ionize partially, resulting in a lower percent ionization.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Acid Ionization Constant, Ka</h2>
      <p>
        The acid ionization constant, <InlineMath>{'K_a'}</InlineMath>, quantifies the strength of an acid. It is the equilibrium constant for the dissociation of an acid into its conjugate base and hydrogen ion. For a weak acid, the dissociation reaction can be written as:
      </p>
      <BlockMath>{'HA(aq) + H_2O(l) \\rightleftharpoons H_3O^+(aq) + A^-(aq)'}</BlockMath>
      <p>
        The ionization constant expression is:
      </p>
      <BlockMath>{'K_a = \\frac{[H_3O^+][A^-]}{[HA]}'}</BlockMath>
      <p>
        The larger the value of <InlineMath>{'K_a'}</InlineMath>, the stronger the acid. Weak acids have smaller <InlineMath>{'K_a'}</InlineMath> values, while strong acids have large <InlineMath>{'K_a'}</InlineMath> values.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Calculating the pH of Weak Acids</h2>
      <p>
        To calculate the pH of a weak acid, we use its <InlineMath>{'K_a'}</InlineMath> value and the initial concentration of the acid. By setting up an equilibrium expression and solving for the concentration of <InlineMath>{'H^+'}</InlineMath>, we can find the pH.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Base Dissociation Constant, Kb</h2>
      <p>
        Similar to acids, weak bases also have a dissociation constant called <InlineMath>{'K_b'}</InlineMath>. For example, ammonia (<InlineMath>{'NH_3'}</InlineMath>) ionizes in water as:
      </p>
      <BlockMath>{'NH_3(aq) + H_2O(l) \\rightleftharpoons NH_4^+(aq) + OH^-(aq)'}</BlockMath>
      <p>
        The base dissociation constant expression is:
      </p>
      <BlockMath>{'K_b = \\frac{[NH_4^+][OH^-]}{[NH_3]}'}</BlockMath>
      <p>
        Base dissociation constants for weak bases are typically smaller, with values for strong bases being much larger.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Table: Kb Values of Some Common Weak Bases</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Base</th>
            <th className="border border-gray-300 px-4 py-2">Kb</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Ammonia (NH3)</td>
            <td className="border border-gray-300 px-4 py-2">1.8 × 10⁻⁵</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Aniline (C6H5NH2)</td>
            <td className="border border-gray-300 px-4 py-2">4.0 × 10⁻¹⁰</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Ethylamine (C2H5NH2)</td>
            <td className="border border-gray-300 px-4 py-2">4.7 × 10⁻⁴</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Hydrazine (C2H4NH2)</td>
            <td className="border border-gray-300 px-4 py-2">1.7 × 10⁻⁶</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Hydroxylamine (NH2OH)</td>
            <td className="border border-gray-300 px-4 py-2">1.1 × 10⁻⁶</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Methylamine (CH3NH2)</td>
            <td className="border border-gray-300 px-4 py-2">4.4 × 10⁻⁴</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Pyridine (C5H5N)</td>
            <td className="border border-gray-300 px-4 py-2">1.7 × 10⁻⁹</td>
          </tr>
        </tbody>
      </table>

      <p>
        In solving problems involving weak bases, you should follow similar guidelines as for weak acids, except that you calculate <InlineMath>{'[OH^-]'}</InlineMath> first instead of <InlineMath>{'[H^+]'}</InlineMath>.
      </p>
    </div>
  );
}