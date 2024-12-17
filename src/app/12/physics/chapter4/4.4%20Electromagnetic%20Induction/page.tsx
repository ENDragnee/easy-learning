'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function ElectromagneticInduction() {
  return (
    <div className="px-6 sm:px-6 py-10 max-w-4xl mx-auto text-justifyy">
      <h1 className="text-3xl font-bold mb-6">4.4 Electromagnetic Induction</h1>

      <p>
        For a long time, electricity and magnetism were considered separate and unrelated phenomena. However, in the early decades
        of the nineteenth century, experiments by Oersted, Ampere, and others demonstrated that electricity and magnetism are
        inter-related. They discovered that moving electric charges produce magnetic fields. For instance, an electric current can
        deflect a magnetic compass needle placed nearby.
      </p>

      <p>
        This raises the question: Can the reverse be true? Can moving magnets produce electric currents? The answer is yes. In 1831,
        Michael Faraday discovered that a changing magnetic field can produce an electromotive force (emf), which in turn produces an
        induced current in a closed circuit. This phenomenon is known as electromagnetic induction.
      </p>

      <p>
        Faraday’s discovery of electromagnetic induction led to the invention of the dynamo (generator). This discovery is not only
        of theoretical interest but also of great practical utility. Without electromagnetic induction, there would be no electricity,
        electric lights, trains, telephones, or personal computers.
      </p>

      <p>
        The pioneering experiments of Faraday and Henry have directly contributed to the development of modern generators and
        transformers. The discovery of electromagnetic induction is based on a long series of experiments carried out by Faraday and
        Henry.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Magnetic Flux</h2>
      <p>
        Before stating Faraday's laws, it's important to understand the concept of magnetic flux, denoted by <InlineMath>{'\\Phi_B'}</InlineMath>.
        Magnetic flux is a measurement of the total magnetic lines of force that pass through a given area <InlineMath>{'A'}</InlineMath>.
      </p>

      <p>
        For a plane surface with area <InlineMath>{'A'}</InlineMath> placed in a uniform magnetic field <InlineMath>{'B'}</InlineMath>, the magnetic flux is
        mathematically written as:
      </p>
      <BlockMath>{'\\Phi_B = B A \\cos(\\theta) '}</BlockMath>
      <p>
        where <InlineMath>{'\\theta'}</InlineMath> is the angle between the magnetic field <InlineMath>{'B'}</InlineMath> and the area <InlineMath>{'A'}</InlineMath>.
        The SI unit of magnetic flux is the Weber (Wb).
      </p>
    </div>
  );
}
