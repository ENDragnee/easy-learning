"use client";

import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function RotationalMotion() {
  return (
    <div className="px-6 sm:px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">2.2 Rotational Motion</h1>
      <p>
        Rotational motion is the motion of an object in a circle around a fixed
        axis. Examples include the rotation of the Earth around its axis, the
        flywheel of a sewing machine, a ceiling fan, and the wheels of a car.
      </p>
      <p>
        A disc performing rotational motion (see Figure 2.7) rotates all its
        particles around a fixed axis called the axis of rotation. An object can
        rotate clockwise or counterclockwise.
      </p>
      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-4">Rigid Body</h2>
      <p>
        A rigid body is an object with a perfectly defined and unchanging shape.
        No matter the size of the force, the distance between any two particles
        within the object remains constant.
      </p>
      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-4">
        Angular Displacement and Angular Velocity
      </h2>
      <div className="relative aspect-w-16 aspect-h-9 sm:aspect-h-[10] mb-6">
        <iframe
          src="https://www.youtube.com/embed/Rlj3ikcTYu0"
          className="w-full h-full"
          style={{ minHeight: "450px" }} // Ensures larger height
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <h3 className="text-lg sm:text-xl font-semibold mt-4">Angular Displacement</h3>
      <p>
        As shown in Figure 2.8, a particle on a rigid disc moves through an
        angle <InlineMath math="\theta" />. Because the object is rigid, all its
        particles rotate through the same angle. This angle is defined as the
        angular displacement, <InlineMath math="\Delta \theta" />:
      </p>
      <BlockMath math="\Delta \theta = \theta_f - \theta_0" />
      <p>
        Angular displacement is typically measured in radians. One complete
        revolution equals <InlineMath math="2\pi" /> radians or 360 degrees.
      </p>
      <h3 className="text-lg sm:text-xl font-semibold mt-4">Angular Velocity</h3>
      <p>
        The rate of change of angular displacement is angular velocity
        <InlineMath math="\omega" />:
      </p>
      <BlockMath math="\omega = \frac{\Delta \theta}{\Delta t}" />
      <p>
        Angular velocity is measured in radians per second (
        <InlineMath math="\text{rad/s}" />
        ).
      </p>
      <h3 className="text-lg sm:text-xl font-semibold mt-4">Angular Acceleration</h3>
      <p>
        If angular velocity changes over time, the object experiences angular
        acceleration <InlineMath math="\alpha" />:
      </p>
      <BlockMath math="\alpha = \frac{\Delta \omega}{\Delta t}" />
      <p>
        Angular acceleration is measured in radians per second squared (
        <InlineMath math="\text{rad/s}^2" />
        ).
      </p>
      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-4">
        Direction of Angular Velocity and Angular Acceleration
      </h2>
      <p>
        Angular velocity and acceleration are vectors. Their directions follow
        the right-hand rule: curl the fingers of your right hand in the
        direction of rotation, and your thumb points in the direction of the
        angular velocity.
      </p>
      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-4">
        Equations of Motion for Constant Angular Acceleration
      </h2>
      <p>
        Analogous to linear motion, rotational motion with constant angular
        acceleration follows these equations:
      </p>
      <ul className="list-disc ml-4 sm:ml-6 mb-4">
        <li>
          <BlockMath math="\omega_f = \omega_0 + \alpha \Delta t" />
        </li>
        <li>
          <BlockMath math="\Delta \theta = \omega_0 \Delta t + \frac{1}{2} \alpha \Delta t^2" />
        </li>
        <li>
          <BlockMath math="\omega_f^2 = \omega_0^2 + 2 \alpha \Delta \theta" />
        </li>
      </ul>
      <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-4">
        Kinematic Analogies for Rotational and Linear Motion
      </h2>
      <p>
        Rotational kinematics parallels linear kinematics. Key analogies
        include:
      </p>
      <ul className="list-disc ml-4 sm:ml-6 mb-4">
        <li>
          Angular displacement <InlineMath math="\Delta \theta" /> corresponds
          to linear displacement <InlineMath math="\Delta s" />.
        </li>
        <li>
          Angular velocity <InlineMath math="\omega" /> corresponds to linear
          velocity
          <InlineMath math="v" />.
        </li>
        <li>
          Angular acceleration <InlineMath math="\alpha" /> corresponds to
          linear acceleration <InlineMath math="a" />.
        </li>
      </ul>

      <div className="relative w-full overflow-hidden aspect-video">
        <iframe
          scrolling="no"
          src="https://www.geogebra.org/material/iframe/id/177707/width/850/height/600/border/888888/rc/false/ai/false/sdz/false/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto"
          className='responsive-iframe top-0 left-0 w-full h-full'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
