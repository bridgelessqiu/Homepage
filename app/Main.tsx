import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          {/* <div className="flex flex-col py-4 gap-10 text-xl"> 
          </div> */}

          <h1 className="text-7xl font-bold bg-gradient-to-r from-lime-300 to-blue-700 text-transparent bg-clip-text">
            Hello, 你好!
          </h1>

          <div className="flex flex-col py-4 gap-10 text-xl"> 
          </div>
          
          <div className="flex flex-col py-1.5 gap-10 text-xl"> 


          <p>
           My name is <strong><span className = 'text-2xl text-orange-200'>Zirou Qiu</span></strong>. 
           
           I am a Ph.D. student in <strong><span className = 'text-xl'>C</span></strong>omputer <strong><span className = 'text-xl'>S</span></strong>cience at the <a className = 'no-underline hover:underline decoration-yellow-200' href = 'https://engineering.virginia.edu/department/computer-science'>University of Virginia</a> working with <a className = 'no-underline hover:underline decoration-yellow-200' href = 'https://scholar.google.com/citations?user=diIore8AAAAJ&hl=en'>Madhav Marathe</a>.
          </p>

          {/* <p>
            I am also a research assistant at the <a className = 'no-underline hover:underline text-blue-200' href = 'https://biocomplexity.virginia.edu/'>Biocomplexity Institute</a>.
          </p> */}

          <p>
            I study the foundations of large-scale <span className = 'text-orange-200'><strong> complex systems </strong></span>(e.g., social systems, economics systems, and multi-agent systems) using <span className = 'text-orange-200'><strong>machine learning</strong></span>, <span className = 'text-orange-200'><strong>optimization</strong></span>, and <span className = 'text-orange-200'><strong>computational modeling</strong></span>.
          </p>

          <p>
            I develop formal <span className = 'text-orange-200'><strong>frameworks</strong></span> and <span className = 'text-orange-200'><strong>algorithms</strong></span> to simulate, learn and optimize these large systems, aiming to <span className = 'select-text'>improve system efficiency</span>, understand system behaviors, and benefit the social good.
          </p>

          </div>

          <div className="flex flex-col py-4 gap-10 text-xl"> 
          </div>

          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-300 to-blue-700 text-transparent bg-clip-text">
            Research Interests
          </h1>

          <ul className="list-disc list-inside text-lg">
            <li>Optimization</li>
            <li>Computational Economics & Social Science</li>
            <li>Game Theory</li>
            <li>Machine Learning</li>
            <li>Mathematical Programming</li>
          </ul>

          <div className="flex flex-col py-4 gap-10 text-xl"> 
          </div>

          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-300 to-blue-700 text-transparent bg-clip-text">
            Select Papers
          </h1>

          <ul className="space-y-4">
          <li className="rounded-md shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-200">
                <a href="https://zirouq.me/assets/Spatial_resources.pdf" target='_blank' className="hover:underline">
                  [1] Welfare Optimization for Resource Allocation with Peer Effects
                </a>
              </h3>
              <span className = 'text-yellow-100'>
                <strong>In Submission</strong>
              </span>
            </div>
            <p className="pt-2 text-sm">
              <strong>Zirou Qiu</strong>, Daniel J. Rosenkrantz, Matthew O. Jackson, Simon A. Levin, S. S. Ravi, Richard Stearns, Madhav Marathe
            </p>
          </li>
            
          
          <li className="rounded-md shadow-sm pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-200">
                <a href="https://arxiv.org/pdf/2405.06884" target='_blank' className="hover:underline">
                  [2] Efficient PAC Learnability of Dynamical Systems Over Multilayer Networks
                </a>
              </h3>
              <span className = 'text-yellow-100'>
                <strong>ICML-24</strong>
              </span>
            </div>
            <p className="pt-2 text-sm">
              <strong>Zirou Qiu</strong>, Abhijin Adiga, Madhav Marathe, S.S. Ravi, Daniel Rosenkrantz, Richard Stearns and Anil Vullikanti
            </p>
          </li>

          <li className="rounded-md shadow-sm pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-200">
                <a href="https://arxiv.org/pdf/2301.02876" target='_blank' className="hover:underline">
                  [3] Assigning Agents to Increase Network-Based Neighborhood Diversity
                </a>
              </h3>
              <span className = 'text-yellow-100'>
                <strong>AAMAS-23</strong>
              </span>
            </div>
            <p className="pt-2 text-sm">
              <strong>Zirou Qiu</strong>, Andrew Yuan, Chen Chen, Madhav Marathe, S.S. Ravi, Daniel Rosenkrantz, Richard Stearns and Anil Vullikanti.
            </p>
          </li>

          <li className="rounded-md shadow-sm pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-200">
                <a href="https://arxiv.org/pdf/2301.02889" target='_blank' className="hover:underline">
                  [4] Networked Anti-Coordination Games Meet Graphical Dynamical Systems: Equilibria and Convergence
                </a>
              </h3>
              <span className = 'text-yellow-100'>
                <strong>AAAI-23</strong>
              </span>
            </div>
            <p className="pt-2 text-sm">
              <strong>Zirou Qiu</strong>, Chen Chen, Madhav Marathe, S.S. Ravi, Daniel Rosenkrantz, Richard Stearns, Anil Vullikanti
            </p>
          </li>

          
          <li className="rounded-md shadow-sm pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-blue-200">
                <a href="https://www.pnas.org/doi/abs/10.1073/pnas.2123355119" target='_blank' className="hover:underline">
                  [5] Understanding the Coevolution of Mask Wearing and Epidemics: A Network Perspective
                </a>
              </h3>
              <span className = 'text-yellow-100'>
                <strong>PNAS-22</strong>
              </span>
            </div>
            <p className="pt-2 text-sm">
              <strong>Zirou Qiu</strong>, Baltazar Espinoza, Vítor V. Vasconcelos, Chen Chen, Sara M. Constantino, Stefani A. Crabtree, Luojun Yang, Anil Vullikanti, Jiangzhuo Chen, Jörgen Weibull, Kaushik Basu, Avinash Dixit, Simon Levin, Madhav Marathe
            </p>
          </li>
        </ul>

          {/* <ul className="space-y-4">
            <li className="rounded-md shadow-sm">
              <h3 className="text-lg font-semibold">
                <a href="#" className="hover:underline">
                  Welfare Optimization for Resource Allocation with Peer Effects
                </a>
              </h3>
              <p className="text-sm">
                Zirou Qiu, Daniel J. Rosenkrantz, Matthew O. Jackson, Simon A.Levin, S. S. Ravi, Richard Stearns, Madhav Marathe • Published in: <em>Journal of Optimization</em>, 2023
              </p>
            </li>
          </ul> */}

        </div>
        {/* <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul> */}
      </div>

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/pubs"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All notes"
          >
            All Papers &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
