import PostItem from '@/components/PostItem'
import { Widont } from '@/components/Widont'
import { getAllPostPreviews } from '@/utils/getAllPosts'

let posts = getAllPostPreviews()

export default function Blog() {
  return (
    <main className="max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <header className="pt-16 pb-9 sm:pb-16 sm:text-center">
        <h1 className="mb-4 text-4xl tracking-tight text-gray-900 font-extrabold dark:text-gray-200">
          Blog
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-400">
          <Widont>All the latest Tailwind CSS news, straight from the team.</Widont>
        </p>
      </header>
      <div className="space-y-16">
        {posts.map(({ slug, module: { default: Component, meta } }, index) => (
          <PostItem
            key={index}
            title={meta.title}
            category={meta.category}
            date={meta.date}
            slug={slug}
            wide
          >
            <Component />
          </PostItem>
        ))}
      </div>
    </main>
  )
}

Blog.layoutProps = {
  meta: {
    title: 'Blog',
  },
}
