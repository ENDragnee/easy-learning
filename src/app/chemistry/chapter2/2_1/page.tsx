'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function OxidationReductionReactions() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">2.1 Oxidation-Reduction Reactions</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">When do we say a substance is oxidized?</h2>
      <div>
        The term oxidation was originally defined in terms of the adding of oxygen to a compound. However, nowadays it has a broader meaning that includes reactions involving not only oxygen. In this case, oxidation is a process in which an atom or element loses an electron and therefore increases its oxidation number.
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">When do we say a substance is reduced? Can oxidation occur without reduction and vice versa?</h2>
      <div>
        The term reduction was originally used to describe the production of a metal from an ore. It has been modified through time to include other reactions. Thus, reduction is a process in which an atom gains an electron and therefore decreases its oxidation number.
      </div>
      <div className="mt-4">
        Consider the following example:
        <BlockMath math="0 \rightarrow 1^+ \rightarrow 2^+ \rightarrow 0" />
        <BlockMath math="Mg(s) + 2 HCl(aq) \rightarrow MgCl2(aq) + H2(g)" />
      </div>
      <div>
        In the above reaction, Mg metal is oxidized, and H<sup>+</sup> ions are reduced; the Cl<sup>-</sup> ions are spectator ions. Note that oxidation and reduction reactions always occur in pairs. Since oxidation and reduction reactions cannot occur independently, they as a whole are called ‘Redox Reactions’.
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">What scientific law is used in balancing chemical equations?</h2>
      <div>
        Because atoms are neither created nor destroyed in an ordinary chemical reaction, chemical equations must have an equal number of atoms of each element on the reactant and product sides. In addition, the net electrical charges on the reactant side must be equal to the net electrical charges on the product side. The methods used to balance redox reactions are the change in oxidation number method and half-reaction methods.
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Balancing Redox Reactions Using Change in Oxidation-Number Method</h2>
      <div>
        <h3 className="text-xl font-semibold mt-4 mb-2">How do you balance redox reactions using the change in the oxidation-number method?</h3>
        This method is used to balance redox reactions that do not occur in aqueous solutions and reactions that do not involve ions. The steps used to balance chemical equations using the change in oxidation state method are:
        <ol className="list-decimal pl-5 mt-4">
          <li>Write an unbalanced chemical equation.</li>
          <li>Assign oxidation numbers to all elements in the reaction.</li>
          <li>From the changes in oxidation numbers, identify the oxidized and reduced species.</li>
          <li>Compute the number of electrons lost in the oxidation and gained in the reduction from the oxidation number changes.</li>
          <li>Multiply one or both of these numbers by appropriate factors to make the electrons lost equal the electrons gained, and use the factors as balancing coefficients.</li>
          <li>Complete the balancing by inspection, adding states of matter.</li>
        </ol>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Balancing Redox Reactions Using Half-Reaction Method</h2>
      <div>
        <h3 className="text-xl font-semibold mt-4 mb-2">Why do you balance chemical equations?</h3>
        In the half-reaction method, the overall reaction is divided into two half-reactions: one for oxidation and one for reduction. The equations for the two half-reactions are balanced separately, and then added together to give the overall balanced equation. The steps used to balance chemical equations using the half-reaction method are:
        <ol className="list-decimal pl-5 mt-4">
          <li>Separate the equation into oxidation half-reaction and reduction half-reaction.</li>
          <li>Balance the atoms and charges in each half-reaction.</li>
          <li>If necessary, multiply one or both half-reactions by an integer so that the number of electrons gained in reduction equals the number of electrons lost in oxidation.</li>
          <li>Add the balanced half-reactions, and include states of matter.</li>
          <li>Check that the atoms and charges are balanced.</li>
        </ol>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Oxidation-Reduction Reaction Example</h2>
      <div>
        Oxidation half-reaction: The atoms are already balanced. To balance the charge, we add an electron to the right-hand side of the arrow:
        <BlockMath math="Fe^{2+} \rightarrow Fe^{3+} + e^-" />
      </div>
      <div>
        Reduction half-reaction: Because the reaction takes place in an acidic medium, we add seven H<sub>2</sub>O molecules to the right-hand side of the arrow to balance the O atoms:
        <BlockMath math="Cr_2O_7^{2-} \rightarrow 2Cr^{3+} + 7H_2O" />
        To balance the H atoms, we add 14 H<sup>+</sup> ions on the left-hand side:
        <BlockMath math="14H^+ + Cr_2O_7^{2-} \rightarrow 2Cr^{3+} + 7H_2O" />
        There are now 12 positive charges on the left-hand side and only six positive charges on the right-hand side. Therefore, we add six electrons on the left:
        <BlockMath math="14H^+ + Cr_2O_7^{2-} + 6e^- \rightarrow 2Cr^{3+} + 7H_2O" />
      </div>
      <div>
        Step 3: Add the two half-reactions together and balance the final equation by inspection. The electrons on both sides must cancel. If the oxidation and reduction half-reactions contain different numbers of electrons, we need to multiply one or both half-reactions to equalize the number of electrons. Here we have only one electron for the oxidation half-reaction and six electrons for the reduction half-reaction, so we need to multiply the oxidation half-reaction by 6:
        <BlockMath math="6(Fe^{2+} \rightarrow Fe^{3+} + e^-)" />
        Now the final balanced equation is:
        <BlockMath math="6Fe^{2+} + 14H^+ + Cr_2O_7^{2-} \rightarrow 6Fe^{3+} + 2Cr^{3+} + 7H_2O" />
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Final Check</h2>
      <div>
        Finally, verify that the equation contains the same type and numbers of atoms and the same charges on both sides of the equation. For reactions in a basic medium, we add an equal number of OH<sup>-</sup> ions to both sides for each H<sup>+</sup> ion, and then combine H<sup>+</sup> and OH<sup>-</sup> ions to form water.
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Example: Oxidation of Iodide Ion</h2>
      <div>
        The half-reactions for the oxidation of iodide ion (I<sup>-</sup>) by permanganate ion (MnO<sub>4</sub><sup>-</sup>) in basic solution to yield molecular iodine (I<sub>2</sub>) and manganese (IV) oxide (MnO<sub>2</sub>) are:
        <BlockMath math="I^- \rightarrow I_2" />
        <BlockMath math="MnO_4^- \rightarrow MnO_2" />
      </div>
      <div>
        After balancing both half-reactions and combining them, the final balanced net ionic equation is:
        <BlockMath math="6I^- + 2MnO_4^- + 8H^+ \rightarrow 3I_2 + 2MnO_2 + 4H_2O" />
        Finally, for a basic medium, OH<sup>-</sup> ions are added to both sides to neutralize the H<sup>+</sup> ions and form water.
      </div>
    </div>
  );
}
