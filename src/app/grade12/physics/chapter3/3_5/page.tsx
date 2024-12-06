'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function SafetyAndHighPressure() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">Safety and High Pressure</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">High Pressure Systems</h2>
      <p>
        Pressure far greater than 1 atmosphere (most of the time greater than 50 atm) is considered high pressure. High pressure is used for many applications such as:
      </p>
      <ul className="list-disc ml-6">
        <li>High pressure cookers used to cook food quickly.</li>
        <li>Gas cylinders containing liquid petroleum gas (LPG) for fuel use.</li>
        <li>High pressure gas cylinders used in laboratories or medical applications.</li>
        <li>Bicycle and car tires inflated using high pressure inflators.</li>
        <li>High pressure washers for industrial and cleaning purposes.</li>
      </ul>
      <p>
        In physical sciences, high pressure is important to study the physical properties of materials, mainly solids, and to transform their nature.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Changes Under High Pressure</h3>
      <p>
        Many materials undergo fascinating changes in their physical and chemical characteristics when subjected to high pressure. In biological contexts, high pressure is used in a process called pascalization, which diminishes or cancels microorganism activity. This process is applied to increase the shelf life of perishable food items like juice, fish, meat, and dairy products.
      </p>
      <p>
        High pressure affects several scientific and technological fields, such as biology, chemistry, material science, pharmacy, and physics.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">High Pressure Equipment</h2>
      <p>
        High pressure equipment may include the following components:
      </p>
      <ul className="list-disc ml-6">
        <li>High-pressure compressors (pumps) used to increase gas pressure.</li>
        <li>High pressure vessels designed to contain fluids under pressure.</li>
        <li>Safety accessories such as safety valves and bursting discs.</li>
        <li>High-pressure instrumentation for monitoring pressure, temperature, flow, and level.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-4">High Pressure Compressors</h3>
      <p>
        A compressor is a mechanical device that increases the pressure of a gas by reducing its volume. Compressors are similar to pumps, both increasing the pressure on a fluid and transporting it through a pipe.
      </p>
      <p>
        Heated pressure equipment is used for generating steam or superheated water at temperatures higher than 110°C. Such equipment, including pressure cookers, requires careful design and fabrication due to the severe stresses involved.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">High Pressure Vessels</h3>
      <p>
        A pressure vessel is a container designed to hold fluids under pressure, including its attachments like valves and piping. These vessels may consist of more than one chamber.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Safety Accessories</h3>
      <p>
        Safety accessories are crucial for high-pressure systems and include:
      </p>
      <ul className="list-disc ml-6">
        <li>Safety valves</li>
        <li>Bursts discs</li>
        <li>Limiting devices like pressure and temperature switches that activate shutdown or corrective measures.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-4">High Pressure Instrumentation</h3>
      <p>
        To operate high-pressure plants safely, adequate control and measuring devices are essential. These devices measure parameters such as pressure, temperature, flow, and fluid levels.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Safety for High Pressure Equipment</h2>
      <p>
        If a high pressure system or equipment fails and bursts violently, it can cause serious injury or even death. The main hazards from pressure systems include:
      </p>
      <ul className="list-disc ml-6">
        <li>Impact from explosion blasts</li>
        <li>Impact from failing parts or flying debris</li>
        <li>Impact from released liquids or gases, such as steam</li>
        <li>Fire caused by the release of flammable materials</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-4">Common Causes of Pressure System Failures</h3>
      <p>
        The risks associated with pressure systems often arise from:
      </p>
      <ul className="list-disc ml-6">
        <li>Damaged equipment or poor system design</li>
        <li>Lack of maintenance</li>
        <li>Unsafe work practices or inadequate training</li>
        <li>Incorrect installation or modifications</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">High Pressure Washers</h2>
      <p>
        Pressure washers are high-pressure equipment commonly used for cleaning large outdoor areas. They are used to clean vehicles, concrete, sidewalks, and floors. Despite their usefulness, pressure washers can pose risks if not used correctly. The following safety measures should be followed:
      </p>
      <ul className="list-disc ml-6">
        <li>Wear safety glasses or goggles to protect your eyes from flying debris.</li>
        <li>Wear enclosed shoes or work boots to protect your feet.</li>
        <li>Wear gloves to protect your hands from injury.</li>
        <li>Use ear protection when operating a gas-powered pressure washer for long periods.</li>
        <li>Never point the pressure washer at people or animals as it can cause injury.</li>
        <li>Always turn off the machine and water before disconnecting hoses.</li>
      </ul>
    </div>
  );
}
