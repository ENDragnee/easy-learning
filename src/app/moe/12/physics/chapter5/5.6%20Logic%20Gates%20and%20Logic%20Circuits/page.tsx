'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function LogicGates() {
  return (
    <div className="px-6 sm:px-6 sm:text-xs md:text-base py-6 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">5.6 Logic Gates and Logic Circuits</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Digital and Analog Signals</h2>
      <div>
        In electronics and telecommunications, "signal" refers to any time-varying voltage, current, or electromagnetic wave that carries information. Two main types of signals encountered in practice are analog and digital.
      </div>
      <div>
        An analog signal is any continuous signal representing some time-varying quantity. The voltage signals, which vary continuously with time, are called continuous or analog voltage signals. An example is shown in Figure 5.24, where the voltage varies sinusoidally from 0 to 5V. An analog signal carries a smooth wave, meaning that at any point in time, the voltage can take any value.
      </div>
      <div>
        A digital signal is one that represents data using discrete values, typically 0 or 1. Digital signals are represented by two voltage levels: low (0) and high (1), often corresponding to ground (0V) and supply voltage (e.g., 5V). These signals are used in most digital circuits, which include computers, where information is encoded in sequences of 0s and 1s.
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Positive and Negative Logic</h2>
      <div>
        In computing systems, the binary number symbols ’0’ and ’1’ represent two possible states of a circuit or an electronic device.
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-4">Positive Logic</h3>
      <table className="table-auto border-collapse w-full mb-4">
        <thead>
          <tr>
            <th className="border p-2">Circuit</th>
            <th className="border p-2">Switch</th>
            <th className="border p-2">Voltage</th>
            <th className="border p-2">Sign</th>
            <th className="border p-2">Statement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">on</td>
            <td className="border p-2">high</td>
            <td className="border p-2">plus</td>
            <td className="border p-2">TRUE</td>
          </tr>
          <tr>
            <td className="border p-2">0</td>
            <td className="border p-2">off</td>
            <td className="border p-2">low</td>
            <td className="border p-2">minus</td>
            <td className="border p-2">FALSE</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mt-6 mb-4">Negative Logic</h3>
      <table className="table-auto border-collapse w-full mb-4">
        <thead>
          <tr>
            <th className="border p-2">Circuit</th>
            <th className="border p-2">Switch</th>
            <th className="border p-2">Voltage</th>
            <th className="border p-2">Sign</th>
            <th className="border p-2">Statement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">off</td>
            <td className="border p-2">low</td>
            <td className="border p-2">minus</td>
            <td className="border p-2">FALSE</td>
          </tr>
          <tr>
            <td className="border p-2">0</td>
            <td className="border p-2">on</td>
            <td className="border p-2">high</td>
            <td className="border p-2">plus</td>
            <td className="border p-2">TRUE</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Logic Gates</h2>
      <div>
        Digital electronics involve circuits that use digital signals, unlike analog electronics which work with continuous signals. Logic gates are the building blocks of digital electronics and are used to process these signals. A logic gate transforms an input signal into an output signal based on a defined logical relationship.
      </div>
      <div>
        The logical statements followed by these gates are known as Boolean expressions. The fundamental gates are:
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-4">OR Gate</h3>
      <div>
        The OR gate is represented by the Boolean expression:
        <div className='overflow-x-auto text-wrap text-xs'>
          <BlockMath math="y = A + B" />
        </div>
        The output is 1 if either input A or B is 1. The truth table for an OR gate is:
      </div>
      <div>
        - If both switches A and B are open, the lamp is OFF (0).<br />
        - If switch A is closed, switch B is open, the lamp is ON (1).<br />
        - If switch A is open, switch B is closed, the lamp is ON (1).<br />
        - If both switches are closed, the lamp is ON (1).
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-4">AND Gate</h3>
      <div>
        The AND gate follows the Boolean expression:
        <div className='overflow-x-auto text-wrap text-xs'>
          <BlockMath math="y = A \cdot B" />
        </div>
        The output is 1 only if both inputs A and B are 1. The truth table for an AND gate is:
      </div>
      <div>
        - If both switches A and B are open, the lamp is OFF (0).<br />
        - If switch A is closed and B is open, the lamp is OFF (0).<br />
        - If switch A is open and B is closed, the lamp is OFF (0).<br />
        - If both switches are closed, the lamp is ON (1).
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-4">NOT Gate</h3>
      <div>
        The NOT gate inverts its input and is represented by the Boolean expression:
        <div className='overflow-x-auto text-wrap text-xs'>
          <BlockMath math="y = \overline{A}" />
        </div>
        It inverts the input signal. If A is 0, the output is 1, and if A is 1, the output is 0.
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-4">NOR Gate</h3>
      <div>
        A NOR gate combines an OR gate and a NOT gate, with the Boolean expression:
        <div className='overflow-x-auto text-wrap text-xs'>
          <BlockMath math="y = \overline{A + B}" />
        </div>
        It inverts the output of the OR gate. If both switches A and B are open, the lamp is ON (1), but for other conditions, it is OFF (0).
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-4">NAND Gate</h3>
      <div>
        The NAND gate is a combination of an AND gate followed by a NOT gate, and follows the Boolean expression:
        <div className='overflow-x-auto text-wrap text-xs'>
          <BlockMath math="y = \overline{A \cdot B}" />
        </div>
        The output is the inverse of the AND gate's output. If both switches are closed, the lamp is OFF (0), but otherwise, it is ON (1).
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-4">Conclusion</h3>
      <div>
        Logic gates are the fundamental components of digital circuits, and they are used to perform basic logical operations. Understanding their behavior and applications is key to designing digital systems.
      </div>
    </div>
  );
}
