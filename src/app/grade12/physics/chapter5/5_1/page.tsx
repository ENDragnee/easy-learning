'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function Semiconductors() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">5.Semiconductors</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5.1 Conductors, Insulators, and Semiconductors</h2>
      <p>
        Conductors are materials that allow electricity to flow through them. Metals are good conductors of electricity because they have free electrons that allow easy flow of electric current.
      </p>
      <p>
        Some materials do not allow electricity to pass through them. These materials are known as insulators. Insulators do not have free electrons, as every electron is tightly bound to the parent atom. Materials like plastic, wood, glass, and rubber are good electrical insulators. This is why they are used to cover materials that carry electricity.
      </p>
      <p>
        Semiconductors are materials that have conductivity between conductors and insulators. They can be pure elements, such as silicon (Si) or germanium (Ge), or compounds like gallium arsenide (GaAs) or cadmium selenide (CdSe). Semiconductors act as insulators at absolute zero temperature (0 Kelvin), but as their temperature increases, they behave as conductors. Conduction occurs because, at higher temperatures, the electrons in the semiconductor can break free from their covalent bonds and move freely to conduct electricity.
      </p>
      <p>
        In a process called <span className="font-bold">doping</span>, small amounts of impurities are added to pure semiconductors, which can significantly change their conductivity.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Lattice Structure of Semiconductors</h3>
      <p>
        Semiconductors like silicon (Si) are made up of individual atoms bonded together in a periodic structure. Each silicon atom has a nucleus made up of protons (positively charged particles) and neutrons (neutral particles), surrounded by electrons. The number of protons and electrons is equal, making the atom electrically neutral.
      </p>
      <p>
        The electrons in the outermost shell of each atom in a semiconductor participate in covalent bonds. A covalent bond consists of two atoms sharing a pair of electrons. Each silicon atom forms four covalent bonds with the four surrounding atoms. Thus, between each atom and its surrounding atoms, eight electrons are being shared.
      </p>
      <p>
        A <span className="font-bold">hole</span> in a semiconductor refers to the absence of an electron in an atom. Holes behave like positive charges, and they are equal in magnitude to electrons but opposite in sign. Holes and electrons are the two charge carriers responsible for current in semiconductor materials.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Types of Semiconductors</h2>
      <p>
        Semiconductors are divided into two main categories: intrinsic and extrinsic semiconductors.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Intrinsic Semiconductors</h3>
      <p>
        Intrinsic semiconductors are composed of a single type of material, such as silicon and germanium. These semiconductors have no impurities and are also known as undoped semiconductors.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Extrinsic Semiconductors</h3>
      <p>
        Extrinsic semiconductors are those that have had impurities added to their lattice structure. This process is called doping, and it significantly improves the material’s conductivity. The purpose of doping is to ensure that there are either too many electrons (excess) or too few electrons (deficiency).
      </p>
      <p>
        Depending on the type of impurity added, extrinsic semiconductors are classified as N-type or P-type.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">N-Type Semiconductors</h3>
      <p>
        N-type semiconductors are created by adding an element with more electrons in its outer shell than the semiconductor itself. Elements from Group V of the periodic table, like arsenic (As), antimony (Sb), and phosphorus (P), serve as impurities. These elements have five valence electrons, one more than silicon (Si), which has four. The extra electron from the impurity is free to move around, allowing conduction to occur.
      </p>
      <p>
        For example, when arsenic (As) is added to silicon (Si), the arsenic atom bonds with four silicon atoms, but its fifth valence electron remains free to move and conduct electricity. This creates a semiconductor with a large number of free electrons, making it an N-type semiconductor.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">P-Type Semiconductors</h3>
      <p>
        P-type semiconductors are created by adding a Group III element such as boron (B), aluminum (Al), gallium (Ga), or indium (In). These atoms have three valence electrons, so when they bond with silicon (which has four valence electrons), there is one missing electron, creating a hole. Holes act as positive charge carriers in P-type semiconductors.
      </p>
      <p>
        For example, when boron (B) is added to silicon (Si), boron bonds with the surrounding silicon atoms, but one bond is incomplete due to the missing electron. This hole behaves as a positive charge carrier.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Conclusion</h3>
      <p>
        Semiconductors play a crucial role in modern electronics. They can be modified to conduct electricity by controlling the number and type of charge carriers through doping. This ability to manipulate conductivity is what makes semiconductors essential for devices like transistors, diodes, and solar cells.
      </p>
    </div>
  );
}
