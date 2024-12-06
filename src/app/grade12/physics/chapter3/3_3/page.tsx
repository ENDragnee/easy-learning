'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function FluidMechanics() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">Fluid Mechanics</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Archimedes' Principle</h2>
      <p>
        It is extremely difficult to push a ball down under water because of the large upward force exerted by the water on the ball. The upward force exerted by a fluid on any immersed object is called a buoyant force. Where does this buoyant force come from? Buoyant force is based on the fact that pressure increases with depth in a fluid. This means that the upward force on the bottom of an object in a fluid is greater than the downward force on the top of the object. There is a net upward, or buoyant force on any object in any fluid. Buoyant force is also called up-thrust force. 
      </p>
      <p>
        The magnitude of this buoyant force equals the weight of the fluid displaced by the object. This principle is known as Archimedes' Principle, which states that the buoyant force on an object equals the weight of the fluid it displaces.
      </p>
      
      <BlockMath>{'F_B = W_{fluid}'}</BlockMath>

      <h3 className="text-xl font-semibold mt-6 mb-4">Buoyant Force on a Submerged Object</h3>
      <p>
        To understand the origin of the buoyant force, consider a cylinder of solid material immersed in a liquid. The pressure <InlineMath>{'P_2'}</InlineMath> at the bottom of the cylinder is greater than the pressure <InlineMath>{'P_1'}</InlineMath> at the top by an amount <InlineMath>{'\\rho_{fluid} g h'}</InlineMath>, where <InlineMath>{'h'}</InlineMath> is the height of the cylinder and <InlineMath>{'\\rho_{fluid}'}</InlineMath> is the density of the fluid. The pressure at the bottom of the cylinder causes an upward force equal to <InlineMath>{'P_2 A'}</InlineMath>, and the pressure at the top causes a downward force equal to <InlineMath>{'P_1 A'}</InlineMath>.
      </p>
      <p>
        The resultant force, or buoyant force, is given by:
      </p>
      <BlockMath>{'F_B = P_2 A - P_1 A = \\rho_{fluid} g h A'}</BlockMath>
      <p>
        Where <InlineMath>{'A'}</InlineMath> is the area of the bottom face, and <InlineMath>{'V_{disp} = A h'}</InlineMath> is the volume of the displaced fluid. This results in the buoyant force formula:
      </p>
      <BlockMath>{'F_B = \\rho_{fluid} g V_{disp}'}</BlockMath>

      <h3 className="text-xl font-semibold mt-6 mb-4">Totally Submerged Object</h3>
      <p>
        When an object is totally submerged in a fluid, the volume <InlineMath>{'V_{disp}'}</InlineMath> of the displaced fluid is equal to the volume of the object. The buoyant force on the object is given by:
      </p>
      <BlockMath>{'F_B = \\rho_{fluid} g V_{obj}'}</BlockMath>
      <p>
        If the object has mass <InlineMath>{'M'}</InlineMath> and density <InlineMath>{'\\rho_{obj}'}</InlineMath>, the weight of the object is <InlineMath>{'F_g = M g = \\rho_{obj} g V_{obj}'}</InlineMath>. The net force on the object is the difference between the buoyant force and the weight of the object:
      </p>
      <BlockMath>{'F_B - F_g = (\\rho_{fluid} - \\rho_{obj}) g V_{obj}'}</BlockMath>
      <p>
        If the density of the object is less than the density of the fluid, the object will experience an upward force and will rise. If the object's density is greater, it will sink. If the densities are equal, the object will remain in equilibrium.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Floating Object</h3>
      <p>
        For an object that is partially submerged and floating in a fluid, the upward buoyant force is balanced by the downward gravitational force. The volume of the fluid displaced is equal to the volume of the object submerged in the fluid, and the buoyant force is:
      </p>
      <BlockMath>{'F_B = \\rho_{fluid} g V_{disp}'}</BlockMath>
      <p>
        The weight of the object is given by <InlineMath>{'F_g = \\rho_{obj} g V_{obj}'}</InlineMath>. Since the object is in equilibrium, the two forces are equal, and we have the relation:
      </p>
      <BlockMath>{'\\rho_{fluid} g V_{disp} = \\rho_{obj} g V_{obj}'}</BlockMath>
      <p>
        This simplifies to the equation:
      </p>
      <BlockMath>{'\\frac{V_{disp}}{V_{obj}} = \\frac{\\rho_{obj}}{\\rho_{fluid}}'}</BlockMath>
      <p>
        This equation shows that the fraction of the volume of a floating object submerged in a fluid is equal to the ratio of the density of the object to that of the fluid.
      </p>
    </div>
  );
}
