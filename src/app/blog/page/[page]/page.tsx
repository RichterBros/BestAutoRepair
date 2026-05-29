import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getBlogPostsPage, isContentfulConfigured } from '@/lib/contentful'

export const revalidate = 60

type Params = { page: string }

export async function generateStaticParams(): Promise<Params[]> {
  // Pre-render first page only; additional pages will be ISR on-demand
  return [{ page: '1' }]
}

export default async function BlogPagedPage({ params }: { params: Params }) {
  const pageNum = Number(params.page)
  const safePage = Number.isFinite(pageNum) && pageNum > 0 ? Math.floor(pageNum) : 1

  if (!isContentfulConfigured()) {
    return (
      <div className="container mx-auto px-4 py-12 text-white">
        <h1 className="text-3xl font-bold mb-6">AutoCare Insider</h1>
        <p className="opacity-80">Contentful is not configured. Add your API keys to .env.local to enable the blog.</p>
      </div>
    )
  }

  const { posts, page, totalPages } = await getBlogPostsPage({ page: safePage, pageSize: 3 })

  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold mb-8">AutoCare Insider</h1>
      {posts.length === 0 ? (
        <p className="opacity-80">No posts found.</p>
      ) : (
        <>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <li key={post.id} className="bg-[rgb(30,46,67)] overflow-hidden shadow card-angled">
                {post.heroImageUrl ? (
                  <div className="relative w-full h-40">
                    <Image src={post.heroImageUrl} alt="" fill sizes="33vw" className="object-cover" />
                  </div>
                ) : null}
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  {post.excerpt ? (
                    <p className="opacity-80 text-sm line-clamp-3">{post.excerpt}</p>
                  ) : null}
                  {post.publishedAt ? (
                    <p className="opacity-60 text-xs mt-3">{new Date(post.publishedAt).toLocaleDateString()}</p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>

          {/* Pagination controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            {page > 1 ? (
              <Link
                href={`/blog/page/${page - 1}`}
                className="inline-block font-bold py-2 px-6 text-white hover:brightness-110 transition-all duration-200"
                style={{ borderRadius: 5, border: '3px solid #c46927', background: 'linear-gradient(to bottom, #5f7c8a, #3f5e6b)' }}
              >Previous</Link>
            ) : (
              <span
                className="inline-block font-bold py-2 px-6 text-white opacity-50 cursor-not-allowed"
                style={{ borderRadius: 5, border: '3px solid #c46927', background: 'linear-gradient(to bottom, #5f7c8a, #3f5e6b)' }}
              >Previous</span>
            )}
            <span className="opacity-80 text-sm">Page {page} of {totalPages || 1}</span>
            {totalPages && page < totalPages ? (
              <Link
                href={`/blog/page/${page + 1}`}
                className="inline-block font-bold py-2 px-6 text-white hover:brightness-110 transition-all duration-200"
                style={{ borderRadius: 5, border: '3px solid #c46927', background: 'linear-gradient(to bottom, #5f7c8a, #3f5e6b)' }}
              >Next</Link>
            ) : (
              <span
                className="inline-block font-bold py-2 px-6 text-white opacity-50 cursor-not-allowed"
                style={{ borderRadius: 5, border: '3px solid #c46927', background: 'linear-gradient(to bottom, #5f7c8a, #3f5e6b)' }}
              >Next</span>
            )}
          </div>
        </>
      )}
    </div>
  )
}


