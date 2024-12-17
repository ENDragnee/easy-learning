'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function ApplicationAndSafety() {
  return (
    <div className="px-6 sm:px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">4.7 Application and Safety</h1>

      <p>
        Over the last 200 years, physicists have discovered a lot about the natural world. Many of these discoveries, initially thought to be of little practical use, have led to revolutionary applications. Modern society now relies on electromagnetism in numerous ways. For example, computer hard drives use the principle of electromagnetism to record data. Historically, the reading of data on hard drives worked through electromagnetic induction, although most data is now carried in digital form as a series of 0s or 1s.
      </p>

      <p>
        Graphics tablets and tablet computers, where a specially designed pen is used to create digital images, also utilize electromagnetic induction principles. These tablets differ from the touch tablets we use every day. For instance, when signing a signature at a cash register, you may use a tablet that works with a magnetic field created by a pen. Beneath the screen, tiny wires are arranged in grids. As the magnetic field from the pen tip brushes over these wires, it creates a changing magnetic field, inducing an electromotive force (emf), which translates into the digital line drawn on the screen.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Applications of Electromagnetism</h2>
      <p>
        Electromagnetism has countless applications across various fields, from large-scale industrial machinery to small-scale electronic components. These include electric motors, generators, transformers, and other devices. The principles of Ampere's Law are utilized in solenoids, straight wires, cylindrical conductors, and toroidal solenoids.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Electromagnets at Home or School</h2>
      <p>
        Electromagnets are used in many everyday devices. Examples include electric bells, headphones, loudspeakers, MRI machines, electric fans, doorbells, and magnetic locks. Many household appliances are based on the working principle of electromagnetism.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Magnetic Relays</h2>
      <p>
        A magnetic relay is a switch or circuit breaker that is activated magnetically, allowing it to be turned ’ON’ or ’OFF’. A common example is the low-power reed relay used in telephone equipment. This relay consists of two flat nickel−iron blades separated by a small gap. When a magnetic field is applied along the length of the blades, the two blades assume opposite magnetic polarities, causing them to attract and close the circuit, thus turning it ’ON’.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Electric Bell</h2>
      <p>
        The electric bell operates on the principle of electromagnetism. When the switch is pressed, the electromagnet is activated and attracts a soft iron piece towards itself. This movement of the hammer hits the bell. As the hammer moves, the circuit is broken, disabling the electromagnet. This causes the hammer and soft iron to return to their initial position due to the spring, completing the circuit again. This process repeats, creating the ringing sound.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">DC Electric Motor</h2>
      <p>
        A DC electric motor consists of a loop placed between two permanent magnets. Connecting the ends of the loop to battery terminals turns the loop into an electromagnet. One side of the loop is attracted to the north pole of the magnet and the other to the south pole, causing the loop to rotate continuously. A commutator, which is the rotating interface between the loop and the stationary circuit, helps in maintaining the current direction. The permanent magnetic field creates a torque on the rotating coil, and brushes conduct current between stationary wires and moving parts.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">AC Generator</h2>
      <p>
        An AC generator is a mechanical device that converts mechanical energy into electrical energy in the form of alternating electromotive force (emf). For instance, the electricity generated at power plants comes from AC generators. These generators work based on Faraday's Law of electromagnetic induction, which involves a strong permanent magnet and a rectangular coil wound around an iron core. When the coil spins in the magnetic field, it generates an alternating emf.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Safety and Precautions</h2>
      <p>
        While electromagnets are generally safe for their various uses, precautions should be taken based on their context. For instance, powerful electromagnets that come into contact with laptops or computers can damage hard drives. Electromagnets can also affect monitors, especially for older cathode ray tube (CRT) televisions, as powerful magnets can distort the images by deflecting the electron beam used to create the image.
      </p>

      <p>
        Electromagnets also help lift and transport metal plates efficiently. However, when using them, factors like the weight of the plates, the surface conditions, and any air gaps between the magnet and the plate must be considered. If an air gap is present, it may impact the lifting power of the electromagnet.
      </p>
    </div>
  );
}
