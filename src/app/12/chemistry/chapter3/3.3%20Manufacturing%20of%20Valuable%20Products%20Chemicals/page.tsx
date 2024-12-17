'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function ManufacturingOfValuableProducts() {
  return (
    <div className="px-6 sm:px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">3.3 Manufacturing of Valuable Products' Chemicals</h1>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Manufacturing of Some Valuable Products</h2>
      <p>
        Manufacturing of valuable products involves a number of chemical processes. The process is designed to produce a desired product from a variety of starting raw materials using energy through a succession of treatment steps integrated in a rational fashion (Figure 3.1). The treatment steps could be either physical or chemical in nature.
      </p>
      
      <h3 className="text-xl font-semibold mt-6 mb-4">Properties of Ammonia</h3>
      <p>
        Ammonia is lighter than air with a density of 0.769 kg/m<sup>3</sup> at STP. Ammonia is commercially and commonly available as an aqueous solution; the most common commercial formulation is 28–30% NH<sub>3</sub>. In the aqueous solution, ammonia is partially ionized according to the equilibrium:
      </p>
      <BlockMath>
        {`NH_3 + H_2O \\rightleftharpoons NH_4^+ + OH^-`}
      </BlockMath>
      <p>
        It is often referred to as ammonium hydroxide. It is a weak base. It is colorless with a sharp and intensely irritating gas at room temperature. Its melting point is -77.7°C, and its boiling point is -33.35°C. Its solubility in water at 25°C is 34% (w/w).
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Uses of Ammonia</h3>
      <p>
        Ammonia is an important compound, essential for a variety of diverse uses. It is used as a cleaning agent, antimicrobial agent, a raw material for the production of nitrogen fertilizers, raw material in the manufacturing of explosives such as nitrocellulose and trinitrotoluene (TNT), used in the production of soda ash, and in the Ostwald process to get nitric acid, etc.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Preparation of Ammonia</h3>
      <p>
        Ammonia is easily made in the laboratory by heating an ammonium salt, such as ammonium chloride (NH<sub>4</sub>Cl) with a strong alkali, such as sodium hydroxide or calcium hydroxide.
      </p>
      <BlockMath>
        {`2NH_4Cl + Ca(OH)_2 \\rightarrow CaCl_2 + 2H_2O + 2NH_3(g)`}
      </BlockMath>
      <p>
        The gas may also be made by warming concentrated ammonium hydroxide. The development of the Haber-Bosch process for ammonia production has made it possible to meet the large demand for its production.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Steps Involved in Ammonia Production</h3>
      <p>Step 1: The primary requirements for the production of ammonia are hydrogen (H<sub>2</sub>) and nitrogen (N<sub>2</sub>). Hydrogen was initially obtained by electrolyzing water, thus splitting the water molecule into its components – hydrogen and oxygen. In recent times, this method has been replaced by the use of methane as a source. Methane is easily acquired from natural gas and requires very little external energy to produce hydrogen. The other substrate, nitrogen, is obtained by carrying out fractional distillation of air.</p>

      <p>Step 2: The hydrogen and nitrogen are then introduced into a chamber containing iron particles or lined internally with iron, and a pressure of 15 – 25 MPa at a temperature of 300 – 500°C is applied to the gases. These conditions cause the gases to react and produce ammonia, and the following reaction occurs:</p>
      <BlockMath>
        {`N_2 + 3H_2 \\rightarrow 2NH_3`}
      </BlockMath>

      <p>Step 3: The hot mixture of gases is then passed through a condenser. Since ammonia condenses easily compared to nitrogen and hydrogen, the liquefied ammonia is collected and removed. The leftover nitrogen and hydrogen gases are re-introduced into the reactor. This recycling of the raw materials allows a 97% conversion of initial reactants into ammonia.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Properties of Nitric Acid</h2>
      <p>Pure nitric acid has a density of 1.51 g/cm<sup>3</sup>. It is a colorless liquid, with a highly pungent odor, similar in appearance to water, but on exposure to light, it turns brown because of slight decomposition into NO<sub>2</sub> (brown) and O<sub>2</sub>.</p>
      <BlockMath>
        {`4HNO_3(l) \\rightarrow 4NO_2(g) + O_2(g) + 2H_2O(l)`}
      </BlockMath>

      <h3 className="text-xl font-semibold mt-6 mb-4">Uses of Nitric Acid</h3>
      <p>
        Nitric acid is used for the neutralization of nitric acid with ammonia to produce ammonium nitrate – the most important component of mineral fertilizers. In addition, HNO<sub>3</sub> can be used for soil acidification in horticulture. It is also a precursor to organic nitrogen compounds, such as nitrobenzenes.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Production of Nitric Acid</h3>
      <p>Nitric acid is produced industrially from ammonia by the three-step Ostwald process:</p>
      <BlockMath>
        {`Step 1: 4NH_3(g) + 5O_2(g) \\rightarrow 4NO(g) + 6H_2O(g)`}
      </BlockMath>
      <p>Step 2: Additional air is added to cool the mixture and oxidize NO to NO<sub>2</sub>.</p>
      <BlockMath>
        {`2NO(g) + O_2(g) \\rightarrow 2NO_2(g)`}
      </BlockMath>

      <p>Step 3: The NO<sub>2</sub> gas is bubbled into warm water, where it reacts to give nitric acid and nitric oxide:</p>
      <BlockMath>
        {`3NO_2(g) + H_2O(l) \\rightarrow 2HNO_3(aq) + NO(g)`}
      </BlockMath>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Fertilizers</h2>
      <p>
        The common forms of N-based fertilizers include anhydrous ammonia, urea, urea-ammonium nitrate (UAN) solutions, and Diammonium Monohydrogen Phosphate (DAP).
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Anhydrous Ammonia</h3>
      <p>
        Anhydrous ammonia is applied by injection 6 to 8 inches below the soil surface to minimize the escape of gaseous NH<sub>3</sub> into the air. NH<sub>3</sub> is very hygroscopic and reacts quickly with water in the soil to change into the ammonium (NH<sub>4</sub><sup>+</sup>) form.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Urea</h3>
      <p>
        Urea is a solid fertilizer with high nitrogen content (46%) that can be easily applied to many types of crops and turf. It is highly soluble in water and can be incorporated into the soil by rainfall or irrigation.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Urea-Ammonium Nitrate (UAN) Solutions</h3>
      <p>
        UAN solutions are made by dissolving urea and ammonium nitrate in water. The urea portion of the solution may incur losses due to volatilization when urease hydrolysis releases NH<sub>3</sub>.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Diammonium Monohydrogen Phosphate (DAP)</h3>
      <p>
        DAP is the most common source of phosphorus in fertilizers. It has high water solubility and is an excellent source of nitrogen and phosphorus. It is commonly used in dry and liquid fertilizers.
      </p>

      <h1 className="text-3xl font-bold mb-6">Sulphuric Acid</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Properties</h2>
      <p>
        Anhydrous, 100% sulphuric acid is a colorless, odorless, heavy, oily liquid. It is heavier than water, with a molar mass of 98 g/mol. Pure H<sub>2</sub>SO<sub>4</sub> melts at 10.5°C and boils at 338°C. It is soluble in all ratios with water. This chemical is highly corrosive, reactive, and soluble in water. The sulphuric acid can be diluted by water to get acids in various strengths for different purposes. During the mixing process, sulphuric acid should be added to water, not the other way around. Since the dissolution of sulfuric acid in water is very exothermic, a large amount of heat is released, and the solution may even boil. It has a very high oxidizing power and thus acts as a strong oxidizing and dehydrating agent. It can oxidize both metals as well as non-metals. Moreover, it itself reduces to sulphur dioxide.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Example</h3>
      <p>
        <InlineMath math="Cu + 2H_2SO_4 \to CuSO_4 + SO_2 + H_2O" />
      </p>
      <p>
        <InlineMath math="2H_2SO_4 + C \to 2SO_2 + CO_2 + 2H_2O" />
      </p>
      <p>
        33.5% sulphuric acid is commonly called battery acid, while 62.18% sulphuric acid is known as chamber acid used for the production of fertilizers.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Preparation</h2>
      <p>Sulphuric acid is manufactured industrially by the contact process, which involves the following four major steps:</p>
      <h3 className="text-xl font-semibold mt-4 mb-2">Step 1: Burning Sulphur in Air</h3>
      <p>
        <InlineMath math="S(s) + O_2(g) \to SO_2(g)" />
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Step 2: Converting SO<sub>2</sub> to SO<sub>3</sub></h3>
      <p>
        <InlineMath math="2SO_2(g) + O_2(g) \xrightarrow{V_2O_5} 2SO_3(g)" />
      </p>
      <p>The conversion of SO<sub>2</sub> to SO<sub>3</sub> is slow, but it is increased by heating the reaction mixture to 400°C in the presence of a V<sub>2</sub>O<sub>5</sub> catalyst. Because the SO<sub>2</sub> and O<sub>2</sub> molecules react on contact with the surface of V<sub>2</sub>O<sub>5</sub>, the process is called the contact process.</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Step 3: Passing SO<sub>3</sub> into Concentrated H<sub>2</sub>SO<sub>4</sub></h3>
      <p>
        <InlineMath math="SO_3(g) + H_2SO_4(l) \to H_2S_2O_7(l)" />
      </p>
      <p>Sulphur trioxide is absorbed into 98% sulphuric acid to form oleum, also known as fuming sulphuric acid.</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Step 4: Addition of Water to Oleum</h3>
      <p>
        <InlineMath math="H_2S_2O_7(l) + H_2O(l) \to 2H_2SO_4(l)" />
      </p>
      <p>Oleum is diluted with water to form concentrated sulphuric acid.</p>

      <h2 className="text-3xl font-bold mt-6 mb-4">Pesticides</h2>
      <p>
        Pesticides are chemicals used to prevent or control pests, diseases, weeds, and other plant pathogens. They help reduce yield losses and maintain high product quality. Chemical pesticides can be classified based on their chemical composition. This method allows for a scientific grouping of pesticides to establish correlations between structure, activity, toxicity, and degradation mechanisms.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Types of Pesticides</h3>

      <h4 className="text-lg font-semibold mt-4 mb-2">Organochlorines</h4>
      <p>
        Organochlorines are soluble in lipids, accumulate in the fatty tissue of animals, and are transferred through the food chain. They are toxic to a variety of animals and have long-term persistence.
      </p>
      <p>Main Composition: Composed of Carbon, Hydrogen, Chlorine, and Oxygen atoms. They are nonpolar and lipophilic.</p>

      <h4 className="text-lg font-semibold mt-4 mb-2">Organophosphates</h4>
      <p>
        Organophosphates are soluble in organic solvents and water. They infiltrate groundwater and are less persistent than chlorinated hydrocarbons. Some affect the central nervous system and can be absorbed by plants.
      </p>

      <h4 className="text-lg font-semibold mt-4 mb-2">Carbamates</h4>
      <p>
        Carbamates are derivatives of carbamic acid. They kill a limited spectrum of insects and are highly toxic to vertebrates. They are relatively low in persistence.
      </p>

      <h4 className="text-lg font-semibold mt-4 mb-2">Pyrethroids</h4>
      <p>
        Pyrethroids affect the nervous system but are less toxic than other pesticides. They are considered safer and some are used as household insecticides.
      </p>

      <h4 className="text-lg font-semibold mt-4 mb-2">Biological</h4>
      <p>
        Biological pesticides, such as Bacillus thuringiensis (Bt), are applied to control forest pests and crops, particularly against butterflies and caterpillars.
      </p>

      <h2 className="text-3xl font-bold mt-6 mb-4">Herbicides (Chemical Weed Killers)</h2>
      <p>
        Herbicides, commonly known as weed killers, are substances used to control unwanted plants. Selective herbicides control specific weed species, while non-selective herbicides kill all plant material they contact. Herbicides have largely replaced mechanical methods of weed control in countries where intensive and highly mechanized agriculture is practiced.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Properties of Sodium Carbonate</h3>
      <p>
        Sodium carbonate (washing soda) is a white crystalline solid powder, existing as a decahydrate (Na<sub>2</sub>CO<sub>3</sub>.10H<sub>2</sub>O) compound. It has a density of 2.54 g/cm<sup>3</sup>, a melting point of 851°C, and is hygroscopic in nature. It dissolves in water to form a mildly alkaline solution, and it is used in various industries, including glass manufacturing.
      </p>

      <h2 className="text-3xl font-bold mt-6 mb-4">Sodium Hydroxide</h2>
      <p>
        Sodium hydroxide (NaOH), also known as caustic soda, is a white, crystalline solid with a melting point of 591K. It is highly corrosive and used in industries such as soap production, paper manufacturing, and water purification.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Manufacturing Process of Sodium Hydroxide</h3>
      <p>
        Sodium hydroxide is manufactured through methods like the Castner-Kellner process, where electrolysis of brine solution yields sodium hydroxide.
      </p>
    </div>
  );
}
