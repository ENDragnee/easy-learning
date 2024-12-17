'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function PolymerizationReactions() {
  return (
    <div className="px-6 sm:px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">4.2 Polymerization Reactions</h1>

      <p>
        The chemical change by which monomer units combine to form a polymer is known as a polymerization reaction. The essential feature of a monomer is to have two or more functional groups (polyfunctionality). This gives each monomer the capacity to form chemical bonds to at least two other monomer molecules. Bifunctional monomers can form only linear, chainlike polymers. Monomers with higher functionality yield cross-linked, network polymeric products.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Addition Polymerization</h2>
      <p>
        Addition polymerization is a reaction in which a chain reaction adds new monomer units to the growing polymer molecule one at a time. This type of polymerization is also known as chain-growth polymerization. This type of polymerization reaction occurs by those involving unsaturated monomers. For example, the addition polymerization of many ethylene molecules yields polyethylene and that of styrene molecules gives polystyrene.
      </p>

      <p className="text-center">
        <img src="/path/to/ethylene-image.png" alt="Ethylene Polymerization" className="mx-auto my-4" />
      </p>

      <p>
        Note that the molecular formula of a polymer is <InlineMath>{'n'}</InlineMath> times that of the monomer and upon polymerization, the double bond is converted to a single bond. When monomers with triple bonds are used, they are converted to double bonds.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Example 4.3</h2>
      <p>
        The addition polymer polyvinyl chloride (PVC) has the structure:
      </p>

      <p className="text-center">
        <img src="/path/to/pvc-image.png" alt="PVC Polymer" className="mx-auto my-4" />
      </p>

      <p>
        <strong>A.</strong> Draw the structure of the monomer from which PVC is made.
      </p>

      <p>
        <strong>B.</strong> How many monomer units are in a PVC polymer that has a molar mass of 1.33 × 10<sup>5</sup> g/mol?
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Steps of Addition Polymerization</h3>
      <p>  
        The addition polymerization process takes place in three distinct steps:
      </p>

      <ol className="list-decimal pl-6">
        <li>
          <strong>Chain initiation step:</strong> The polymerization process starts with a reactive initiator molecule. The initiator molecules can be a free radical, a cation, or an anion. These reactive centers react readily with other monomers without eliminating the active center.
        </li>
        <li>
          <strong>Chain propagation step:</strong> This is when a monomer adds to the growing chain, with the free radical, cation, or anion transferring to the chain end. High-molar-mass polymers are formed right from the beginning of the reaction.
        </li>
        <li>
          <strong>Chain termination step:</strong> This is when the polymerization process is stopped as the chain reactions do not continue indefinitely. The radical, cation, or anion is “neutralized,” stopping the chain propagation.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Example 4.4: Free Radical Polymerization</h2>
      <h3 className="text-xl font-semibold mt-4 mb-2">1. Chain Initiation</h3>
      <p>
        The free radical on the initiator fragment, shown as <InlineMath>{'Ra∙'}</InlineMath>, attacks the covalent π bond in the monomer, leaving a free radical on the monomer:
      </p>
      <p className="text-center">
        <img src="/path/to/chain-initiation.png" alt="Chain Initiation" className="mx-auto my-4" />
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">2. Chain Propagation</h3>
      <p>
        The monomer <InlineMath>{'CH₂=CH₂'}</InlineMath> adds to the growing chain:
      </p>
      <p className="text-center">
        <img src="/path/to/chain-propagation.png" alt="Chain Propagation" className="mx-auto my-4" />
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">3. Chain Termination</h3>
      <p>
        Termination is achieved when two chains link up. A free radical is destroyed by the combination reaction:
      </p>
      <p className="text-center">
        <img src="/path/to/chain-termination.png" alt="Chain Termination" className="mx-auto my-4" />
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Condensation Polymerization</h2>
      <p>
        Condensation polymerization involves the combination of monomer molecules, with the release of simple molecules like water or methanol as by-products. These products are referred to as condensates. This polymerization is also known as step-growth polymerization. To produce a condensation polymer, the involved monomers must have two or more functional groups. Typical reactions occur between dibasic acids and diamines to form polyamides, or between dibasic acids and diols to form polyesters.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Example of Nylon 66 and Dacron</h3>
      <p>
        Nylon 66 is a copolymer formed from the condensation of 1,6-diaminohexane (hexamethylene diamine) and 1,6-hexanedioic acid (adipic acid), with the release of water:
      </p>
      <p className="text-center">
        <img src="/path/to/nylon-66.png" alt="Nylon 66 Polymerization" className="mx-auto my-4" />
      </p>

      <p>
        Similarly, Dacron (Polyethylene terephthalate, PTE) is formed by the reaction between terephthalic acid and ethylene glycol:
      </p>
      <p className="text-center">
        <img src="/path/to/dacron.png" alt="Dacron Polymerization" className="mx-auto my-4" />
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Applications of Condensation Polymers</h2>
      <p>
        Dacron is strong, impact-resistant, colorless, and has high transparency. It is used in synthetic fibers, and when mixed with cotton, it forms durable, easily dyed, and crease-resistant fabrics. Dacron is also used for bottles and packaging materials.
      </p>

      <p>
        Nylon has a wide range of applications, including in parachutes, ropes, stockings, hair combs, and rugs. It is also used to reinforce automobile tires.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Polyester and Polyamide Examples</h3>
      <p>
        Consider the reaction between a dihydroxy alcohol and a dicarboxylic acid. The resulting ester formed still has a reactive group at both ends of the molecule.
      </p>
      <p className="text-center">
        <img src="/path/to/polyester-synthesis.png" alt="Polyester Synthesis" className="mx-auto my-4" />
      </p>
    </div>
  );
}
