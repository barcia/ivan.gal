import matter from 'gray-matter'

const parseFrontMatter = rawContent => {
    const { data, content } = matter(rawContent)
    return { data, content }
}

export default parseFrontMatter
