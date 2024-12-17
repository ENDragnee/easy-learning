'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function IntegratedCircuits() {
  return (
    <div className="px-6 sm:px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">5.1 Integrated Circuits</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">The Importance of Integrated Circuits</h2>
      <p>
        Transistors and other semiconductor devices have made it possible to reduce the size of electronic circuits because of their small size and low power consumption. It is now possible to extend the principles behind semiconductors to complete circuits as well as individual components.
      </p>
      <p>
        Integrated circuits are used in almost all electronic equipment in use today and have revolutionized the world of electronics. The integrated circuit was invented by Jack Kilby and Robert Noyce. This invention is a boon for digital technologies like computers, mobile phones, MP3 players, fans, traffic lights, DVDs, and many other devices. The goal of the integrated circuit is to develop a single device to perform a specific function, such as amplification or switching, microprocessors, timers, and computer memory, eliminating the separation between components and circuits.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">The Components of an Integrated Circuit</h2>
      <p>
        An integrated circuit (IC), also referred to as a chip or a microchip, is a set of electronic circuits on one small flat piece (or "chip") of semiconductor material, usually silicon. It is no larger than that of a conventional low-power transistor. The circuit consists of diodes, transistors, resistors, and capacitors. Integrated circuits are produced with the same technology and materials used in making transistors and other semiconductor devices.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Advantages and Disadvantages of Integrated Components</h2>
      <p>
        Among the four types of components included in integrated circuits, only a very small amount of the space is occupied by diodes and transistors. The rest is occupied by resistors and capacitors, as their size increases with their value. The most obvious advantage of the integrated circuit is its small size. An integrated circuit is constructed of a chip of semiconductor material approximately one-eighth of an inch square. 
      </p>
      <p>
        Due to the integrated circuit's small size, it is used extensively in military and aerospace programs. The integrated circuit has also transformed the calculator from a desktop to a handheld instrument. Computer systems are now available in portable models because of integrated circuits. This small, integrated circuit consumes less power and operates at higher speeds than a conventional transistor circuit. The electron travel time is reduced by direct connection of the internal components.
      </p>
      <p>
        Integrated circuits are more reliable than directly connected transistor circuits. In the integrated circuit, internal components are connected permanently. The components are formed at the same time, reducing the chance for error. After the integrated circuit is formed, it is pretested before final assembly.
      </p>
      <p>
        Integrated circuits reduce the number of parts needed to construct electronic equipment. This reduces manufacturing cost and further reduces the cost of electronic equipment. However, integrated circuits do have some disadvantages. They cannot handle large amounts of current or voltage. High current generates excessive heat, damaging the device. High voltage breaks down the insulation between the various internal components.
      </p>
      <p>
        Furthermore, integrated circuits cannot be repaired because the internal components cannot be separated. Problems are identified by individual circuit instead of by individual component.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Conclusion</h3>
      <p>
        Integrated circuits have played a transformative role in electronics. Their small size, reliability, and efficiency have made them essential for a wide range of technologies, from consumer electronics to military and aerospace applications.
      </p>
    </div>
  );
}
