'use client';

import { useState } from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What is the main component of glass?",
    "options": [
      "Limestone",
      "Silica",
      "Sodium carbonate",
      "Boron oxide"
    ],
    "correctAnswer": 1,
    "hint": "The main component of glass is silica."
  },
  {
    "question": "Which type of glass is most commonly produced, making up about 90% of manufactured glass?",
    "options": [
      "Quartz glass",
      "Borosilicate glass",
      "Soda-lime glass",
      "Lead glass"
    ],
    "correctAnswer": 2,
    "hint": "Soda-lime glass is the most commonly produced type of glass."
  },
  {
    "question": "Which of the following is NOT a step in glass production?",
    "options": [
      "Batch preparation",
      "Glass melting",
      "Glass molding",
      "Annealing"
    ],
    "correctAnswer": 2,
    "hint": "Glass molding is not a listed step in the process of glass production."
  },
  {
    "question": "Which material is commonly used for ceramic production?",
    "options": [
      "Sand",
      "Clay",
      "Limestone",
      "Silica"
    ],
    "correctAnswer": 1,
    "hint": "Ceramics are often made from minerals like clay."
  },
  {
    "question": "What is the primary chemical reaction that takes place during cement production?",
    "options": [
      "Decomposition of limestone",
      "Oxidation of iron",
      "Synthesis of calcium chloride",
      "Reduction of magnesium oxide"
    ],
    "correctAnswer": 0,
    "hint": "Limestone decomposes to form calcium oxide and carbon dioxide during cement production."
  },
  {
    "question": "Which method is primarily used for the production of ethanol?",
    "options": [
      "Fermentation of carbohydrates",
      "Catalytic hydration of ethene",
      "Thermal cracking of hydrocarbons",
      "Electrolysis of water"
    ],
    "correctAnswer": 0,
    "hint": "Ethanol is produced through the fermentation of carbohydrates."
  },
  {
    "question": "Which of the following is a common use for sodium lauryl sulfate in detergents?",
    "options": [
      "Increases foam production",
      "Enhances water softening",
      "Acts as a preservative",
      "Prevents bacterial growth"
    ],
    "correctAnswer": 0,
    "hint": "Sodium lauryl sulfate is used to increase foam production in detergents."
  },
  {
    "question": "What is the main process used in the production of beer?",
    "options": [
      "Fermentation of barley and hops",
      "Catalytic hydration of sugars",
      "Distillation of malt",
      "Combustion of barley"
    ],
    "correctAnswer": 0,
    "hint": "Beer is made by fermenting barley and hops."
  }
]

