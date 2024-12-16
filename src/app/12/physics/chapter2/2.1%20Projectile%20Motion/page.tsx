'use client';

import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function ProjectileMotion() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">2.1 Projectile Motion</h1>
      <p>
        A projectile is a thrown, fired, or released object that moves only
        under the influence of gravitational force. The projectile acceleration
        is <InlineMath math="g = 9.8 \, \text{m/s}^2" />. Anyone who has observed the motion of
        a ball kicked by a football player (Figure 2.1b) has observed projectile
        motion. The ball moves in a curved path and returns to the ground. Other
        examples of projectile motion include a cannonball fired from a cannon,
        a bullet fired from a gun, the flight of a golf ball, and a jet of water
        escaping a hose.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Assumptions of Projectile Motion
      </h2>
      <ol className="list-decimal ml-6 mb-6">
        <li>
          The free-fall acceleration is constant over the range of motion and is
          always directed downward. It is the acceleration due to gravity (
          <InlineMath math="g=9.8 \, \text{m/s}^2" />).
        </li>
        <li>The effect of air resistance is negligible.</li>
        <li>
          The horizontal velocity is constant because the acceleration of the
          object does not have a vertical component.
        </li>
      </ol>

      <p>
        With these assumptions, the path of a projectile, called its trajectory,
        is a parabola. The horizontal and vertical components of a projectile’s
        motion are completely independent of each other and can be handled
        separately, with time <InlineMath math="t" /> as a common variable for both components.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Horizontal Projection
      </h2>
      <p>
        In this type of motion, the projectile is projected horizontally from a
        certain height. Its initial velocity along the vertical direction is
        zero, and it possesses only horizontal velocity at the beginning. Over
        time, due to gravity, it acquires a vertical component of velocity.
      </p>

      <h3 className="text-xl font-semibold mt-4">Horizontal Component</h3>
      <p>The projectile has zero acceleration along the \( x \)-direction:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <InlineMath math="v_x = v_{0x} \, (\text{constant})" />
        </li>
        <li>
          <InlineMath math="\Delta x = v_{0x} t" />
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Vertical Component</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <InlineMath math="v_y = v_{0y} + g t" />
        </li>
        <li>
          <InlineMath math="\Delta y = v_{0y} t + \frac{1}{2} g t^2" />
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Time of Flight</h2>
      <p>
        The time of flight is the time taken by the projectile to hit the
        ground. Using <InlineMath math="\Delta y = \frac{1}{2} g t^2" />, we calculate the total
        flight time.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Range</h2>
      <p>
        The range is the maximum horizontal distance traveled by the projectile.
        Using <InlineMath math="R = v_{0x} t" />, we can find the range.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Inclined Projectile Motion
      </h2>
      <p>
        When an object is projected at an angle <InlineMath math="\theta" />, its motion can be
        analyzed by breaking its initial velocity into horizontal and vertical
        components:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <InlineMath math="v_{0x} = v_0 \cos \theta" />
        </li>
        <li>
          <InlineMath math="v_{0y} = v_0 \sin \theta" />
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Key Equations</h3>
      <ul className="list-disc ml-6">
        <li>
          Horizontal displacement: <InlineMath math="\Delta x = v_0 \cos \theta t" />
        </li>
        <li>
          Vertical displacement: <InlineMath math="\Delta y = v_0 \sin \theta t + \frac{1}{2} g t^2" />
        </li>
        <li>
          Total time of flight (when starting and landing at the same height):
          <InlineMath math="t = \frac{2v_0 \sin \theta}{g}" />
        </li>
        <li>
          Maximum height: <InlineMath math="H = \frac{v_0^2 \sin^2 \theta}{2g}" />
        </li>
        <li>
          Range: <InlineMath math="R = \frac{v_0^2 \sin 2\theta}{g}" />
        </li>
      </ul>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mt-6 mb-4">
          Interactive Simulation
        </h2>
        <p>
          Explore the concepts of projectile motion using the interactive
          simulation below:
        </p>
        <div className='relative w-full overflow-hidden aspect-video'>
          <iframe
            src="https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_en.html"
            allowFullScreen
            className='responsive-iframe top-0 left-0 w-full h-full'
          ></iframe>
        </div>
      </div>
    </div>
  );
}
