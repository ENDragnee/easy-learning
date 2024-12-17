'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function RotationalDynamics() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-justify">
      <h1 className="text-3xl font-bold mb-6">2.3 Rotational Dynamics</h1>
      <p>
        Having developed the kinematics of rotational motion, we now turn to the
        dynamics of rotational motion. Just as force played a big role in linear
        dynamics, we have a torque in rotational dynamics. We begin by defining
        this quantity and showing how it acts on objects in rotational motion.
        Next, we relate torque to our study of kinematics through an equation
        very similar to Newton’s second law.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Torque</h2>
      <p>
        Torque is the rotational effect of force. Torque is what causes an
        object to acquire angular acceleration. If <InlineMath math="F" /> is the force acting on
        an object and <InlineMath math="r" /> is the distance from the axis of rotation to the point
        of application of the force, as shown in Figure 2.14, the magnitude of
        the torque is given by:
      </p>
      <BlockMath math="τ = r F \sin\theta" />
      <p>
        where <InlineMath math="\theta" /> is the angle between <InlineMath math="r" /> and <InlineMath math="F" /> when they are drawn from the
        same origin. Torque is a vector quantity, meaning it has both a
        direction and a magnitude. Its SI unit is Nm. The direction of the
        torque is along the axis of rotation. It is determined by a right-hand
        rule: when you curl the fingers of your right hand in the direction of
        the rotation, your thumb points in the direction of the torque.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Moment of Inertia (I)</h2>
      <p>
        The moment of inertia of an object is the quantitative measure of
        rotational inertia, just as mass is the quantitative measure of linear
        inertia in translational motion. The greater the moment of inertia of a
        rigid object or system of particles, the greater is its resistance to
        change in angular velocity about a fixed axis of rotation.
      </p>
      <p>
        The moment of inertia depends on the mass and axis of rotation of the
        body. The moment of inertia is given the symbol <InlineMath math="I" />. For a single
        point mass, as shown in Figure 2.16, rotating at radius <InlineMath math="r" /> from the
        axis of rotation, the moment of inertia is:
      </p>
      <BlockMath math="I = m r^2" />
      <p>
        From the formula, the SI unit of moment of inertia is <InlineMath math="\text{kg} \cdot \text{m}^2" />. Moment of
        inertia is a scalar quantity.
      </p>
      <p>
        The moment of inertia for more than one particle around a fixed axis is:
      </p>
      <BlockMath math="I = m_1 r_1^2 + m_2 r_2^2 + m_3 r_3^2 + \dots" />

      <h2 className="text-2xl font-semibold mt-6 mb-4">Torque and Angular Acceleration</h2>
      <p>
        When a number of individual forces act on a rotating object, we can
        calculate the net torque:
      </p>
      <BlockMath math="\tau_{\text{net}} = \tau_1 + \tau_2 + \tau_3 + \dots" />
      <p>
        We can relate the net torque to angular acceleration <InlineMath math="\alpha" />, by analogy
        with Newton’s second law of motion (<InlineMath math="F = ma" />). We replace <InlineMath math="m" /> by{' '}
        <InlineMath math="I" /> and <InlineMath math="a" /> by <InlineMath math="\alpha" />.
      </p>
      <BlockMath math="\tau = I \alpha" />
      <p>
        The angular acceleration of a rotating object is proportional to the net
        torque on the object.
      </p>
      <div className="relative w-full overflow-hidden aspect-video">
        <iframe src="https://phet.colorado.edu/sims/cheerpj/rotation/latest/rotation.html?simulation=torque"
          className='responsive-iframe top-0 left-0 w-full h-full'
          allowFullScreen>
        </iframe>
      </div>
    </div>
  );
}