export default function ManufacturingIndustriesInEthiopia() {
  const [showQuiz, setShowQuiz] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(new Array(quizQuestions.length).fill(null));
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0); 
  
    const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
      const newSelectedAnswers = [...selectedAnswers];
      newSelectedAnswers[questionIndex] = answerIndex;
      setSelectedAnswers(newSelectedAnswers);
    };
  
    const handleSubmit = () => {
      const correctCount = selectedAnswers.reduce((count: number, answer: number | null, index: number) => {
        if (answer === null) return count;
        return count + (answer === quizQuestions[index].correctAnswer ? 1 : 0);
      }, 0);
      setScore(correctCount);
      setShowResults(true);
    };
  return (
    <div className="px-6 sm:px-6 sm:text-xs md:text-base py-6 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">3.4 Some Manufacturing Industries in Ethiopia</h1>

      <p>
        The chemical industry in Ethiopia is still at a nascent stage. Therefore, there is a strong demand to develop the chemical industry to meet the requirements of the rapidly growing Ethiopian economy. Currently, imports fulfill domestic demand for chemicals/manufacturing products. According to ADDISBIZ.com news of the year 2022, more than 2228 manufacturing industries are available in the country.
      </p>
      <p>
        In this subsection, emphasis is given to the production of final products like glass, cement, ceramics, sugar, alcoholic beverages, food packing and preservation, soaps and dry detergent, tanning, and paper.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Glass Production</h2>
      <p>
        Glass is an amorphous or non-crystalline solid material. It is inexpensive to make, easy to shape when it’s molten, reasonably resistant to heat when it’s set, chemically inert (a glass jar doesn’t react with the things inside it), and can be recycled any number of times. The main component of glass is silica.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Types of Glass</h3>
      <p>
        Quartz glass is made by melting pure silica, SiO<sub>2</sub>, at a temperature of about 2300°C. Soda-lime glass, made from a mixture of sodium silicate and calcium silicate, accounts for about 90% of manufactured glass. Borosilicate glass, commonly known as Pyrex, is manufactured using boron (III) oxide and has high resistance to chemical corrosion and temperature changes.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Steps in Glass Production</h3>
      <ol className="list-decimal ml-8">
        <li>Batch preparation: The raw materials are mixed in a proportion of 60% sand, 21% sodium carbonate, and 19% limestone.</li>
        <li>Glass melting: The raw materials are heated to a temperature of about 1600°C to form a molten viscous liquid.</li>
        <li>Glass forming: The melted glass is shaped into the required form.</li>
        <li>Annealing: Internal stresses are relieved by reheating and slowly cooling the glass.</li>
        <li>Inspection: Testing is conducted to ensure the glass fulfills the desired quality requirements.</li>
        <li>Packing and dispatching: The final stage before distribution.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Ceramics Production</h2>
      <p>
        Ceramic is an inorganic, non-metallic solid prepared by the action of heat and subsequent cooling. Traditional ceramics, such as porcelain, tiles, and pottery, are formed from minerals such as clay, talc, and feldspar.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Steps in Ceramic Manufacturing</h3>
      <ul className="list-disc ml-8">
        <li>Moulding: The ceramic powder is shaped into different objects.</li>
        <li>Densification: The ceramic object is heated to condense it into a strong, dense product.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Cement Production</h2>
      <p>
        Cement production has been increasing because of the opening of new cement companies and the upgrade of the old ones. The raw materials for cement production are limestone, clay, silica sand, gypsum, calcium silicate, and other materials.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Chemical Reactions in Cement Production</h3>
      <p>
        In cement production, when limestone (CaCO<sub>3</sub>) is heated, it decomposes to form calcium oxide (CaO) and carbon dioxide (CO<sub>2</sub>). The high-temperature reactions in the kiln produce compounds like calcium silicates and aluminates.
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>
          {`CaCO_3 \\rightarrow CaO + CO_2`}
        </BlockMath>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-4">Setting of Cement</h3>
      <p>
        When cement is mixed with water, it forms a plastic mass that hardens over time due to chemical reactions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Sugar Production</h2>
      <p>
        Sugarcane is a perennial herb commonly used for sugar production. The process involves collecting, cleansing, grinding, juicing, clarifying, evaporation, crystallization, refining, and packaging.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Steps in Sugar Production</h3>
      <ol className="list-decimal ml-8">
        <li>Collecting the harvest: Mature canes are gathered and transported to the factory.</li>
        <li>Cleansing and grinding: The canes are washed, shredded, and mixed with hot water.</li>
        <li>Juicing: Juice is extracted from the shredded cane.</li>
        <li>Clarifying: The juice is purified by adding carbon dioxide and lime.</li>
        <li>Evaporation: The juice is boiled under a vacuum to form a thick syrup.</li>
        <li>Crystallization: Sugar crystals are formed by evaporating water from the syrup.</li>
        <li>Refining: Raw sugar is refined to remove impurities.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Conclusion</h2>
      <p>
        These industries play an important role in the economic development of Ethiopia. As the country continues to grow, developing sustainable and efficient manufacturing processes is essential for meeting domestic demand while minimizing environmental impacts.
      </p>

      <h1 className="text-3xl font-bold mb-6">Some Manufacturing Industries in Ethiopia</h1>

        <p>
        Paper is not a chemical compound that can be expressed by a chemical formula. It is a mixture made from rags and wood pulp glued together with some additives, bleached, and dried. Wood pulp is a dry fibrous material, made from softwood trees like spruce, pine, fir, larch, and hemlock, as well as hardwoods like eucalyptus, aspen, and birch. Wood is composed of cellulose, lignin, oils, and resins. Lignin is used to bind cellulose fibers together. The cellulose must be separated from the lignin to produce wood pulp.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Manufacturing of Pulp and Paper</h2>

        <p>
        The manufacturing process of pulp and paper involves the following steps:
        </p>

        <ol className="list-decimal ml-8">
        <li>
            <strong>Harvesting:</strong> This involves cutting down trees and transporting the timber to the paper and pulp industry.
        </li>
        <li>
            <strong>Preparation:</strong> In this step, the bark of the tree is removed, and the wood is chipped and screened to provide uniform-sized chips.
        </li>
        <li>
            <strong>Pulping:</strong> The process of converting the wood chips into wood pulp can be done through mechanical or chemical methods.
            <ul className="list-disc ml-8">
            <li>
                <strong>Mechanical Pulping:</strong> Steam, pressure, and high temperatures are used to tear the fibers, but the process results in shorter, weaker fibers.
            </li>
            <li>
                <strong>Chemical Pulping:</strong> Wood chips and chemicals are combined in large digesters, where heat and chemicals break down lignin. This process can be done in two methods:
                <ul className="list-disc ml-8">
                <li>
                    <strong>The Kraft Process:</strong> A widely used method that uses sodium hydroxide and sodium sulfide for digestion at high temperatures.
                    <div className='overflow-x-auto text-wrap text-xs'>
                    <BlockMath>
                      {`CaCO_3 + NaOH + Na_2S \\rightarrow Pulp`}
                      </BlockMath>
                    </div>
                </li>
                <li>
                    <strong>The Sulphite Process:</strong> This method uses sodium bisulphate or magnesium bisulphate at a low pH to break down lignin.
                </li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <strong>Bleaching:</strong> The process of removing coloring matter and increasing the brightness of wood pulp.
        </li>
        <li>
            <strong>Making Paper from Pulp:</strong> The pulp is transferred to a paper mill, poured onto a moving screen, and compressed to produce paper sheets.
        </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Tanning of Leather</h2>

        <p>
        Tanning is the process of converting raw animal hides and skin into leather using tannin. Leather is a durable material created by altering the protein structure of skin to prevent it from returning to raw hide. The process involves various preparatory stages, tanning, and crusting:
        </p>

        <ol className="list-decimal ml-8">
        <li>
            <strong>Preparatory Stages:</strong> These include curing, soaking, flesh removal, hair removal, scudding, and deliming.
            <ul className="list-disc ml-8">
            <li><strong>Curing:</strong> Salting or drying the hide to prevent bacterial infection.</li>
            <li><strong>Soaking:</strong> Immersing cured hides in water to remove salt, dirt, and fats.</li>
            <li><strong>Flesh Removal:</strong> Using machines to strip the flesh from the hide.</li>
            <li><strong>Hair Removal:</strong> Hides are soaked in a lime-water mixture to loosen hair for removal.</li>
            <li><strong>Scudding:</strong> Removing remaining hair and fat with tools.</li>
            <li><strong>Deliming:</strong> Using acid to remove lime from the hide, preparing it for tanning.</li>
            </ul>
        </li>
        <li>
            <strong>Tanning:</strong> The raw hide is converted into stable leather, using either vegetable (natural) tanning or mineral tanning. 
            <ul className="list-disc ml-8">
            <li><strong>Vegetable Tanning:</strong> Uses tannins from plant barks like oak or chestnut.</li>
            <li><strong>Mineral Tanning:</strong> Uses chromium salts to produce more stretchable leather, commonly used in garments and handbags.</li>
            </ul>
        </li>
        <li>
            <strong>Crusting:</strong> The final stage, which includes dyeing, rolling, stretching, and applying compounds like wax and oils to enhance the leather.
        </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Food Preservation</h2>

        <p>
        Food preservation is the process of preventing spoilage, loss of quality, and reducing microorganisms. Some of the common modern methods include:
        </p>

        <ul className="list-disc ml-8">
        <li><strong>Freezing:</strong> Preserves a wide variety of foods by lowering their temperature.</li>
        <li><strong>Freeze-drying:</strong> Removes water through sublimation, maintaining the original shape, color, and flavor.</li>
        <li><strong>Vacuum-packing:</strong> Removes oxygen to slow down spoilage, often used for nuts and other foods sensitive to oxidation.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Conclusion</h2>

        <p>
        These manufacturing industries are vital for Ethiopia's economic growth. As the country progresses, developing sustainable and efficient processes will be key to meeting domestic demand while reducing environmental impacts.
        </p>

        <h1 className="text-3xl font-bold mb-6">Inorganic and Organic Preservatives</h1>

      <p>
        Some inorganic and organic preservatives are available for food preservation. Some examples of inorganic preservatives are sodium chloride (NaCl), nitrate and nitrite salts, sulfites, and sulfur dioxide (SO<sub>2</sub>). NaCl lowers water activity and causes plasmolysis by withdrawing water from cells. Nitrites and nitrates are curing agents for meats (hams, bacons, sausages, etc.) to inhibit <em>Clostridium botulinum</em> under vacuum packaging conditions. Sulfur dioxide (SO<sub>2</sub>), sulfites (SO<sub>3</sub><sup>2-</sup>), bisulfite (HSO<sub>3</sub><sup>-2</sup>), and metabisulfites (S<sub>2</sub>O<sub>5</sub><sup>2-</sup>) form sulfurous acid in aqueous solutions, which is the antimicrobial agent. Sulfites are widely used in the wine industry to sanitize equipment and reduce competing microorganisms. Wine yeasts are resistant to sulfites. Sulfites are also used in dried fruits and some fruit juices. Sulfites have been used to prevent enzymatic and nonenzymatic browning in some fruits and vegetables (cut potatoes).
      </p>
      
      <p>
        A number of organic acids and their salts are used as preservatives. These include lactic acid and lactates, propionic acid and propionates, citric acid, acetic acid, sorbic acid, and sorbates, benzoic acid and benzoates, and methyl and propyl parabens (benzoic acid derivatives).
      </p>

      <p>
        For example, propionic acid and propionate salts (calcium most common) are active against molds at pH values less than 6. They have limited activity against yeasts and bacteria. They are widely used in baked products and cheeses. Acetic acid is found in vinegar at levels up to 4–5%. It is used in mayonnaise, pickles, and ketchup, primarily as a flavoring agent. Acetic acid is most active against bacteria, but has some yeast and mold activity, though less active than sorbates or propionates.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Ethanol: Industrial Preparation</h2>
      <p>
        Ethanol is one of the constituents of all alcoholic beverages. ‘Tella’, ‘Tej’, beer, wine, ‘Katikalla’, ouzo, gin, and whisky contain ethanol. There are a number of methods for preparing ethanol using different materials. Since it is the constituent of all alcoholic beverages, it is better to describe its industrial preparation.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Fermentation of Carbohydrates</h3>
      <p>
        Ethanol is manufactured industrially by fermentation of carbohydrates such as sugar. Fermentation is the slow decomposition of carbohydrates such as sucrose, starch, and cellulose in the presence of a suitable enzyme that results in the formation of ethanol and carbon dioxide.
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>
          {`C_{12}H_{22}O_{11} \\xrightarrow{invertase} C_6H_{12}O_6 + C_6H_{12}O_6`}
        </BlockMath>
      </div>
      
      <p>
        The reaction above shows sucrose decomposing into glucose and fructose. The fermentation process continues as follows:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>
          {`C_6H_{12}O_6 + H_2O \\xrightarrow{zymase} 2C_2H_5OH + 2CO_2`}
        </BlockMath>
      </div>
      <h3 className="text-xl font-semibold mt-6 mb-4">Catalytic Hydration of Ethene</h3>
      <p>
        Most ethanol is manufactured at present by this method. In this process, ethene is treated with steam at 573 K and 60 atm pressures in the presence of phosphoric acid (H<sub>3</sub>PO<sub>4</sub>) as a catalyst.
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>
          {`CH_2=CH_2 (g) + H_2O (g) \\xrightarrow{H_3PO_4} CH_3CH_2OH (g)`}
        </BlockMath>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Beer and Wine Production</h2>

      <h3 className="text-xl font-semibold mt-4 mb-2">Beer</h3>
      <p>
        The raw materials for beer are barley and hops. The first step is to bring the barley to germination, whereby starch is converted into a type of sugar called malt sugar. Heat stops this process and the material is now called malt. After drying and grinding the barley, water is added in the mash tubes. After adding hops and yeast, the process of fermentation begins. Later, it is pasteurized, carbon dioxide is added under pressure, and supplied to consumers. Most beers have an alcohol content between 2-6% by volume.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Wine</h3>
      <p>
        Grapes are the most common raw materials for producing wines. Grapes (or other fruits) are first crushed and then steamed. The liquid derived from the crushing process is called must. It goes through fermentation, and the must is then filtered, cooled, pasteurized, and stored. The older the wine, the more mature it becomes, fetching a higher price. Most wines have an alcohol content of 10-16% by volume.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Liquor</h3>
      <p>
        Liquor, such as cognac, rum, and whisky, contains a higher percentage of pure alcohol. Fermentation typically stops at 15-17% alcohol because yeast cannot survive at higher concentrations. Distillation is used to separate alcohol from the solution and achieve higher alcohol concentrations (30-45% by volume).
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Local Preparation of Ethanol: Araki</h3>
      <p>
        Araki is a local Ethiopian alcohol made by fermenting a mixture of barley (made into "Bikel") and Gesho (Rhamnus pronoides) powder. The process involves fermenting the starter, baking bread from various grains, and distilling the resulting mixture to obtain Araki. The leftover residue is called "Atela" and is often used as cattle feed.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Soap Manufacturing and Detergents</h2>
      
      <p>
        Organic chemicals such as animal fat and vegetable oils are used for soap synthesis. Soaps are sodium or potassium salts of fatty acids and function as surfactants to reduce surface tension and clean dirt. The soap manufacturing process involves saponification, glycerin removal, soap purification, and finishing.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Detergents</h3>
      <p>
        Detergents are similar to soaps but are more effective in both soft and hard water. They are often made from long-chain alcohols or alkyl benzene sulphonic acids. One example is sodium lauryl sulfate (C<sub>12</sub>H<sub>25</sub>O–SO<sub>2</sub>–ONa), prepared by reacting dodecyl alcohol with sulfuric acid and sodium hydroxide.
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>
          {`C_{12}H_{25}OH + H_2SO_4 \\rightarrow C_{12}H_{25}OSO_3H`}
        </BlockMath>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Dry Cleaning</h2>
      <p>
        Dry cleaning involves using chemicals that dissolve grease and dirt without water. Common chemicals include tetrachloromethane (CCl<sub>4</sub>), tetrachloroethylene (Cl<sub>2</sub>C=CCl<sub>2</sub>), benzene, and gasoline.
      </p>
      <div className='flex justify-center items-center'>
          <button 
            onClick={() => setShowQuiz(true)}
            className="w-1/2 h-1/2 mt-6 bg-slate-400 hover:bg-slate-500 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Take Quiz
          </button>
        </div>

      {showQuiz && (
        <div className="fixed inset-0 bg-gray-600 dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-[#242424] p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => {
                setShowQuiz(false);
                setShowResults(false);
                setSelectedAnswers(new Array(quizQuestions.length).fill(null));
              }}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Projectile Motion Quiz</h2>
            <div className="space-y-6">
              {quizQuestions.map((q, index) => (
                <QuizQuestion
                  key={index}
                  question={q.question}
                  options={q.options}
                  correctAnswer={q.correctAnswer}
                  hint={q.hint}
                  selectedAnswer={selectedAnswers[index]}
                  showResults={showResults}
                  onSelectAnswer={(answerIndex) => handleAnswerSelect(index, answerIndex)}
                />
              ))}
            </div>
            <div className="mt-6 flex justify-between">
              {!showResults && (
                <button 
                  onClick={handleSubmit}
                  className="bg-green-500 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  Submit
                </button>
              )}
              <button 
                onClick={() => {
                  setShowQuiz(false);
                  setShowResults(false);
                  setSelectedAnswers(new Array(quizQuestions.length).fill(null));
                }}
                className="bg-red-500 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Close
              </button>
            </div>
            {showResults && (
              <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-bold mb-2 dark:text-white">Quiz Results</h3>
                <p className="dark:text-white">
                  You got {score} out of {quizQuestions.length} questions correct! 
                  ({((score / quizQuestions.length) * 100).toFixed(1)}%)
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
