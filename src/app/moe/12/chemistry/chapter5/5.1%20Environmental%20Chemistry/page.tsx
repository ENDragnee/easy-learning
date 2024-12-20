'use client';

import { useState } from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import QuizQuestion from '@/components/QuizQuestion';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    "question": "What is the main focus of environmental chemistry?",
    "options": [
      "The study of plant biology",
      "The production, transport, and reactions of chemical species in the environment",
      "The synthesis of pharmaceutical compounds",
      "The study of human metabolism"
    ],
    "correctAnswer": 1,
    "hint": "Environmental chemistry deals with chemical species and their effects in different environmental compartments."
  },
  {
    "question": "Which gas is primarily released into the atmosphere when sulfur in coal is oxidized?",
    "options": [
      "Sulfur dioxide (SO₂)",
      "Nitrogen oxide (NO₂)",
      "Carbon dioxide (CO₂)",
      "Ozone (O₃)"
    ],
    "correctAnswer": 0,
    "hint": "Sulfur in coal reacts to form sulfur dioxide, which is released into the atmosphere."
  },
  {
    "question": "Which of the following is a major component of the Earth’s atmosphere?",
    "options": [
      "Oxygen",
      "Carbon dioxide",
      "Nitrogen",
      "Methane"
    ],
    "correctAnswer": 2,
    "hint": "The atmosphere is composed of about 78% nitrogen."
  },
  {
    "question": "Which reaction in the atmosphere is responsible for ozone depletion?",
    "options": [
      "Formation of Nitric Oxide",
      "Reaction of Chlorofluorocarbons with Ozone",
      "Carbon dioxide absorption",
      "Nitrogen fixation"
    ],
    "correctAnswer": 1,
    "hint": "Chlorofluorocarbons break down ozone molecules in the atmosphere."
  },
  {
    "question": "What percentage of the Earth's water supply is fresh water?",
    "options": [
      "50%",
      "10%",
      "1%",
      "75%"
    ],
    "correctAnswer": 2,
    "hint": "Only about 1% of the Earth's water is fresh water."
  },
  {
    "question": "What is the main consequence of ammonia (NH₃) being discharged into water bodies?",
    "options": [
      "Increased fish growth",
      "Water vapor formation",
      "Toxicity to aquatic life",
      "Reduction in oxygen levels"
    ],
    "correctAnswer": 2,
    "hint": "Ammonia in water can be toxic to aquatic organisms like fish."
  },
  {
    "question": "Which process is responsible for converting carbon dioxide and water into glucose and oxygen in plants?",
    "options": [
      "Respiration",
      "Photosynthesis",
      "Fermentation",
      "Decomposition"
    ],
    "correctAnswer": 1,
    "hint": "Photosynthesis is the process that produces glucose and oxygen in plants."
  },
  {
    "question": "What role does the lithosphere play in environmental chemistry?",
    "options": [
      "It stores water",
      "It interacts with atmospheric gases",
      "It consists of Earth's crust and upper mantle, affecting mineral reactions",
      "It generates oxygen for respiration"
    ],
    "correctAnswer": 2,
    "hint": "The lithosphere includes Earth’s crust and mantle, where mineral reactions take place."
  },
  {
    "question": "What is one of the key reactions in the nitrogen cycle?",
    "options": [
      "Decomposition of carbonates",
      "Fixation of nitrogen by bacteria and algae",
      "Absorption of sunlight by plants",
      "Reduction of oxygen in water"
    ],
    "correctAnswer": 1,
    "hint": "Nitrogen fixation by bacteria and algae is an important part of the nitrogen cycle."
  },
  {
    "question": "Which cycle is responsible for balancing sulfur concentration in the environment?",
    "options": [
      "The Carbon Cycle",
      "The Nitrogen Cycle",
      "The Sulfur Cycle",
      "The Oxygen Cycle"
    ],
    "correctAnswer": 2,
    "hint": "The sulfur cycle plays a role in balancing the concentration of sulfur in various reservoirs."
  }
]

