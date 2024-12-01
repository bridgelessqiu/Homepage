import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-yellow-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Days
          </h1>

        </div>

        <div className="container py-12">
        
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-300 to-blue-300 text-transparent bg-clip-text pb-4">
            2024
        </h1>

        <div className="rounded overflow-hidden shadow-xl bg-sky-900/20">
        <div className="px-3 py-3">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-red-300 to-blue-500 text-transparent bg-clip-text pb-4">
            Nov 30th
        </h1>
          <ul className="space-y-2 list-decimal list-inside">
          <li className="rounded-md shadow-sm">
            Started working on a new version of my website. Finished most sections.
          </li>

          <li className="rounded-md shadow-sm">
            Completed a draft plan for <strong>Nov 30th 2024 - May 10th 2025</strong>. 
          </li>
        </ul>
        </div>      
        </div>

        </div>
      </div>
    </>
  )
}
