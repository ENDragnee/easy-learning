'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function UniversalGravitation() {
  return (
    <div className="px-6 sm:px-6 sm:text-xs md:text-base py-6 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">2.5 Newton’s Law of Universal Gravitation</h1>
      <p>
        Planets orbit the Sun. If we look more closely at the Solar System, we see almost
        unimaginable numbers of stars, galaxies, and other celestUniversalGravitationial objects orbiting one another 
        and interacting through gravity. All these motions are governed by gravitational force.
      </p>

      <p>
        Galileo Galilei (1564–1642) pointed out that heavy and light objects fall toward Earth 
        at the same rate (so long as air resistance is the same for each). But it took Sir Isaac 
        Newton (in 1666) to realize that this force of attraction between masses is universal.
      </p>

      <p>
        Newton proved that the force that causes, for example, an apple to fall toward the ground 
        is the same force that causes the Moon to orbit Earth. This universal force also acts 
        between the Earth and the Sun, or any other star and its satellites. Each attracts the other.
      </p>

      <p>
        Newton defined this attraction mathematically. The force of attraction between two masses 
        is directly proportional to the product of their masses and inversely proportional to the 
        square of the distance between their centers:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="F = \frac{G m_1 m_2}{r^2}" />
      </div>
      <p>
        where <InlineMath math="G" /> is the universal gravitational constant (
        <InlineMath math="6.67 \times 10^{-11} \, \text{Nm}^2/\text{kg}^2" />
        ), <InlineMath math="m_1" /> and <InlineMath math="m_2" /> are the masses of the two 
        objects, and <InlineMath math="r" /> is the distance between their centers.
      </p>
      <iframe src="https://phet.colorado.edu/sims/html/gravity-force-lab/latest/gravity-force-lab_en.html"
        width="800"
        height="600"
        className='responsive-iframe top-0 left-0 w-full h-full'
        allowFullScreen>
      </iframe>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Acceleration Due to Gravity</h2>
      <p>
        The gravitational force is always attractive and depends only on the masses involved and the 
        distance between them. By substituting <InlineMath math="g" /> for <InlineMath math="a" /> 
        in Newton’s second law of motion, <InlineMath math="F = ma" />, we get:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="F_g = mg" />
      </div>
      <p>
        Combining this with the universal gravitation equation gives:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="mg = \frac{G M_E m}{r_E^2}" />
      </div>
      <p>
        Cancelling <InlineMath math="m" /> and substituting values for <InlineMath math="G" />, 
        the Earth's mass <InlineMath math="M_E" />, and radius <InlineMath math="r_E" />, we 
        calculate <InlineMath math="g" />:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="g = \frac{(6.673 \times 10^{-11}) (5.97 \times 10^{24})}{(6.38 \times 10^6)^2} \approx 9.8 \, \text{m/s}^2" />
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Centripetal Force and Orbital Motion</h2>
      <p>
        Newton’s law of universal gravitation also explains orbital motion. A force pulling an object 
        toward the center of a circle is called centripetal force. For planets, this force is the 
        gravitational pull of the Sun. Without it, planets would travel in straight lines.
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="F_c = \frac{mv^2}{r}" />
      </div>
      <p>
        Here, <InlineMath math="v" /> is the tangential speed, <InlineMath math="r" /> is the radius 
        of the orbit, and <InlineMath math="m" /> is the mass of the planet.
      </p>

      <p>
        The gravitational attraction of the Sun provides the centripetal force. Combining centripetal 
        force with the universal gravitation equation:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="\frac{m_p v^2}{r} = \frac{G M_s m_p}{r^2}" />
      </div>
      <p>
        Simplifying:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="v^2 = \frac{G M_s}{r}" />
      </div>
      <p>
        The orbital speed <InlineMath math="v" /> is related to the orbital period 
        <InlineMath math="T" /> by:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="v = \frac{2\pi r}{T}" />
      </div>
      <p>
        Substituting:
      </p>
      <div className='overflow-x-auto text-wrap text-xs'>
        <BlockMath math="T^2 = \frac{4\pi^2 r^3}{G M_s}" />
      </div>
      <p>
        This is Kepler’s third law, where the square of the period is proportional to the cube of 
        the distance from the Sun.
      </p>
      <iframe src="https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_en.html"
        className='responsive-iframe top-0 left-0 w-full h-full'
        width="800"
        height="600"
        allowFullScreen>
      </iframe>
    </div>
  );
}
