'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function VoltaicCells() {
  return (
    <div className="px-6 sm:px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">2.5 Voltaic Cells</h1>

      <p>
        After completing this subunit, you will be able to understand what makes a Galvanic cell different from an electrolytic cell.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Construction of Voltaic Cells (Zn-Cu Voltaic Cell)</h2>
      <p>
        When a piece of zinc metal is placed in a CuSO<sub>4</sub> solution, Zn is oxidized to Zn<sup>2+</sup> ions while Cu<sup>2+</sup> ions are reduced to metallic copper.
      </p>
      <BlockMath>{'Zn(s) + Cu^{2+}(aq) \\rightarrow Zn^{2+}(aq) + Cu(s)'}</BlockMath>
      <p>
        The electrons are transferred directly from the reducing agent (Zn) to the oxidizing agent (Cu<sup>2+</sup>) in solution. However, if we physically separate the oxidizing agent from the reducing agent, the transfer of electrons can take place via an external conducting medium (a metal wire). As the reaction progresses, it sets up a constant flow of electrons and hence generates electricity (producing electrical work such as driving an electric motor).
      </p>
      <p>
        The experimental apparatus for generating electricity through the use of a spontaneous reaction is called a galvanic cell or voltaic cell. The essential components of a galvanic cell include a zinc bar immersed in a ZnSO<sub>4</sub> solution and a copper bar immersed in a CuSO<sub>4</sub> solution.
      </p>
      <p>
        The cell operates on the principle that the oxidation of Zn to Zn<sup>2+</sup> and the reduction of Cu<sup>2+</sup> to Cu can be made to take place simultaneously in separate locations with the transfer of electrons between them occurring through an external wire.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">The Daniell Cell</h2>
      <p>
        This particular arrangement of electrodes (Zn and Cu) and solutions (ZnSO<sub>4</sub> and CuSO<sub>4</sub>) is called the Daniell cell. By definition, the anode in a galvanic cell is the electrode at which oxidation occurs, and the cathode is the electrode at which reduction occurs. The half-cell reactions for the Daniell cell are:
      </p>

      <ul className="list-disc ml-6">
        <li>Oxidation: <BlockMath>{'Zn(s) \\rightarrow Zn^{2+}(aq) + 2e^{-}'}</BlockMath></li>
        <li>Reduction: <BlockMath>{'Cu^{2+}(aq) + 2e^{-} \\rightarrow Cu(s)'}</BlockMath></li>
        <li>Overall Reaction: <BlockMath>{'Zn(s) + Cu^{2+}(aq) \\rightarrow Zn^{2+}(aq) + Cu(s)'}</BlockMath></li>
      </ul>

      <p>
        Zinc tends to lose electrons more readily than copper, so zinc atoms in the zinc electrode lose electrons to produce zinc ions. These electrons flow through the external circuit to the copper electrode, where they react with the copper ions in that half-cell to deposit copper metal atoms. The net result is that zinc metal reacts with copper ions to produce zinc ions and copper metal, and electric current flows through the external circuit.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Salt Bridge</h2>
      <p>
        To complete the electrical circuit, the solutions must be connected by a conducting medium, known as a salt bridge. This is typically an inverted U-tube containing an inert electrolyte solution (such as KCl, KNO<sub>3</sub>, or NH<sub>4</sub>NO<sub>3</sub>) whose ions will not react with other ions in solution or with the electrodes.
      </p>

      <p>
        During the course of the overall redox reaction, electrons flow externally from the anode (Zn electrode) through the wire to the cathode (Cu electrode). In the solution, cations (Zn<sup>2+</sup>, Cu<sup>2+</sup>, K<sup>+</sup>) move toward the cathode, while anions (SO<sub>4</sub><sup>2-</sup>, Cl<sup>-</sup>) move toward the anode.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Cell Diagram (Cell Notation)</h2>
      <p>
        The conventional notation for representing the components of a voltaic or galvanic cell is the cell diagram. For example, the cell notation for the Daniell cell shown is:
      </p>
      <BlockMath>{'Zn(s) | Zn^{2+}(aq) || Cu^{2+}(aq) | Cu(s)'}</BlockMath>
      <p>
        In this notation, the components of the anode compartment (oxidation half-cell) are written to the left of the components of the cathode compartment (reduction half-cell).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Measuring Standard Electrode Potentials</h2>
      <p>
        A cell potential is a measure of the driving force of the cell reaction. This reaction occurs as separate half-reactions: an oxidation half-reaction and a reduction half-reaction. The general forms of these half-reactions are:
      </p>
      <ul className="list-disc ml-6">
        <li>Oxidation (Anode): <BlockMath>{'Reducing Species \\rightarrow Oxidized Species + ne^{-}'}</BlockMath></li>
        <li>Reduction (Cathode): <BlockMath>{'Oxidized Species + ne^{-} \\rightarrow Reducing Species'}</BlockMath></li>
      </ul>
      <p>
        The standard reduction potential for the hydrogen electrode is defined as zero, and the hydrogen electrode serves as the reference for determining the relative potentials of other electrodes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Standard Hydrogen Electrode (SHE)</h2>
      <p>
        The standard hydrogen electrode consists of a platinum electrode with hydrogen gas at 1 atm bubbling through it, immersed in 1 M hydrochloric acid. The half-reaction for the hydrogen electrode is:
      </p>
      <BlockMath>{'2H^{+}(1M) + 2e^{-} \\rightarrow H_2(1 atm), E^0 = 0V'}</BlockMath>

      <h1 className="text-3xl font-bold mb-6">Voltaic Cells</h1>
      <p>
        We can use the SHE to measure the potentials of other kinds of electrodes. To find an unknown standard electrode potential (E<sub>0</sub>), we construct a voltaic cell consisting of this reference half-cell and the unknown half-cell. Since E<sub>0</sub> is zero, the overall cell potential is determined by the unknown electrode's potential.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Voltaic Cell Construction</h2>
      <p>
        Depending on the unknown half-cell, the reference half-cell can be the anode or the cathode:
      </p>
      <ul className="list-disc ml-6">
        <li>
          When H<sub>2</sub> is oxidized, the reference half-cell is the anode, and reduction occurs at the unknown half-cell:
          <BlockMath>
            {`E_\\text{cell} = E_\\text{cathode} - E_\\text{anode} = E_\\text{unknown} - E_\\text{reference} = E_\\text{unknown} - 0.00V = E_\\text{unknown}`}
          </BlockMath>
        </li>
        <li>
          When H<sub>2</sub> is reduced, the reference half-cell is the cathode, and oxidation occurs at the unknown half-cell:
          <BlockMath>
            {`E_\\text{cell} = E_\\text{reference} - E_\\text{unknown} = 0.00V - E_\\text{unknown} = -E_\\text{unknown}`}
          </BlockMath>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Example: Zn(s) | Zn<sup>2+</sup> (1M) || H<sup>+</sup> (1M) | H<sub>2</sub> (1 atm) | Pt(s)</h2>
      <p>
        Figure 2.11 shows a voltaic cell that has the Zn(s) | Zn<sup>2+</sup> half-reaction in one compartment and the H<sup>+</sup> | H<sub>2</sub> half-reaction in the other. The zinc electrode is negative relative to the hydrogen electrode, so we know that the zinc is being oxidized and is the anode, and the SHE is the cathode.
      </p>
      <BlockMath>
        {`Zn(s) | Zn^{2+}(1M) || H^{+}(1M) | H_2(1 atm) | Pt(s)`}
      </BlockMath>

      <p>
        The EMF of the cell at 25°C is 0.76 V, and we can write the half-cell reactions as follows:
      </p>
      <ul className="list-disc ml-6">
        <li>Anode (Oxidation): Zn(s) → Zn<sup>2+</sup> (1M) + 2e<sup>-</sup></li>
        <li>Cathode (Reduction): 2H<sup>+</sup> (1M) + 2e<sup>-</sup> → H<sub>2</sub> (1M)</li>
        <li>Overall Reaction: Zn(s) + 2H<sup>+</sup> (1M) → Zn<sup>2+</sup> (1M) + H<sub>2</sub> (1M)</li>
      </ul>

      <p>
        By convention, the standard EMF of the cell, E<sub>0</sub>, which is composed of contributions from both the anode and the cathode, is given by:
      </p>
      <BlockMath>
        {`E_\\text{cell} = E_\\text{cathode} - E_\\text{anode} = E_\\text{Zn2+/Zn} - E_\\text{H+/H2} = 0.76 V = 0.00 V - E_\\text{Zn2+/Zn}`}
      </BlockMath>
      <p>
        Therefore, the standard reduction potential of zinc, E<sub>0</sub><sub>Zn2+/Zn</sub>, is -0.76 V. Note that we write the reaction as a reduction, even though it occurs in reverse as oxidation.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Example: Cu<sup>2+</sup> | Cu Half-Cell</h2>
      <p>
        Similarly, the standard reduction potential of copper can be obtained using a cell with a copper electrode and a SHE. In this case, the copper electrode is the cathode, as its mass increases during the operation of the cell.
      </p>
      <BlockMath>
        {`Pt(s) | H_2(1 atm) | H^{+}(1M) || Cu^{2+}(1M) | Cu(s)`}
      </BlockMath>
      <ul className="list-disc ml-6">
        <li>Anode (Oxidation): H<sub>2</sub> (1 atm) → 2H<sup>+</sup> (1M) + 2e<sup>-</sup></li>
        <li>Cathode (Reduction): Cu<sup>2+</sup> (1M) + 2e<sup>-</sup> → Cu(s)</li>
        <li>Overall Reaction: H<sub>2</sub> (1 atm) + Cu<sup>2+</sup> (1M) → 2H<sup>+</sup> (1M) + Cu(s)</li>
      </ul>
      <p>
        The EMF of the cell is 0.34 V, so we can calculate the standard reduction potential of copper:
      </p>
      <BlockMath>
        {`E_\\text{cell} = E_\\text{Cu2+/Cu} - E_\\text{H+/H2} = 0.34 V`}
      </BlockMath>
      <p>
        Thus, the standard reduction potential of copper, E<sub>0</sub><sub>Cu2+/Cu</sub>, is 0.34 V.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">The Daniell Cell</h2>
      <p>
        For the Daniell cell, we can write the half-cell reactions:
      </p>
      <ul className="list-disc ml-6">
        <li>Anode (Oxidation): Zn(s) → Zn<sup>2+</sup> (1M) + 2e<sup>-</sup></li>
        <li>Cathode (Reduction): Cu<sup>2+</sup> (1M) + 2e<sup>-</sup> → Cu(s)</li>
        <li>Overall Reaction: Zn(s) + Cu<sup>2+</sup> (1M) → Zn<sup>2+</sup> (1M) + Cu(s)</li>
      </ul>
      <p>
        The EMF of the cell is:
      </p>
      <BlockMath>
        {`E_\\text{cell} = E_\\text{cathode} - E_\\text{anode} = 0.34 V - (-0.76 V) = 1.10 V`}
      </BlockMath>
      <p>
        This positive value indicates that the reaction is spontaneous.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Effect of Concentration on EMF</h2>
      <p>
        The EMF of a voltaic cell can change with the concentration of the electrolyte solutions. For example, we use the Nernst equation to account for this effect. The Nernst equation gives the relationship between the electrode potentials and the concentration of the electrolyte solutions.
      </p>
      <BlockMath>
        {`E = E_0 - 0.0592 log Q`}
      </BlockMath>
      <p>
        This equation shows that as the concentration of products increases and the concentration of reactants decreases, the cell potential will decrease, eventually reaching zero at equilibrium.
      </p>

      <h1 className="text-3xl font-bold mb-6">Voltaic Cells and Electrochemical Reactions</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Anode and Cathode Reactions</h2>
      <p>
        The anode reaction is given by:
      </p>
      <BlockMath>{`Cu(s) → Cu^{2+} (aq; 0.1 M) + 2e^{-}`}</BlockMath>

      <p>
        The cathode reaction is:
      </p>
      <BlockMath>{`Cu^{2+} (aq; 1.0 M) + 2e^{-} → Cu(s)`}</BlockMath>

      <h3 className="text-xl font-semibold mt-6 mb-4">Overall Cell Reaction</h3>
      <p>
        The overall cell reaction is the sum of the half-reactions:
      </p>
      <BlockMath>{`Cu^{2+} (aq; 1.0 M) → Cu^{2+} (aq; 0.1 M)`}</BlockMath>
      <p>
        The cell potential at the initial concentrations of 0.10 M (dilute) and 1.0 M (concentrated), with \(n = 2\), is obtained from the Nernst equation:
      </p>
      <BlockMath>{`E_{\text{cell}} = E^0 - 0.0592 \, V \, \log_{10} \left( \frac{[Cu^{2+}]_{\text{dilute}}}{[Cu^{2+}]_{\text{conc.}}} \right)`}</BlockMath>
      <p>
        Substituting the values:
      </p>
      <BlockMath>{`E_{\text{cell}} = 0 V - \left( 0.0592 \, V \times \log_{10} \left( \frac{0.10 M}{1.0 M} \right) \right)`}</BlockMath>
      <BlockMath>{`E_{\text{cell}} = 0 V - \left( 0.0592 \, V \times (-1.00) \right)`}</BlockMath>
      <BlockMath>{`E_{\text{cell}} = 0.0296 V`}</BlockMath>

      <h2 className="text-2xl font-semibold mt-6 mb-4">How a Concentration Cell Works</h2>
      <p>
        In the anode (dilute) half-cell, copper atoms give up electrons, forming Cu<sup>2+</sup> ions that increase the concentration of the solution. In the cathode (concentrated) half-cell, Cu<sup>2+</sup> ions gain electrons and form solid copper, making the solution less concentrated. The cell potential decreases until equilibrium is reached, when the concentration of Cu<sup>2+</sup> is the same in both half-cells.
      </p>
      
      <h3 className="text-xl font-semibold mt-6 mb-4">Nernst Equation for pH Determination</h3>
      <p>
        The pH of a solution can be accurately determined by measuring the cell potential using the Nernst equation. In a typical experiment, a hydrogen electrode is used with a test solution, and the cell is connected to a standard zinc electrode:
      </p>
      <BlockMath>{`Zn(s) | Zn^{2+} (1M) || H^+ (test solution) | H_2 (1 atm) | Pt`}</BlockMath>
      <p>
        The cell reaction is:
      </p>
      <BlockMath>{`Zn(s) + 2H^+ (test solution) → Zn^{2+} (1M) + H_2 (1 atm)`}</BlockMath>
      <p>
        The cell potential is related to the hydrogen-ion concentration of the test solution:
      </p>
      <BlockMath>{`E_{\text{cell}} = 0.76 V - 0.0592 \times \frac{1}{2} \log \left( \frac{1}{[H^+]^2} \right)`}</BlockMath>
      <p>
        Rearranging the equation for pH, we get:
      </p>
      <BlockMath>{`pH = 0.76 - \frac{E_{\text{cell}}}{0.0592}`}</BlockMath>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Comparison of Galvanic and Electrolytic Cells</h2>
      <table className="table-auto w-full text-sm mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Galvanic Cell / Voltaic Cell</th>
            <th className="px-4 py-2">Electrolytic Cell</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Energy released by spontaneous redox reaction is converted to electrical energy.</td>
            <td className="border px-4 py-2">Electrical energy is used to drive non-spontaneous redox reactions.</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Anode is negatively charged, cathode is positively charged.</td>
            <td className="border px-4 py-2">Anode is positively charged, cathode is negatively charged.</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Electrons originate from the species that undergoes oxidation.</td>
            <td className="border px-4 py-2">Electrons originate from an external source.</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Applications of Electrochemical Cells</h2>
      <p>
        Batteries, such as galvanic or voltaic cells, are essential for providing electrical power. Fuel cells, which operate continuously using fuel, are a variant of electrochemical cells.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Fuel Cells</h3>
      <p>
        A fuel cell differs from a battery because it operates with a continuous supply of reactants. For example, a hydrogen-oxygen fuel cell consists of hydrogen and oxygen gases, with a proton-exchange membrane (PEM) to transfer protons between electrodes.
      </p>

      <BlockMath>{`Anode: H_2(g) → 2H^+ (aq) + 2e^{-}`}</BlockMath>
      <BlockMath>{`Cathode: O_2(g) + 4H^+ (aq) + 4e^{-} → 2H_2O(g)`}</BlockMath>
      <BlockMath>{`Overall: 2H_2(g) + O_2(g) → 2H_2O(l)`}</BlockMath>

      <p>
        Fuel cells are used in various applications, including power for lighting, emergency generators, communications equipment, and vehicles.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Corrosion of Metals</h2>
      <p>
        Corrosion is the deterioration of metals through electrochemical processes. Iron corrosion, or rusting, occurs when iron is exposed to moisture and oxygen, forming iron oxide. The process involves both an anodic region (oxidation) and a cathodic region (reduction).
      </p>
      
      <BlockMath>{`Anodic region (oxidation): Fe(s) → Fe^{2+} (aq) + 2e^{-}`}</BlockMath>
      <BlockMath>{`Cathodic region (reduction): O_2(g) + 4H^+ (aq) + 4e^{-} → 2H_2O`}</BlockMath>
      <BlockMath>{`Overall reaction: 2Fe(s) + O_2(g) + 4H^+ (aq) → 2Fe^{2+} (aq) + 2H_2O(l)`}</BlockMath>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Protecting Against Corrosion</h2>
      <p>
        Various methods are used to protect metals from corrosion, such as coating them with paint or alloying them with more resistant metals like chromium in stainless steel.
      </p>
    </div>
  );
}
