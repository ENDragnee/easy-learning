'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function NaturalResourcesIndustry() {
  return (
    <div className="px-6 sm:px-6 sm:text-xs md:text-base py-6 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">3.2 Natural Resources and Industry</h1>

      <h2 className="text-2xl font-semibold mb-4">Natural Resources</h2>
      <p>
        Natural resources are raw materials obtained from the natural environment, serving as essential inputs for the chemical
        industry. These resources are derived from various components of the environment:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>
          <strong>From the atmosphere:</strong> The Earth's atmosphere contains approximately <InlineMath>{'5 \\times 10^{15}'}</InlineMath> tons of gases
          like <InlineMath>{'N_2, O_2, CO_2, Ne, Ar, Kr, \\text{and } Xe'}</InlineMath>. These gases are vital industrial raw materials with an
          essentially unlimited natural supply.
        </li>
        <li>
          <strong>From the hydrosphere:</strong> Ocean water, amounting to approximately <InlineMath>{'1.5 \\times 10^{21}'}</InlineMath> liters, contains
          3.5% dissolved materials by mass, serving as a source of sodium chloride, magnesium, and bromine.
        </li>
        <li>
          <strong>From the lithosphere:</strong> The Earth's crust provides mineral ores, carbon, and hydrocarbons such as coal, natural gas, and crude
          petroleum, which are not only energy sources but also precursors for countless chemicals.
        </li>
        <li>
          <strong>From the biosphere:</strong> Vegetation and animals supply raw materials for agro-based industries, such as oils, fats, waxes, resins,
          sugar, fibers, and leather.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-4">Classification of Natural Resources</h3>
      <p>
        Natural resources are categorized as renewable and non-renewable resources based on their ability to regenerate or replenish.
      </p>

      <h4 className="text-lg font-medium mb-2">Renewable Resources</h4>
      <p>
        Renewable resources are replenished through natural cycles and can increase in abundance through reproduction or simple
        substance utilization. Examples include plants, animals, wood, water, soil, and solar energy.
      </p>

      <h4 className="text-lg font-medium mt-4 mb-2">Non-Renewable Resources</h4>
      <p>
        Non-renewable resources cannot be regenerated naturally. They are finite and include fossil fuels (petrol, coal), metals
        (iron, copper, gold), and minerals (carbonates, phosphates). Once consumed, they are gone forever.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Industry</h2>
      <p>
        An industry is a well-organized facility where large-scale manufacturing of goods occurs, often involving high degrees of
        automation and specialization. It may also include commercial activities such as agriculture, transportation, and hospitality.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Manufacturing Industry</h3>
      <p>
        The manufacturing industry focuses on producing goods from raw materials through organized labor and systematic processes.
      </p>

      <h4 className="text-lg font-medium mt-4 mb-2">Classification of Manufacturing Industry</h4>
      <p>
        Manufacturing industries vary in raw materials, skills, and technologies, leading to diverse product categories, such as:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>Food processing industries</li>
        <li>Beverage industries</li>
        <li>Textile industries</li>
        <li>Wearing apparel industries</li>
        <li>Leather industries</li>
        <li>Paper and chemical industries</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-4">Chemical Industry</h3>
      <p>
        The chemical industry involves the manufacturing of industrial chemicals through:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>Chemical reactions between organic or inorganic materials</li>
        <li>Extraction, separation, or purification of natural products</li>
        <li>Preparation of valuable materials</li>
      </ul>
      <h4 className="text-lg font-medium mt-4 mb-2">Classification of Chemical Industry</h4>
      <p><strong>Based on raw materials:</strong></p>
      <ul className="list-disc list-inside ml-4">
        <li>Sugar industries use sugarcane for sugar production.</li>
        <li>Detergent industries use preprocessed products like caustic soda.</li>
      </ul>
      <p><strong>Based on product types:</strong></p>
      <ul className="list-disc list-inside ml-4">
        <li>Food processing</li>
        <li>Beverages</li>
        <li>Textiles</li>
        <li>Leather products</li>
      </ul>
    </div>
  );
}

