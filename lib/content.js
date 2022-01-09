import parseFrontMatter from './parseFrontMatter'
import getMarkdownFiles from './getMarkdownFiles';
import getReadingTime from './getReadingTime'

const _get = (contentType, slug, fields = []) => {
  const file = getMarkdownFiles(contentType, { slug });
  const { data, content } = parseFrontMatter(file.rawContent)

  const post = {
      slug: file.slug,
      date: JSON.stringify(new Date(data.date)),
      readingTime: getReadingTime(content),
  }

  fields.forEach((field) => {
      field === 'content' && (post[field] = content)
      typeof data[field] !== 'undefined' && (post[field] = data[field])
  })

  return post
}

const _getAll = (contentType, fields = []) => {
  const files = getMarkdownFiles(contentType)
  const posts = files
    .map((file) => _get(contentType, file.slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return posts
}


const getNote = (slug, fields = []) => _get('notes', slug, fields)
const getPost = (slug, fields = []) => _get('articles', slug, fields)

const getAllNotes = (fields = []) => _getAll('notes', fields)
const getAllPosts = (fields = []) => _getAll('articles', fields)


export { getNote, getAllNotes, getPost, getAllPosts };