export default function EnvironmentalChemistry() {
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
      <h1 className="text-3xl font-bold mb-6">Environmental Chemistry</h1>

      <p>
        Environmental chemistry is a branch of chemical science that deals with the production, transport, reactions, effects, and fates of chemical species in the water, air, terrestrial, and biological environment and the effects of human activities thereon.
      </p>
      <p>
        A common pollutant species is used to illustrate the definition of environmental chemistry. Sulfur in coal is oxidized to sulfur dioxide gas, which is then released into the atmosphere. Sulfur dioxide gas can be oxidized to sulfur trioxide and eventually converted to sulfuric acid in the atmosphere, then fall back to earth as acid rain, affect a receptor like plants, and end up in a “sink” like a body of water or soil.
      </p>

      <p className="mt-6">
        Figure 5.1 shows a simplified schematic diagram that shows the fate of pollutant species in the environment.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Components of the Environment</h2>
      <p>
        The environment consists of various compartments, including: atmosphere, hydrosphere, lithosphere, and biosphere. Figure 5.2 shows the four components of the environment.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">The Atmosphere</h3>
      <p>
        One of the main components of Earth’s interdependent physical systems is the atmosphere. An atmosphere is the layers of gases surrounding a planet or other celestial body. Earth’s atmosphere is composed of about 78% nitrogen, 21% oxygen, and one percent other gases.
      </p>
      <p>
        In general, the atmosphere provides many benefits to Earth’s living organisms, including humans: such as a protective blanket of gas surrounding the Earth (0–50km), absorbing infrared (IR) radiation emitted by the sun and re-emitted from the Earth, controlling the temperature of the Earth, allowing transmission of significant amounts of radiation from near UV (300 nm) to near IR (2500 nm), and blocking transmission of damaging UV radiation.
      </p>

      <p className="mt-6">
        For example, the following important reactions occur in the atmosphere:
      </p>

      <h4 className="text-lg font-semibold mt-4">Reaction I: Nitric Oxide and Oxygen</h4>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`2NO (g) + O_2 (g) ->{\text{UV}} 2NO_2 (g)`}</BlockMath>
      </div>

      <h4 className="text-lg font-semibold mt-4">Reaction II: Chlorofluorocarbons and Ozone Depletion</h4>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`CF_2Cl_2 + \text{UV} -> CF_2Cl + Cl`}</BlockMath>
        <BlockMath>{`Cl + O_3 -> ClO + O_2`}</BlockMath>
      </div>
      <h3 className="text-xl font-semibold mt-6 mb-4">The Hydrosphere</h3>
      <p>
        The hydrosphere is the combined mass of water found on, under, and above the surface of the Earth. The hydrosphere includes water that is on the surface of the planet, underground, and in the air. It is a collective term for all different forms of water, including oceans, seas, rivers, lakes, streams, reservoirs, glaciers, and groundwater.
      </p>
      <p>
        Only ~1% of global water supply is fresh water. The greatest source of water on the planet is the ocean, which constitutes all salt water and is also the greatest source of water vapor.
      </p>

      <p className="mt-6">
        Some examples of chemical reactions in the hydrosphere:
      </p>

      <h4 className="text-lg font-semibold mt-4">Example I: Ammonia (NH₃) in Water Bodies</h4>
      <p>
        Ammonia (NH₃) discharged from agriculture, aquaculture, industry, and urban areas into large water bodies results in toxicity to fish or aquatic ecosystems. For example, the biological oxidation of NH₃ to nitrite and then nitrate is a key part of the complex nitrogen cycle and a fundamental process in aquatic environments, influencing ecosystem stability and functionality.
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`2NH_3 + 3O_2 -> 2NO_3^- + 2H^+ + 2H_2O`}</BlockMath>
      </div>
      <h4 className="text-lg font-semibold mt-4">Example II: Nitrate and Nitrite Discharge</h4>
      <p>
        Nitrate (NO₃⁻) and Nitrite (NO₂⁻) that are discharged into water bodies from agriculture, industry, aquaculture, and sewage result in accelerating aquatic plant growth, leading to eutrophication.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Conclusion</h2>
      <p>
        The environment consists of multiple compartments like the atmosphere, hydrosphere, lithosphere, and biosphere. Chemical reactions that occur in these compartments, whether due to natural processes or human activities, play a significant role in shaping the Earth’s ecosystems and environmental health.
      </p>

      <h1 className="text-3xl font-bold mb-6">The Lithosphere</h1>
      <p>
        The lithosphere consists of Earth’s crust and upper mantle. The crust is the Earth’s outer skin, which is accessible to humans. This part of the Earth, i.e., the crust, consists of rocks and soil, which are the most important parts for humans and the environment. Some examples of important reactions in the lithosphere are:
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">I. Bacterial Effects on Minerals</h2>
      <p>
        Different bacteria (mainly autotrophic, i.e., not dependent on organic material for their carbon supply) can affect the oxidation or reduction of minerals. For example:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`FeCO_3 + \frac{1}{2} O_2 + 3H_2O ->{Ferro-bacillus} 2Fe(OH)_3 + 2CO_2`}</BlockMath>
      </div>
      <h2 className="text-2xl font-semibold mt-6 mb-4">II. Chemical Weathering of Rocks</h2>
      <p>
        The chemical weathering of rocks is important in the lithosphere. For example:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`Fe_2O_3 + 3H_2O -> Fe_2O_3 • 3H_2O`}</BlockMath>
      </div>
      <h1 className="text-3xl font-bold mt-10 mb-6">The Biosphere</h1>
      <p>
        The biosphere refers to the realm of living organisms and their interactions with the environment. This compartment is divided into smaller units called ecosystems. Each ecosystem contains dynamic interrelationships between living forms and their physical environment. These interrelations manifest as natural cycles, such as the hydrologic, oxygen, nitrogen, phosphorus, and sulfur cycles. These cycles operate in a balanced manner, providing a continuous circulation of essential constituents.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">I. Photosynthesis</h2>
      <p>
        Photosynthesis is a key reaction in the biosphere:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`6CO_2 + 6H_2O ->{Sunlight} C_6H_{12}O_6 + 6O_2`}</BlockMath>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">II. Respiration</h2>
      <p>
        Another vital process in the biosphere is respiration:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`C_6H_{12}O_6 + 6O_2 -> 6CO_2 + 6H_2O + \text{Heat energy}`}</BlockMath>
      </div>

      <h1 className="text-3xl font-bold mt-10 mb-6">The Hydrologic Cycle</h1>
      <p>
        The hydrologic cycle is arguably the most important natural cycle. In this cycle, there is continuous exchange of water between environmental compartments. 10% of evaporative losses from oceans precipitate on land (groundwater), and groundwater percolates by capillary action to surface soil.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">The Oxygen Cycle</h2>
      <p>
        The oxygen cycle is essential in atmospheric chemistry, geochemical transformation, and life processes. Some of the important reactions in the oxygen cycle include:
      </p>
      <ul className="list-disc ml-8">
        <li>Energy production:</li>
      </ul>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`CH_4 + 2O_2 ->{\text{Yield}} CO_2 + 2H_2O + \text{Heat energy}`}</BlockMath>
      </div>
      <ul className="list-disc ml-8">
        <li>Degradation of organic material (example: glucose):</li>
      </ul>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`C_6H_{12}O_6 + 6O_2 -> 6CO_2 + 6H_2O`}</BlockMath>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">The Nitrogen Cycle</h2>
      <p>
        The nitrogen cycle is critical to living organisms. The following are some important reactions in the nitrogen cycle:
      </p>
      <ul className="list-disc ml-8">
        <li>Fixation by bacteria and algae:</li>
      </ul>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`N_2 + 3CH_2O + 3H_2O + 4H^+ -> 3CO_2 + 4NH_4^+`}</BlockMath>
      </div>
      <ul className="list-disc ml-8">
        <li>Nitrification by nitrosomas and nitrobacteria:</li>
      </ul>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`2O_2 + 3NH_4^+ -> NO_3^- + 2H^+ + H_2O`}</BlockMath>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">The Phosphorus Cycle</h2>
      <p>
        The phosphorus cycle is essential for plant growth. Phosphorus is central to many processes, including cell division (DNA and RNA production), and the growth/maintenance of animal bones and teeth. The sources of phosphorus include inorganic phosphate salts and terrestrial plants that convert them to organic phosphate.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">The Sulfur Cycle</h2>
      <p>
        The sulfur cycle plays a role in balancing the concentration of sulfur in different reservoirs, making Earth habitable. Some of the important reactions in the sulfur cycle include:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`H_2S + 4O_2 -> 2SO_4^{2-} + 2H^+`}</BlockMath>
        <BlockMath>{`SO_4^{2-} + 2CH_2O + H^+ -> H_2S + 2H_2O + 2CO_2`}</BlockMath>
      </div>

      <h1 className="text-3xl font-bold mt-10 mb-6">The Carbon Cycle</h1>
      <p>
        The carbon cycle is integral to the Earth's climate. Plants convert carbon dioxide into glucose and oxygen through photosynthesis:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`6CO_2 + 6H_2O -> C_6H_{12}O_6 + 6O_2`}</BlockMath>
      </div>
      <p>
        Animals and plants release carbon dioxide back into the atmosphere through respiration:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{`C_6H_{12}O_6 + 6O_2 -> 6CO_2 + 6H_2O`}</BlockMath>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Pollutants and Contaminants</h2>
      <p>
        A pollutant is a substance whose concentration has increased due to human activity, and which has detrimental effects on the environment. For example, sulfur dioxide (SO<sub>2</sub>) and carbon dioxide (CO<sub>2</sub>).
      </p>
      <p>
        A contaminant is a substance that does not occur naturally but is introduced into the environment through human activity. It becomes a pollutant when it harms human health.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Definitions</h2>
      <ul className="list-disc ml-8">
        <li><strong>Sink:</strong> The medium that interacts and retains pollutants or converts them chemically.</li>
        <li><strong>Dissolved Oxygen (DO):</strong> Oxygen dissolved in water, vital for aquatic life.</li>
        <li><strong>Biological Oxygen Demand (BOD):</strong> Indicates the capacity of dissolved organic matter in water to consume oxygen.</li>
        <li><strong>Threshold Limit Value (TLV):</strong> The permissible level of a toxic pollutant in the atmosphere that a healthy individual can be exposed to.</li>
      </ul>
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
