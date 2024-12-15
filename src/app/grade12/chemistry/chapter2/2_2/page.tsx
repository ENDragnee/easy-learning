'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function ElectrolysisOfAqueousSolutions() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">2.2 Electrolysis of Aqueous Solutions</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Introduction</h2>
      <div>
        Before we study the electrolysis of aqueous solutions, let us consider some important concepts about conductivity. Electrical conductivity is the ability of a substance to transmit electricity. The substances, which allow the passage of electric current, are called conductors. Conductors of electricity are further classified into two types depending on their mode of transport of electrical charges inside them. These are electronic (metallic) conductors and electrolytic conductors.
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Metallic Conduction</h2>
      <div>
        Metals and alloys conduct electricity due to the movement (mobility) of delocalized outer shell electrons present inside them and are known as electronic conductors (or metallic conductors). In metallic conductors:
        <ul className="list-disc pl-5 mt-4">
          <li>There is only a flow of electrical energy but no transfer of matter.</li>
          <li>Electrical conduction through metals does not bring about any chemical transformations.</li>
          <li>Free and mobile electrons of the metallic atoms or their solid solutions, such as alloys, are responsible for electrical conductance.</li>
          <li>Conductivity of metals decreases with increase in temperature due to the enhanced thermal vibration of metal atoms disrupting the movement of electrons passing through them.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Electrolytic Conduction</h2>
      <div>
        Electrovalent (or ionic) compounds conduct electricity in their dissolved state (in solutions) or in their fused state only. These compounds consist of ions of opposite charges, and in aqueous solution, they exist as ions. In the presence of an applied electrical field, these ions migrate to their respective electrodes, exhibiting electrical conductivity. This mobility of ions is responsible for conduction of electricity through electrolytes and is referred to as electrolytic conduction. In the electrolytic conduction:
        <ul className="list-disc pl-5 mt-4">
          <li>Passage of current through electrolytes is accompanied by chemical changes.</li>
          <li>There is an actual transfer of matter since ions move towards respective electrodes.</li>
          <li>The conductivity of electrolytes increases with an increase in temperature due to increased ionic mobility.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Experiment 2.1: Electrical Conductivity Test</h2>
      <div>
        <h3 className="text-xl font-semibold mt-4 mb-2">Objective:</h3>
        <div>To classify substances as electrical conductors and insulators.</div>

        <h3 className="text-xl font-semibold mt-4 mb-2">Materials and Chemicals:</h3>
        <ul className="list-disc pl-5 mt-4">
          <li>Copper wire, light bulb, power supply (DC) or dry cells, scotch tape, distilled water, 1M NaCl solution, 1M H2SO4 solution, 1M CH3COOH solution, 1M sugar solution, magnesium ribbon, and an iron nail.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Procedure:</h3>
        <ol className="list-decimal pl-5 mt-4">
          <li>Polish the strip of copper and connect the two ends of the copper wire as shown in Figure 2.2a. Do the same for the iron nail and magnesium. Record your observations.</li>
          <li>Rinse the 100 mL beaker thoroughly with distilled water and fill it to the 50 mL mark. Insert the two ends of the copper wire as shown in Figure 2.2b. Record your observation.</li>
        </ol>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Electrochemical Cells</h2>
      <div>
        An electrochemical cell is a device that can generate electrical energy from the chemical reactions occurring in it, or use the electrical energy supplied to it to facilitate chemical reactions in it. These devices are capable of converting chemical energy into electrical energy, or vice versa. A common example of an electrochemical cell is a standard 1.5-volt cell, which is used to power many electrical appliances such as TV remotes and clocks. There are two types of electrochemical cells:
        <ul className="list-disc pl-5 mt-4">
          <li>Galvanic cells (also known as Voltaic cells)</li>
          <li>Electrolytic cells</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">What Does Preferential Discharge Mean?</h2>
      <div>
        During electrolysis, the cations being positively charged get attracted towards the negatively charged electrode (cathode), and anions being negatively charged get attracted towards the positively charged electrode (anode). If more than one cation or anion reaches an electrode, only one of them preferentially gets discharged at that electrode. This is called the preferential discharge of ions during electrolysis. 
      </div>

      <h3 className="text-xl font-semibold mt-4 mb-2">Factors Affecting Preferential Discharge:</h3>
      <ul className="list-disc pl-5 mt-4">
        <li><strong>Position of Ions in the Electrochemical Series:</strong> The ions that are lower in the electrochemical series are discharged in preference to those above them.</li>
        <li><strong>Concentration of Ions:</strong> Higher the concentration of ions in the solution, the greater the probability that those ions will be discharged.</li>
        <li><strong>The Nature of the Electrode:</strong> If the electrode is inert (e.g., graphite, platinum), it does not play a role in deciding which ions get discharged. However, if the electrode is active (e.g., copper, silver), it may participate in the reactions and influence the discharge of ions.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Reactivity Series of Metals</h2>
      <div>
        <h3 className="text-xl font-semibold mt-4 mb-2">Activity of Metals:</h3>
        <div>
          The reactivity series is a list of metals in decreasing order of their reactivity. This series helps to determine the products of single displacement reactions. For example:
          <BlockMath math="Zn(s) + Cu^{2+}(aq) \rightarrow Zn^{2+}(aq) + Cu(s)" />
        </div>

        <div className="mt-4">
          In the reaction above, zinc displaces copper from its ionic form in solution because zinc is more reactive than copper.
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Electrolysis of Aqueous Solutions</h2>
      <div>
        Electrolysis involves the decomposition of ionic compounds into their elements by passing a direct current through the compound in an aqueous solution. The ions move towards the electrodes, where they are reduced or oxidized, depending on the charge of the electrode. Cations move towards the cathode, while anions move towards the anode.
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Electrolysis of Dilute Sulfuric Acid Solution</h2>
      <div>
        When a dilute solution of sulfuric acid is electrolyzed, the ions present are H<sup>+</sup>, OH<sup>-</sup>, and SO<sub>4</sub><sup>2-</sup>. The reduction at the cathode is represented as:
        <BlockMath math="4H^{+}(aq) + 4e^{-} \rightarrow 2H_2(g)" />
      </div>

      <h3 className="text-xl font-semibold mt-4 mb-2">Anode (Oxidation):</h3>
      <BlockMath math="4OH^{-}(aq) \rightarrow 2H_2O(l) + O_2(g) + 4e^{-}" />

      <div className="mt-4">
        The overall reaction at the anode is the oxidation of hydroxide ions to oxygen gas.
      </div>
    </div>
  );
}
