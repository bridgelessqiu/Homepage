// import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Publications' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-yellow-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Papers
          </h1>
        </div>

        <div className="container py-12">
          <p>
            You may click the <span className = 'text-lime-200'><strong>title</strong></span> of a paper to view its pdf file.
          </p> 

          <div className="flex flex-col py-4 gap-10 text-xl"> 
          </div>

          <ul className="space-y-4 list-decimal">
          <li className="rounded-md shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-200">
                <a href="https://zirouq.me/assets/Spatial_resources.pdf" target='_blank' className="hover:underline">
                  Welfare Optimization for Resource Allocation with Peer Effects
                </a>
              </h3>
              <span className = 'text-yellow-100'>
                <strong>In Submission</strong>
              </span>
            </div>
            <p className="pt-2 text-sm">
              <strong className='underline decoration-2'>Zirou Qiu</strong>, Daniel J. Rosenkrantz, Matthew O. Jackson, Simon A. Levin, S. S. Ravi, Richard Stearns, Madhav Marathe
            </p>
          </li>
            
          <li className="rounded-md shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-200">
                <a href="https://zirouq.me/assets/PAC_Noise.pdf" target='_blank' className="hover:underline">
                  Learning Discrete Dynamical Systems under Classification Noise
                </a>
              </h3>
              <span className = 'text-yellow-100'>
                <strong>In Submission</strong>
              </span>
            </div>
            <p className="pt-2 text-sm">
              <strong className = 'underline decoration-2'>Zirou Qiu</strong>*, Zakaria Mehrab*, Abhijin Adiga, Madhav Marathe, S.S. Ravi, Daniel Rosenkrantz, Richard Stearns and Anil Vullikanti
            </p>
          </li>

          <li className="rounded-md shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-200">
                <a href="https://zirouq.me/assets/Divorcing.pdf" target='_blank' className="hover:underline">
                  Theoretical Foundations for Parent Divorcing Transformations in Bayesian Networks
                </a>
              </h3>
              <span className = 'text-yellow-100'>
                <strong>In Submission</strong>
              </span>
            </div>
            <p className="pt-2 text-sm">
              <strong>With</strong> Daniel Rosenkrantz, Madhav V. Marathe and S. S. Ravi
            </p>
          </li>

          <li className="rounded-md shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-200">
                <a href="https://arxiv.org/pdf/2402.11686" target='_blank' className="hover:underline">
                  Learning the Topology and Behavior of Discrete Dynamical Systems
                </a>
              </h3>
              <span className = 'text-yellow-100'>
                <strong>AAAI-24</strong>
              </span>
            </div>
            <p className="pt-2 text-sm">
              <strong className = 'underline decoration-2'>Zirou Qiu</strong>, Abhijin Adiga, Madhav Marathe, S.S. Ravi, Daniel Rosenkrantz, Richard Stearns and Anil Vullikanti
            </p>
          </li>
          
          <li className="rounded-md shadow-sm pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-200">
                <a href="https://arxiv.org/pdf/2405.06884" target='_blank' className="hover:underline">
                  Efficient PAC Learnability of Dynamical Systems Over Multilayer Networks
                </a>
              </h3>
              <span className = 'text-yellow-100'>
                <strong>ICML-24</strong>
              </span>
            </div>
            <p className="pt-2 text-sm">
              <strong className = 'underline decoration-2'>Zirou Qiu</strong>, Abhijin Adiga, Madhav Marathe, S.S. Ravi, Daniel Rosenkrantz, Richard Stearns and Anil Vullikanti
            </p>
          </li>


          <li className="rounded-md shadow-sm pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-200">
                <a href="https://arxiv.org/pdf/2301.02876" target='_blank' className="hover:underline">
                  Assigning Agents to Increase Network-Based Neighborhood Diversity
                </a>
              </h3>
              <span className = 'text-yellow-100'>
                <strong>AAMAS-23</strong>
              </span>
            </div>
            <p className="pt-2 text-sm">
              <strong className = 'underline decoration-2'>Zirou Qiu</strong>, Andrew Yuan, Chen Chen, Madhav Marathe, S.S. Ravi, Daniel Rosenkrantz, Richard Stearns and Anil Vullikanti.
            </p>
          </li>

          <li className="rounded-md shadow-sm pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-200">
                <a href="https://arxiv.org/pdf/2301.02889" target='_blank' className="hover:underline">
                 Networked Anti-Coordination Games Meet Graphical Dynamical Systems: Equilibria and Convergence
                </a>
              </h3>
              <span className = 'text-yellow-100'>
                <strong>AAAI-23</strong>
              </span>
            </div>
            <p className="pt-2 text-sm">
              <strong className = 'underline decoration-2'>Zirou Qiu</strong>, Chen Chen, Madhav Marathe, S.S. Ravi, Daniel Rosenkrantz, Richard Stearns, Anil Vullikanti
            </p>
          </li>

          <li className="rounded-md shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-200">
                <a href="https://www.pnas.org/doi/10.1073/pnas.2216948120" target='_blank' className="hover:underline">
                  Airborne Disease Transmission During Indoor Gatherings over Multiple Time Scales
                </a>
              </h3>
              <span className = 'text-yellow-100'>
                <strong>PNAS-23</strong>
              </span>
            </div>
            <p className="pt-2 text-sm">
              Avinash Dixit, Baltazar Espinoza, <strong className = 'underline decoration-2'>Zirou Qiu</strong>, Anil Vullikanti, and Madhav Marathe
            </p>
          </li>

          
          <li className="rounded-md shadow-sm pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-200">
                <a href="https://www.pnas.org/doi/abs/10.1073/pnas.2123355119" target='_blank' className="hover:underline">
                  Understanding the Coevolution of Mask Wearing and Epidemics: A Network Perspective
                </a>
              </h3>
              <span className = 'text-yellow-100'>
                <strong>PNAS-22</strong>
              </span>
            </div>
            <p className="pt-2 text-sm">
              <strong className = 'underline decoration-2'>Zirou Qiu</strong>, Baltazar Espinoza, Vítor V. Vasconcelos, Chen Chen, Sara M. Constantino, Stefani A. Crabtree, Luojun Yang, Anil Vullikanti, Jiangzhuo Chen, Jörgen Weibull, Kaushik Basu, Avinash Dixit, Simon Levin, Madhav Marathe
            </p>
          </li>

          <li className="rounded-md shadow-sm pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-200">
                <a href="https://proceedings.mlr.press/v162/rosenkrantz22a/rosenkrantz22a.pdf" target='_blank' className="hover:underline">
                  Efficiently Learning the Topology and Behavior of a Networked Dynamical System Via Active Queries
                </a>
              </h3>
              <span className = 'text-yellow-100'>
                <strong>ICML-22</strong>
              </span>
            </div>
            <p className="pt-2 text-sm">
              Daniel Rosenkrantz, <sup><strong>(α-β)</strong></sup> Abhijin Adiga, Madhav Marathe, <strong className = 'underline decoration-2'>Zirou Qiu</strong>, S.S. Ravi, Richard Stearns, Anil Vullikanti 
            </p>
          </li>

          <li className="rounded-md shadow-sm pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-200">
                <a href="https://arxiv.org/pdf/2301.04090" target='_blank' className="hover:underline">
                  Finding Nontrivial Minimum Fixed Points in Discrete Dynamical Systems
                </a>
              </h3>
              <span className = 'text-yellow-100'>
                <strong>AAAI-22</strong>
              </span>
            </div>
            <p className="pt-2 text-sm">
              <strong className = 'underline decoration-2'>Zirou Qiu</strong>, Chen Chen, Madhav Marathe, S.S. Ravi, Daniel Rosenkrantz, Richard Stearns, Anil Vullikanti
            </p>
          </li>

          <li className="rounded-md shadow-sm pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-200">
                <a href="https://arxiv.org/pdf/1911.05486" target='_blank' className="hover:underline">
                  ELRUNA: Elimination Rule-based Network Alignment
                </a>
              </h3>
              <span className = 'text-yellow-100'>
                <strong>ACM-JEA-21</strong>
              </span>
            </div>
            <p className="pt-2 text-sm">
              <strong className = 'underline decoration-2'>Zirou Qiu</strong>, Ruslan Shaydulin, Xiaoyuan Liu, Yuri Alexeev, Christopher S. Henry, Ilya Safro
            </p>
          </li>
        </ul>

        </div>
      </div>
    </>
  )
}