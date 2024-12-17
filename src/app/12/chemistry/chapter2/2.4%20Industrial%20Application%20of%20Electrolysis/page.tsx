'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function IndustrialApplicationOfElectrolysis() {
  return (
    <div className="px-6 sm:px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">2.4 Industrial Application of Electrolysis</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Extraction of Metals</h2>
      <p>
        Metals and their alloys are extensively used in our day-to-day life. They are used for making machines, railways, motor vehicles, bridges, buildings, agricultural tools, aircraft, ships, etc. Therefore, production of a variety of metals in large quantities is necessary for the economic growth of a country. Only a few metals, such as gold, silver, mercury, etc., occur in the Free State in nature. Most of the other metals, however, occur in the earth’s crust in the combined form, i.e., as compounds with different anions such as oxides, sulphides, halides, etc.
      </p>
      <p>
        A naturally occurring material in which a metal or its compound occurs is called a mineral. A mineral from which a metal can be extracted economically is called an ore. An ore is that mineral in which a metal is present in appreciable quantities and from which the metal can be extracted economically.
      </p>
      <p>
        If a metal is less reactive than carbon, it can be extracted by reacting it with carbon in a displacement reaction. In a displacement reaction, the more reactive metal is able to take the place of a less reactive metal in a compound, since the more reactive metal forms stronger bonds. Carbon replaces the less reactive metal in a redox reaction, where the carbon is oxidized and the metal is reduced. This method is called reduction using carbon. But metals more reactive than carbon are extracted using electrolysis. Electrolysis is a process that uses electricity to separate the elements in a compound. Aluminum, for example, is a reactive and the most abundant metal on Earth, but it is most commonly found as its ore, aluminum oxide (Al<sub>2</sub>O<sub>3</sub>).
      </p>
      <p>
        We can extract aluminum from its ore using the industrial setup of the electrolytic cell. Electrolysis is used to remove the oxygen and extract aluminum, which means that reduction takes place. The electrolyte is molten aluminum oxide, and the electrodes are graphite. The aluminum (Al<sup>3+</sup>) cations are attracted to the cathode, where they are reduced to form molten aluminum.
      </p>
      <BlockMath>{`4 Al^{3+} + 12e^{-} → 4 Al`}</BlockMath>
      <p>
        The aluminum is deposited on the bottom of the cell and drains away. The oxygen (O<sub>2</sub><sup>-</sup>) anions are attracted to the anode, where they are oxidized to release oxygen gas.
      </p>
      <BlockMath>{`6O^{2-} → 3O_2 + 12e^{-}`}</BlockMath>
      <BlockMath>{`4 Al^{3+} + 6O^{2-} → 4 Al + 3O_2`}</BlockMath>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Electrolytic Refining of Metals</h2>
      <p>
        Many metals, such as copper, zinc, tin, nickel, silver, gold, etc., are refined by electrolysis. In this process, the impure metal is made the anode and a thin strip of pure metal is made the cathode. The solution of the metal salt is used as an electrolyte. When current passes through the electrolyte, the pure metal from the anode dissolves into the electrolyte. An equivalent amount of pure metal from the electrolyte is deposited on the cathode. The insoluble impurities settle down at the bottom of the anode and are known as anode mud, whereas the soluble impurities go into the solution.
      </p>
      <p>
        For example, in the electrolytic refining of copper, the electrolyte is a solution of acidified copper sulfate (CuSO<sub>4</sub>). The anode is impure copper, whereas the cathode is a strip of pure copper. On passing electric current, pure copper is deposited on the cathode.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Electroplating of Metals</h2>
      <p>
        Electroplating is the process of plating one metal onto another by electrolysis, most commonly for decorative purposes or to prevent corrosion of a metal. There are also specific types of electroplating such as copper plating, silver plating, and chromium plating. Electroplating allows manufacturers to use inexpensive metals such as steel or zinc for the majority of the product and then apply different metals on the outside to account for appearance, protection, and other properties desired for the product. In the process of electroplating, an external source of electric current is usually applied. This takes place in an electrolytic cell. The metal on which electroplating takes place is made the cathode (negative terminal), while the metal which is going to be plated as a layer on the metal is made the anode (positive terminal). The salt solution of the metal to be deposited is taken as the electrolyte.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Experiment 2.3 - Electroplating of an Iron Key with Copper Metal</h3>
      <p><strong>Objective:</strong> To conduct Electroplating of an iron key with copper metal</p>
      <p><strong>Apparatus and Chemicals:</strong> Beaker, sandpaper, copper wire, power supply (DC) or dry cells, distilled water, 1M copper sulfate solution, 1M H<sub>2</sub>SO<sub>4</sub> solution, copper rod, and an iron key.</p>

      <p>
        <strong>Procedure:</strong>
      </p>
      <ol className="list-decimal ml-8">
        <li>
          Dissolve two teaspoonfuls of CuSO<sub>4</sub> in 250 mL of distilled water in a clean and dry beaker. To increase conduction, add a few drops of dilute H<sub>2</sub>SO<sub>4</sub> solution to CuSO<sub>4</sub> solution. Take a copper plate of 10 cm x 4 cm size and an iron key. Use sandpaper to clean the copper plate and iron key. Rinse them with water and dry them.
        </li>
        <li>
          Place the cleaned copper plate in the CuSO<sub>4</sub> solution and connect it to the positive terminal of a battery. This copper plate becomes the anode.
        </li>
        <li>
          Place the cleaned iron key in the CuSO<sub>4</sub> solution at a small distance from the copper plate and connect the negative terminal of a battery to the iron key. This iron key becomes the cathode.
        </li>
        <li>
          Switch on the electric current and allow it to pass for about 15 minutes.
        </li>
        <li>
          Remove the copper plate and the iron key from the CuSO<sub>4</sub> solution.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Electrosynthesis of Nonmetals and Compounds</h2>
      <p>
        Many nonmetals and compounds can be produced using electrolysis. For example, the chlorine-alkali industry is an important part of the chemical industry, which produces chlorine (a nonmetal) and sodium hydroxide (a compound) through the electrolysis of raw material brine. The reactions that take place at the electrodes (when graphite electrodes are used) are as follows:
      </p>
      <BlockMath>{`Anode reaction: 2Cl^{-} (aq) → Cl_2 (g) + 2e^{-}`}</BlockMath>
      <BlockMath>{`Cathode reaction: 2H_2O (l) + 2e^{-} → H_2 (g) + 2OH^{-} (aq)`}</BlockMath>
      <BlockMath>{`Overall cell reaction: 2NaCl (aq) + 2H_2O (l) → 2Na^{+} (aq) + 2OH^{-} (aq) + Cl_2 (g) + H_2 (g)`}</BlockMath>
    </div>
  );
}
