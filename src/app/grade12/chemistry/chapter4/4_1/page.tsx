'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function IntroductionToPolymers() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">Introduction to Polymers</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Polymer</h2>
      <p>
        The word polymer is derived from the Greek words 'poly' meaning many and 'meros' meaning part. It follows that this term applies to giant molecules built up of large numbers of interconnected repeating units. A polymer is a large chainlike molecule built up from many repeating smaller molecules.
      </p>
      <p>
        A polymer is generally comprised of more than 100 monomers; structures with lower numbers of monomers are known as oligomers. These polymers or oligomers may be linear, slightly branched, or highly interconnected. In the branched case, the structure develops into a large three-dimensional network. With few exceptions, the repeat unit in the polymer usually corresponds to the monomer from which the polymer was made. The size of a polymer molecule may be defined either by its mass or by the number of repeat units in the molecule. This latter indicator of size is called the degree of polymerization (DP). The relative molar mass of the polymer is thus the product of the relative molar mass of the repeat unit and the DP.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Polymerization Reactions</h2>
      <p>Examples of polymers are:</p>
      <ul className="list-disc ml-8">
        <li>Polyethylene</li>
        <li>Wood (cellulose)</li>
        <li>Protein</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Monomers</h2>
      <p>
        The small molecules used as the basic building blocks for polymers are known as monomers. Mono means one.
      </p>
      <p>Examples of monomers are:</p>
      <ul className="list-disc ml-8">
        <li>Glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) – a monomer for cellulose (wood)</li>
        <li>Ethylene – a monomer for polyethylene</li>
        <li>Amino acid (NH<sub>2</sub>CH(R)(COOH)) – a monomer for protein</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-4">Example 4.1 - Examples of Polymers</h3>
      <p>
        Some examples of polymers include polyethylene, cellulose (wood), and proteins. These are the key materials derived from monomers to create long-chain molecules essential in various industrial applications.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Example 4.2 - Monomers</h3>
      <p>
        The basic building blocks of polymers are monomers. For instance, glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) is the monomer for cellulose, ethylene is the monomer for polyethylene, and amino acids form proteins.
      </p>
    </div>
  );
}
