'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function FluidMechanics() {
  return (
    <div className="px-6 sm:px-6 sm:text-xs md:text-base py-6 max-w-4xl mx-auto text-justify">

      <h2 className="text-3xl font-bold mb-6">3.2 Pressure in Fluids at Rest</h2>
      <p>
        As gas particles collide with the walls of the container in which they reside, they exert pressure. In fact, if you place any object inside a gas, the gas particles exert the same pressure on the object as the gas exerts on the walls of the container. Do liquids behave in a similar way? The particles in a liquid are in continual random motion, somewhat similar to particles in gases.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Pascal's Principle</h3>
      <p>
        Pushing the piston into a confined fluid in one direction causes a greater pressure in the fluid close to the piston. Almost immediately, the pressure throughout the fluid increases uniformly, and the fluid is pushed out of all of the holes in the container. This phenomenon was first discovered by French scientist Blaise Pascal in 1653 and is called Pascal’s Principle. Pascal’s Principle states that a change in the pressure applied to a static fluid is transmitted undiminished to every point of the fluid and to the walls of the container.
      </p>
      <p>
        The pressure applied at one point is transmitted to the whole part of the fluid by continuous collisions of neighboring molecules of the fluid.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Hydraulic Press</h3>
      <p>
        One of the technical applications of Pascal’s Principle is a hydraulic press, which converts small forces into larger forces, or vice versa. For example, automobile mechanics use hydraulic presses to lift cars, and dentists and barbers use them to raise and lower their clients’ chairs.
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'P = \\frac{F_1}{A_1}'}</BlockMath>
      </div>
      <p>
        The pressure in the fluid just under piston 1 is given by the formula <InlineMath>{'P = F_1 / A_1'}</InlineMath>, where <InlineMath>{'F_1'}</InlineMath> is the downward force exerted by piston 1, and <InlineMath>{'A_1'}</InlineMath> is the area of the piston.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Variation of Pressure with Depth</h3>
      <p>
        Consider a liquid of density <InlineMath>{'\\rho'}</InlineMath> at rest. The pressure exerted by the liquid on a parcel can be determined by the equation:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'P = P_0 + \\rho g h'}</BlockMath>
      </div>
      <p>
        where <InlineMath>{'P_0'}</InlineMath> is the pressure at the surface, <InlineMath>{'\\rho'}</InlineMath> is the density of the liquid, <InlineMath>{'g'}</InlineMath> is the acceleration due to gravity, and <InlineMath>{'h'}</InlineMath> is the depth.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Atmospheric Pressure</h3>
      <p>
        At the Earth’s surface, the air pressure exerted on you is a result of the weight of air above you. This pressure decreases as you climb higher in altitude and the weight of the air above you decreases. The atmospheric pressure changes with elevation and is greatest at sea level.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Measuring Pressure</h3>
      <p>
        Atmospheric pressure is measured by a device called a barometer. The pressure at the surface is given by the equation:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath>{'P_{atm} = \\rho g h'}</BlockMath>
      </div>
      <p>
        where <InlineMath>{'\\rho'}</InlineMath> is the density of mercury, <InlineMath>{'g'}</InlineMath> is gravitational acceleration, and <InlineMath>{'h'}</InlineMath> is the height of the mercury column.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Manometer</h3>
      <p>
        A manometer is a device used to measure the pressure of a gas. A closed-end manometer is a U-shaped tube, and the pressure of the gas is determined by the height of the liquid column inside the tube.
      </p>
    </div>
  );
}
