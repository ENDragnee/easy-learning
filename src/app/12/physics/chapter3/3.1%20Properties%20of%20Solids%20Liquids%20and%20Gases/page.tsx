"use client"

import { useEffect } from 'react';
import 'katex/dist/katex.min.css'; // Import KaTeX CSS
import { InlineMath, BlockMath } from 'react-katex';

const FluidMechanics = () => {
  useEffect(() => {
    // Any necessary initialization logic for KaTeX if needed
  }, []);

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold text-center">Unit 3: Fluid Mechanics</h1>

      <h2 className="text-2xl font-semibold mt-4">3.1 Properties of Solids, Liquids, and Gases</h2>
      <p className="text-lg leading-relaxed">
        Atoms in solids are very close to each other. The forces between them act as a spring that allows the atoms to vibrate without changing positions relative to their neighboring atoms. Thus, a solid resists all types of stress because the atoms are not able to move about freely. Solids also resist compression, because their atoms are relatively fixed distance apart. Under compression, the atoms would be forced into one another.
      </p>

      <h3 className="text-xl font-medium mt-6">Figure 3.1</h3>
      <p className="text-lg leading-relaxed mb-6">
        (a) Atoms in a solid always have the same neighbors, held near equilibrium position by forces represented here by springs. (b) Atoms in a liquid are also in close contact but can slide over one another. Forces between them strongly resist attempts to push them closer together and also hold them in close contact. (c) Atoms in a gas are separated by distances that are considerably larger than the size of the atoms themselves, and they move about freely.
      </p>

      <h2 className="text-2xl font-semibold mt-4">Fluid Statics</h2>
      <p className="text-lg leading-relaxed">
        Fluid statics deals with the nature of fluids at rest. The fluid can be either gaseous or liquid. In fluid statics, there is no relative motion between adjacent fluid layers, and no shear (tangential) stresses. The only stress in fluid statics is the normal stress, which is the pressure.
      </p>

      <h3 className="text-xl font-medium mt-6">Pressure in Fluid</h3>
      <p className="text-lg leading-relaxed mb-6">
        The normal component of a force acting on a surface per unit area is called the normal stress, and the tangential component of a force acting on a surface per unit area is called shear stress. For fluid at rest, the shear stress is zero, and the only existing stress is the normal stress and is called pressure.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Pressure is defined as a normal force exerted by a fluid (or a solid) per unit area. If <InlineMath>{'F'}</InlineMath> is the magnitude of the force exerted on the fluid (or solid) at a particular point and <InlineMath>{'A'}</InlineMath> is the surface area at which this force is applied, the pressure <InlineMath>{'P'}</InlineMath> at this particular point is defined as the ratio of the force to the contact area <InlineMath>{'A'}</InlineMath> over which that force is exerted:
      </p>
      <div className="mb-6">
        <BlockMath>{'P = \\frac{F}{A}'}</BlockMath>
      </div>

      <h3 className="text-xl font-medium mt-6">Units of Pressure</h3>
      <p className="text-lg leading-relaxed mb-6">
        The unit of pressure is newtons per square meter (N/m²) in the SI system. Another name for the SI unit of pressure is the pascal (Pa):
      </p>
      <div className="mb-6">
        <BlockMath>{'1\\,Pa = 1\\,N/m^2'}</BlockMath>
      </div>
      <p className="text-lg leading-relaxed mb-6">
        In addition to pascal, there are other units of pressure such as millimeter mercury (mmHg), torr, atmosphere (atm), and pounds per square inch (psi) with their relations shown as follows:
      </p>
      <div className="mb-6">
        <BlockMath>{'1\\,atm = 760\\,mmHg = 760\\,torr = 101.3\\,kPa = 14.7\\,psi'}</BlockMath>
      </div>

      <h3 className="text-xl font-medium mt-6">Pressure in Gases</h3>
      <p className="text-lg leading-relaxed mb-6">
        As air particles move randomly in space, they eventually collide with the solid surfaces of any objects in that space. In each of these collisions, the particle exerts an impulsive force on the object. However, when a huge number of particles bombard a solid surface at a constant rate, these collisions collectively exert an approximately constant force on the object.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        As we blow up a balloon, we add air particles to the interior of the balloon; thus, there are more particles inside colliding with the walls. This greater collision rate results in a larger outward average force on each part of the balloon’s surface, causing it to expand outward. The force exerted by the gas on the walls of the container per unit contact area gives the pressure of the gas.
      </p>

      <h3 className="text-xl font-medium mt-6">Absolute, Gauge, and Vacuum Pressures</h3>
      <p className="text-lg leading-relaxed mb-6">
        The actual pressure at a given position is called the absolute pressure, and it is measured relative to absolute vacuum (i.e., absolute zero pressure). Most pressure-measuring devices, however, are calibrated to read zero in the atmosphere, and so they indicate the difference between the absolute pressure and the local atmospheric pressure. This difference is called the gauge pressure <InlineMath>{'P_{gauge}'}</InlineMath>.
      </p>
      <div className="mb-6">
        <BlockMath>{'P_{gauge} = P_{abs} - P_{atm}'}</BlockMath>
      </div>

      <h3 className="text-xl font-medium mt-6">Density</h3>
      <p className="text-lg leading-relaxed mb-6">
        Density is an important characteristic of substances. It is crucial, for example, in determining whether an object sinks or floats in a fluid. It directly affects the pressure of fluids (gases and liquids). Density is much more useful for gases.
      </p>

      <p className="text-lg leading-relaxed mb-6">usually 
        DensDensme:
      </p>
      <div className="mb-6">
        <BlockMath>{'\\rho = \\frac{m}{V}'}</BlockMath>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left text-sm">
            <thead>
            <tr className="bg-gray-100">
                <th className="py-2 px-4">Substance</th>
                <th className="py-2 px-4">ρ (kg/m³)</th>
                <th className="py-2 px-4">Substance</th>
                <th className="py-2 px-4">ρ (kg/m³)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="py-2 px-4">Air</td>
                <td className="py-2 px-4">1.29</td>
                <td className="py-2 px-4">Iron</td>
                <td className="py-2 px-4">7.86 x10³</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Aluminum</td>
                <td className="py-2 px-4">2.70 x10³</td>
                <td className="py-2 px-4">Carbon Steel</td>
                <td className="py-2 px-4">7.84 x10³</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Benzene</td>
                <td className="py-2 px-4">0.879 x10³</td>
                <td className="py-2 px-4">Mercury</td>
                <td className="py-2 px-4">13.6 x10³</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Brass</td>
                <td className="py-2 px-4">8.4 x10³</td>
                <td className="py-2 px-4">Oxygen</td>
                <td className="py-2 px-4">1.43</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Copper</td>
                <td className="py-2 px-4">8.92 x10³</td>
                <td className="py-2 px-4">Nitrogen</td>
                <td className="py-2 px-4">1.25</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Fresh Water</td>
                <td className="py-2 px-4">1.00 x10³</td>
                <td className="py-2 px-4">Sea Water</td>
                <td className="py-2 px-4">1.03 x10³</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Gold</td>
                <td className="py-2 px-4">19.3 x10³</td>
                <td className="py-2 px-4">Silver</td>
                <td className="py-2 px-4">10.5 x10³</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Ice</td>
                <td className="py-2 px-4">0.917 x10³</td>
                <td className="py-2 px-4">Tin</td>
                <td className="py-2 px-4">7.30 x10³</td>
            </tr>
            </tbody>
        </table>
        </div>


      <h3 className="text-xl font-medium mt-6">Specific Gravity</h3>
      <p className="text-lg leading-relaxed mb-6">
        The density of a substance is sometimes given relative to the density of another substance, called the specific gravity or relative density. It is defined as the ratio of the density of a substance to the density of some standard substance (usually water at 4°C, for which <InlineMath>{'\\rho_{H_2O} = 1000 \\text{kg/m}^3'}</InlineMath>).
      </p>
      <div className="mb-6">
        <BlockMath>{'S = \\frac{\\rho}{\\rho_{H_2O}}'}</BlockMath>
      </div>

      <h3 className="text-xl font-medium mt-6">Ideal Gas Equation</h3>
      <p className="text-lg leading-relaxed mb-6">
        The ideal gas law relates the density and pressure of gases. It is expressed as:
      </p>
      <div className="mb-6">
        <BlockMath>{'P = \\frac{m}{V} R_{specific} T'}</BlockMath>
      </div>
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full table-auto text-left text-sm">
            <thead>
            <tr className="bg-gray-100">
                <th className="py-2 px-4">Substance</th>
                <th className="py-2 px-4">SG</th>
                <th className="py-2 px-4">Substance</th>
                <th className="py-2 px-4">SG</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="py-2 px-4">Air</td>
                <td className="py-2 px-4">0.00129</td>
                <td className="py-2 px-4">Seawater</td>
                <td className="py-2 px-4">1.025</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Blood (at 37°C)</td>
                <td className="py-2 px-4">1.06</td>
                <td className="py-2 px-4">Gasoline</td>
                <td className="py-2 px-4">0.68</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Ethyl Alcohol</td>
                <td className="py-2 px-4">0.790</td>
                <td className="py-2 px-4">Mercury</td>
                <td className="py-2 px-4">13.6</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Gold</td>
                <td className="py-2 px-4">19.3</td>
                <td className="py-2 px-4">Bones</td>
                <td className="py-2 px-4">1.7-2.0</td>
            </tr>
            <tr>
                <td className="py-2 px-4">Ice (0°C)</td>
                <td className="py-2 px-4">0.916</td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4"></td>
            </tr>
            </tbody>
        </table>
        </div>

    </div>
    
  );
};

export default FluidMechanics;
