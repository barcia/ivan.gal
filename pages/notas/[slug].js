import Post from 'components/layouts/Post'
import { getNote, getAllNotes } from 'lib/content'
import parseMarkdown from 'lib/parseMarkdown'


export default function Note({ title, date, content }) {

  return (
    <Post
      title={title}
      date={date}
      content={content}
    />
  )
}


export async function getStaticProps({ params }) {
  const post = getNote(params.slug, [
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

export async function getStaticPaths({ params }) {

  const posts = getAllNotes(['slug'])

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
