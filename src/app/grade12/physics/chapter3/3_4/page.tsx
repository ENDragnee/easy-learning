'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function FluidMechanics() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">Fluid Mechanics</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3.4 Fluid Flow</h2>
      <p>
        Fluid flow is caused by differences in pressure. When the pressure in one region of the fluid is lower than in another region, the fluid tends to flow from the higher pressure region toward the lower pressure region. For example, large masses of air in Earth’s atmosphere move from regions of high pressure into regions of low pressure, creating what we call wind.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Steady and Turbulent Fluid Flow</h3>
      <p>
        When fluid is in motion, its flow can be characterized as steady fluid flow if each particle of the fluid follows a smooth path such that the paths of different particles never cross each other. In steady flow, every fluid particle arriving at a given point in space has the same velocity. Laminar flow always occurs when the fluid flow is at low velocity and in small diameter pipes.
      </p>
      <p>
        Above a certain critical speed, turbulent fluid flow occurs. Turbulent flow is irregular flow characterized by small whirlpool-like regions. The adjacent layers of the fluid cross each other and move randomly in a zigzag manner. Turbulent flow occurs when the velocity of the fluid is high and it flows through larger diameter pipes.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Viscosity</h3>
      <p>
        Just as a solid surface is acted upon by a frictional force when it slides over another solid, there is also an internal frictional force in liquids, called viscosity, when two adjacent layers of fluid try to move relative to each other. Viscosity causes part of the fluid’s kinetic energy to be transformed into internal energy. This mechanism is similar to the one by which the kinetic energy of an object sliding over a rough surface decreases.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Streamline and Tube of Flow</h3>
      <p>
        The path taken by a fluid particle under steady flow is called a streamline. The velocity of the particle is always tangent to the streamline. A set of streamlines forms a tube of flow. In laminar flow, fluid particles cannot flow into or out of the sides of this tube; if they could, the streamlines would cross, resulting in turbulent flow.
      </p>
        <iframe
          src="https://phet.colorado.edu/sims/cheerpj/fluid-pressure-and-flow/latest/fluid-pressure-and-flow.html?simulation=fluid-pressure-and-flow"
          width="800"
          height="600"
          allowFullScreen
        ></iframe>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Flow Rate</h2>
      <p>
        Flow rate <InlineMath>{'Q'}</InlineMath> is defined as the volume of fluid passing by a certain point through an area over a period of time:
      </p>
      <BlockMath>{'Q = \\frac{V}{t}'}</BlockMath>
      <p>
        Where <InlineMath>{'V'}</InlineMath> is the volume of fluid, and <InlineMath>{'t'}</InlineMath> is the elapsed time. The SI unit for flow rate is <InlineMath>{'m^3/s'}</InlineMath>, though other units are also commonly used.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Equation of Continuity</h2>
      <p>
        The equation of continuity describes how an incompressible fluid flows through a pipe of varying radius. Since the fluid is incompressible, the same amount of fluid must flow past any point in the pipe during a given time. Thus, as the cross-sectional area of the pipe decreases, the velocity of the fluid must increase to maintain the flow rate. The equation of continuity is given by:
      </p>
      <BlockMath>{'Q_1 = Q_2 \quad A_1 v_1 = A_2 v_2'}</BlockMath>
      <p>
        Where <InlineMath>{'v_1'}</InlineMath> and <InlineMath>{'v_2'}</InlineMath> are the average speeds of the fluid at points 1 and 2, and <InlineMath>{'A_1'}</InlineMath> and <InlineMath>{'A_2'}</InlineMath> are the corresponding cross-sectional areas.
      </p>
      <p>
        This equation is valid for any incompressible fluid. However, for compressible fluids like gases, the equation must be applied with caution, especially when they are subjected to significant compression or expansion.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Bernoulli's Principle</h2>
      <p>
        As a fluid’s speed increases, the pressure that the moving fluid exerts on a surface decreases. This is known as Bernoulli’s principle. It states that: 
      </p>
      <BlockMath>{'P + \\frac{1}{2} \\rho v^2 + \\rho g h = \\text{constant}'}</BlockMath>
      <p>
        Where <InlineMath>{'P'}</InlineMath> is the pressure, <InlineMath>{'\\rho'}</InlineMath> is the fluid’s density, <InlineMath>{'v'}</InlineMath> is the velocity of the fluid, and <InlineMath>{'h'}</InlineMath> is the height. This principle explains why pressure decreases as the speed of the fluid increases.
      </p>
      <iframe
        scrolling="no"
        src="https://www.geogebra.org/material/iframe/id/1719715/width/985/height/696/border/888888/rc/false/ai/false/sdz/false/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto"
        width="985px"
        height="696px"
        style={{ border: "0px" }}
      ></iframe>


      <h3 className="text-xl font-semibold mt-6 mb-4">Applications of Fluid Flow</h3>
      <p>
        Fluid flow is important in biological systems, such as the flow of blood through blood vessels. Blood pressure against the walls of a vessel depends on how fast the blood is moving. When blood is moving faster, pressure decreases. A similar principle explains the sound of snoring. As air moves through a narrow passage above the soft palate, the pressure drops, causing the palate to move and create the sound.
      </p>
    </div>
  );
}
