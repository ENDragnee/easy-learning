'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function PlanetaryMotionAndKeplersLaws() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">2.4 Planetary Motion and Kepler’s Laws</h1>
      <p>
        The planets orbit the Sun, maintaining their respective distances and
        not crossing each other as they revolve. Kepler’s laws describe how
        planetary bodies orbit around the Sun.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Kepler’s Laws</h2>
      <p>
        For thousands of years, humans have observed celestial objects' movements. 
        Early observations led to the geocentric model, placing Earth at the center of 
        the Universe, formalized by Claudius Ptolemy (c.100–c.170) and accepted for 1400 years.
      </p>
      <p>
        In 1543, Nicolaus Copernicus proposed the heliocentric model, where Earth and 
        other planets revolve in circular orbits around the Sun. Later, Tycho Brahe, a 
        Danish astronomer, meticulously recorded planetary positions, and Johannes Kepler, 
        his assistant, used Brahe's data to derive Kepler's three laws of planetary motion.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Kepler’s First Law</h3>
      <p>
        Kepler’s first law, the *law of ellipses*, states that the orbit of a planet
        around the Sun is an ellipse with the Sun at one focus. As the planet orbits,
        the distance between the planet and the Sun constantly changes.
      </p>
      <p>
        An ellipse is a closed curve where the sum of the distances from any point on
        the curve to two fixed points (the foci) is constant.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Kepler’s Second Law</h3>
      <p>
        Kepler’s second law, the *law of equal areas*, states that a line joining
        the Sun and a planet sweeps out equal areas during equal time intervals.
      </p>
      <p>
        This means that planets do not move at a constant speed along their orbits.
        Instead, they move faster when closer to the Sun (perihelion) and slower
        when farther away (aphelion).
      </p>
      <p>
        For example, as shown in Figure 2.21, the time it takes a planet to move
        from position A to B (sweeping out area A1) is the same as the time it
        takes to move from position C to D (sweeping out area A2) or from E to F
        (sweeping out area A3). The areas A1, A2, and A3 are all equal.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-4">Kepler’s Third Law</h3>
      <p>
        Kepler’s third law compares the orbital period and the average radius of
        orbit of different planets. The orbital period <InlineMath math="T" /> is the time taken for
        one complete revolution around the Sun.
      </p>
      <p>
        The law states that the ratio of <InlineMath math="T^2" /> (the square of the orbital period) 
        to <InlineMath math="R^3" /> (the cube of the average orbital radius) is the same for all planets:
      </p>
      <BlockMath math="\frac{T^2}{R^3} = K" />
      <p>
        Here, <InlineMath math="K" /> is a proportionality constant that is nearly identical for all
        planets. This equation applies to both circular and elliptical orbits
        and is independent of the planet's mass.
      </p>
      <p>
        For instance, Table 2.2 compares the orbital period and average distance
        from the Sun for Earth and Mars, demonstrating that the <InlineMath math="T^2/R^3" /> ratio is
        consistent for all planets.
      </p>

      <table className="w-full mt-6 border-collapse border border-gray-300 text-center">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Planet</th>
            <th className="border border-gray-300 px-4 py-2">Period (s)</th>
            <th className="border border-gray-300 px-4 py-2">Average Distance (m)</th>
            <th className="border border-gray-300 px-4 py-2">
              <InlineMath math="T^2/R^3 \, (s^2/m^3)" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Earth</td>
            <td className="border border-gray-300 px-4 py-2">
              <InlineMath math="3.156 \times 10^7" />
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <InlineMath math="1.4957 \times 10^{11}" />
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <InlineMath math="2.977 \times 10^{-19}" />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Mars</td>
            <td className="border border-gray-300 px-4 py-2">
              <InlineMath math="5.93 \times 10^7" />
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <InlineMath math="2.278 \times 10^{11}" />
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <InlineMath math="2.975 \times 10^{-19}" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
