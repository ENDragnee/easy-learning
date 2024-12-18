'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function FaradaysLaw() {
  return (
    <div className="px-6 sm:px-6 sm:text-xs md:text-base py-6 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">4.5 Faraday’s Law of Electromagnetic Induction</h1>

      <p>
        The discovery and understanding of electromagnetic induction are based on a series of experiments conducted by Faraday and
        Henry. From these experiments, Faraday concluded that an electromotive force (emf) is induced when the magnetic flux across
        a coil changes with time.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Faraday’s Law of Electromagnetic Induction and Lenz’s Law</h2>
      <p>
        Faraday’s law explains how changing magnetic fields can cause current to flow through wires, while Lenz’s law describes the
        direction of the induced current.
      </p>

      <p>
        Faraday’s law states that the magnitude of the induced electromotive force (emf) is directly proportional to the rate of
        change of the magnetic flux in a closed coil:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'\\epsilon = - \\frac{\\Delta \\Phi_B}{\\Delta t}'}</BlockMath>
      </div>
      <p>
        where <InlineMath>{'\\epsilon'}</InlineMath> is the induced voltage (emf), <InlineMath>{'\\Delta \\Phi_B'}</InlineMath> is the change in magnetic flux,
        and <InlineMath>{'\\Delta t'}</InlineMath> is the change in time.
      </p>

      <p>
        For a coil with <InlineMath>{'N'}</InlineMath> turns, the change in flux associated with each turn is the same. Therefore,
        the expression for the total induced emf is:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'\\epsilon = - \\frac{N \\Delta \\Phi_B}{\\Delta t}'}</BlockMath>
      </div>

      <p>
        The negative sign in the equation is a result of Lenz’s law, which states that the direction of the induced current is such
        that it opposes the change that caused the induced emf.
      </p>

      <p>
        Lenz’s law is based on the principle of conservation of energy and Newton’s third law. It provides the most convenient way
        to determine the direction of the induced current.
      </p>

      <p>
        When the magnetic flux changes due to the approach of a magnet, it induces a current in the loop. The induced current
        generates its own magnetic field that opposes the change in magnetic flux that created it.
      </p>
    </div>
  );
}