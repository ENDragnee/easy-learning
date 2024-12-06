'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function EnvironmentalPollution() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">Environmental Pollution</h1>
      
      <p>
        Pollution is any discharge of a solid, liquid or gaseous substance or radiation (energy) into an environment that causes unwanted changes. Pollution causes short-term or long-term harm that affects the earth’s ecological balance and lowers the quality of life in the environment. A pollutant is any substance that changes air, water or any other natural resource in a way that impairs the use of the resource. Pollutants are discharged into the environment as a result of natural events (like a volcanic eruption) and as a result of human activities (such as the operation of chemical industries, agriculture, etc.). Pollutants can be classified by the type of pollution they cause: air pollution, water pollution, and land pollution.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Atmosphere as a Solution</h2>
      <p>
        The atmosphere is considered as a solution. Several different gases make up our atmosphere. Since nitrogen (N<sub>2</sub>) is present in the greatest amount in the atmosphere, nitrogen is the “solvent” in our atmospheric “solution”. The solute present in largest amount is oxygen (O<sub>2</sub>), but certainly there are many others.
      </p>
      <p>
        <strong>Table 5.1: Gases in the Atmosphere</strong>
      </p>
      <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Percent by Volume</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Nitrogen</td>
            <td className="border px-4 py-2">78%</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Oxygen</td>
            <td className="border px-4 py-2">20.95%</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Argon</td>
            <td className="border px-4 py-2">0.93%</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Gaseous Water</td>
            <td className="border px-4 py-2">0.08%</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Carbon Dioxide</td>
            <td className="border px-4 py-2">0.04% and increasing</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Air Pollution</h2>
      <p>
        Air pollution is caused by the presence of contaminant gaseous substances in the air that affect the lives of plants and animals on Earth. Some common air pollutants include sulfur dioxide (SO<sub>2</sub>), nitrogen oxides (NOx), carbon monoxide (CO), ozone (O<sub>3</sub>), hydrocarbons, particulates, chlorofluorocarbons (CFCs), and lead compounds.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Sulfur Dioxide (SO<sub>2</sub>)</h3>
      <p>
        Sulfur dioxide enters the atmospheric air from the combustion of coal and petroleum, and during the extraction of metals from their sulfide ores. It causes coughing, chest pains, and shortness of breath. It is thought to be a cause for bronchitis and lung diseases.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Oxides of Nitrogen</h3>
      <p>
        These can be formed in the atmosphere by natural processes like thunderstorms. Combustion of fossil fuel containing nitrogen compounds as impurities and exhaust gases from furnaces and engines increase the amount of nitric oxide, NO, and nitrogen dioxide, NO<sub>2</sub>, in the atmosphere. Nitric oxide, NO, catalyzes the decomposition of ozone in the upper layer of the atmosphere to oxygen, thus decreasing the ozone layer:
      </p>
      <BlockMath>{`2O (g) ⇌ NO → 3O (g)`}</BlockMath>
      <p>
        Nitric oxide is oxidized by oxygen to nitrogen dioxide in the presence of ultraviolet light:
      </p>
      <BlockMath>{`2NO (g) + O_2 (g) → 2NO_2 (g)`}</BlockMath>

      <h3 className="text-xl font-semibold mt-6 mb-4">Carbon Monoxide</h3>
      <p>
        Most of the carbon monoxide escapes into the atmosphere due to the incomplete combustion of fuel. Prolonged exposure to carbon monoxide impairs vision, produces headaches, and exerts strain on the heart. It also reduces the oxygen-carrying capacity of the blood by reacting with hemoglobin.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Methods of Reducing Air Pollution</h2>
      <ul className="list-disc ml-8">
        <li>Using public transport</li>
        <li>Turning off lights when not in use</li>
        <li>Recycling and reusing</li>
        <li>Avoiding plastic bags</li>
        <li>Reducing forest fires and smoking</li>
        <li>Using fans instead of air conditioners</li>
        <li>Using filters for chimneys</li>
        <li>Implementing afforestation</li>
        <li>Avoiding the use of products with chemicals</li>
        <li>Avoiding the use of crackers</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Water Pollution</h2>
      <p>
        Water pollution is the degradation of the quality of water due to the discharge of untreated sewage, industrial and agricultural waste, and oil spills. Major water pollutants include nitrate and phosphate fertilizers, untreated sewage, insecticides, and herbicides.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Eutrophication</h3>
      <p>
        Excessive discharge of fertilizers into water systems accelerates the growth of surface-water plants, such as algae. When these aquatic plants die, bacteria consume the oxygen in the water, depleting it and killing aquatic animals like fish.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Methods of Reducing Water Pollution</h2>
      <ul className="list-disc ml-8">
        <li>Treating water before discharge into rivers and lakes</li>
        <li>Avoiding unnatural temperature changes in natural water systems</li>
        <li>Recycling industrial and agricultural wastes</li>
        <li>Using organic fertilizers and biological methods to control pests</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Land Pollution</h2>
      <p>
        Land pollution is caused by the improper disposal of waste, including oil spills, harmful chemicals, and non-biodegradable wastes like plastics.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Causes of Land Pollution</h3>
      <ul className="list-disc ml-8">
        <li>Spillage of oil from leaking pipelines</li>
        <li>Leaching of harmful chemicals from buried waste</li>
        <li>Dumping of non-biodegradable waste like plastics</li>
        <li>Excessive use of synthetic fertilizers</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Methods of Reducing Land Pollution</h2>
      <p>
        Reducing non-biodegradable waste is a critical strategy in reducing land pollution. Non-biodegradable waste, like plastics, does not decompose naturally and can cause serious environmental harm.
      </p>
    </div>
  );
}
