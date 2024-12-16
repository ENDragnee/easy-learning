'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function GreenChemistryAndCleanerProduction() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">Green Chemistry and Cleaner Production</h1>

      <p>
        Think about all of the different substances that you deal with on a daily basis. Consider your notebook or the materials that help to deliver power to your calculator. How was the cover of your notebook made? What will happen to it when you throw it away? What materials were used to make the batteries or the solar cells in your calculator? What will happen to these materials once they no longer work properly?
      </p>
      <p>
        We are surrounded by a huge variety of materials with a wide range of chemical and physical properties. We are continually developing processes to create products with desired properties. Our ability to manufacture materials provides many conveniences, but also some drawbacks. We are using raw materials at an alarming rate. We are also discarding hazardous chemicals into our landfills or incinerating them and releasing chemicals into our atmosphere.
      </p>
      <p>
        We are starting to understand more about the hazards of chemical processes. Industries in many countries are now paying attention to the fuels and raw materials they use and the by-products they release along with their intended products. Sometimes manufacturers simplify processes to fewer steps. This has many benefits, including reducing waste. Processes are burning less fuel, using fewer toxic reactants, and releasing fewer unwanted by-products. Industry is attempting to become “greener.”
      </p>
      <p>
        In this section, the principles of green chemistry and cleaner production will be discussed in detail.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Green Chemistry</h2>
      <p>
        “Green chemistry” is a movement to make industries that involve chemicals more environmentally friendly and sustainable. Green chemistry asks the question: “Why generate pollution if there is a greener alternative?”
      </p>
      <p>
        Developing a green alternative begins with considering the hazards of the required chemicals as well as their properties. Chemists then develop a manufacturing process so that every stage of product development is environmentally safe—from the raw materials to what happens to the product at the end of its useful life. In other words, the process is “benign by design.”
      </p>
      <p>
        A green chemistry solution may involve using safer chemicals. Liquid carbon dioxide, for example, is starting to replace toxic organic solvents used in dry cleaning. Greening a chemical process can also involve making a process more efficient. For example, the original makers of ibuprofen, an important pain reliever, found a way to make the drug in half the number of steps. The result is a process that generates less waste, uses less energy, and is more profitable!
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">The “12” Principles of Green Chemistry</h3>

      <h4 className="text-lg font-semibold mt-4 mb-2">1. Prevention</h4>
      <p>
        It is better to prevent waste than to treat or clean up waste after it has been generated. Preventing waste generation limits the risks associated with waste storage, transportation, and treatment.
      </p>
      <p>
        A solid example is the pulp and paper industry. Chlorine compounds in processes produce toxic chlorinated organic waste, but green chemistry developed a method to convert wood pulp into paper using oxygen, water, and polyoxometalate salts, producing only water and carbon dioxide as by-products.
      </p>

      <h4 className="text-lg font-semibold mt-4 mb-2">2. Atom Economy</h4>
      <p>
        The atom economy is a primary criterion for green chemistry. It refers to improving chemical processes by avoiding the waste of atoms from reactants to products.
      </p>
      <p>
        The atom economy can be calculated by dividing the mass of the desired product by the total mass of the products. For an optimal process, the atom economy should be near or equal to 100%.
      </p>
      <BlockMath>
        {`\\text{Atom economy} = \\frac{\\text{Mass of C}}{\\text{Mass of C + D}} \\times 100`}
      </BlockMath>

      <h4 className="text-lg font-semibold mt-4 mb-2">3. Less Hazardous Chemical Synthesis</h4>
      <p>
        Wherever practicable, synthetic methods should be designed to use or generate chemicals that pose little or no toxicity to the environment and human health. The goal should be to avoid reactions that give hazardous by-products.
      </p>

      <h4 className="text-lg font-semibold mt-4 mb-2">4. Design of Safer Chemicals</h4>
      <p>
        The design of safer chemicals deals with rendering chemicals which fulfill their intended purpose but are benign and harmless to ecosystems.
      </p>

      <h4 className="text-lg font-semibold mt-4 mb-2">5. Safer Solvent and Auxiliaries</h4>
      <p>
        The use of solvents should be avoided, but when necessary, toxic, non-recyclable solvents should be replaced with safer, more sustainable options.
      </p>

      <h4 className="text-lg font-semibold mt-4 mb-2">6. Design for Energy Efficiency</h4>
      <p>
        Recognition of energy requirements, their impact on the environment and economy, and minimizing them will pave the way for greener processes. Chemical reactions should run at ambient conditions whenever possible.
      </p>

      <h4 className="text-lg font-semibold mt-4 mb-2">7. Use of Renewable Feedstock</h4>
      <p>
        Use starting materials (feedstocks) that are renewable rather than depletable. Renewable feedstocks often come from agricultural products or the wastes of other processes.
      </p>

      <h4 className="text-lg font-semibold mt-4 mb-2">8. Reduce Derivatives</h4>
      <p>
        Reducing the need for derivatives or functional group blocking reduces waste generation and improves the overall economy and efficiency of the process.
      </p>

      <h4 className="text-lg font-semibold mt-4 mb-2">9. Catalysis</h4>
      <p>
        Catalysis is crucial to green chemistry. Catalytic processes offer benefits such as reduced energy consumption and increased selectivity, allowing for less use of harmful chemicals.
      </p>

      <h4 className="text-lg font-semibold mt-4 mb-2">10. Design for Degradation</h4>
      <p>
        Chemical products should be designed to break down into innocuous degradation products that do not persist in the environment.
      </p>

      <h4 className="text-lg font-semibold mt-4 mb-2">11. Real-time Analysis for Pollution Prevention</h4>
      <p>
        Real-time analysis helps minimize pollution during the industrial process by enabling timely adjustments and minimizing hazardous byproducts.
      </p>

      <h4 className="text-lg font-semibold mt-4 mb-2">12. Inherently Safer Chemistry for Accident Prevention</h4>
      <p>
        Choosing safer chemicals helps mitigate the chances of industrial or laboratory accidents, benefiting both the industry and the environment.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Goals of Green Chemistry from the Perspective of Cleaner Production</h2>
      <ul className="list-disc ml-8">
        <li>Reduce adverse environmental impacts through appropriate and innovative material choices and chemical transformations.</li>
        <li>Develop processes based on renewable (plant-based) materials rather than non-renewable (fossil-derived) feedstocks.</li>
        <li>Develop products that are less toxic and degrade more readily in the environment.</li>
        <li>Minimize the requirement for hazardous solvents and extractions.</li>
        <li>Improve energy efficiency using low-temperature and low-pressure processes with new or improved catalysts.</li>
        <li>Minimize byproducts and achieve better "atom economy."</li>
      </ul>

      <BlockMath>
        {`\\text{Atom economy} = \\frac{\\text{Formula weight of the product}}{\\text{Sum of formula weights of all the reactants}} \\times 100`}
      </BlockMath>

      <h3 className="text-xl font-semibold mt-6 mb-4">Example of Atom Economy Calculation</h3>
      <p>
        For the reaction: Fe<sub>2</sub>O<sub>3</sub>(s) + 3CO(g) → 2Fe(l) + 3CO<sub>2</sub>(g),
        the atom economy is calculated as follows:
      </p>
      <BlockMath>
        {`\\text{Atom economy} = \\frac{112}{244} \\times 100 = 45.9%`}
      </BlockMath>
    </div>
  );
}
