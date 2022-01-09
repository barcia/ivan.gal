import { getPost, getAllPosts } from '/lib/content'
import parseMarkdown from '/lib/parseMarkdown'
import Post from '/components/layouts/Post'

export default function Artigo({title, date, readingTime, content}) {
  return (
  <Post
    title={title}
    date={date}
    readingTime={readingTime}
    content={content}
  />
  )
}


export async function getStaticProps({ params }) {
  const post = getPost(params.slug, [
    'title',
    'slug',
    'content',
  ])


  const content = await parseMarkdown(post.content || '')

  return {
    props: {
      ...post,
      content,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
