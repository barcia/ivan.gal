import fs from 'fs'
import { join } from 'path'

const paths = {
    articles: join(process.cwd(), '_content/articles'),
    notes: join(process.cwd(), '_content/notes'),
}

const getMarkdownFiles = (contentType, { filename, slug } = {}) => {
    const contentDir = paths[contentType]
    const markdownFiles = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));

    const data = markdownFiles.map(file => {
        return {
            filename: file,
            slug: file.substring(11).replace(/\.md$/, ''),
            rawContent: fs.readFileSync(join(contentDir, file), 'utf8'),
        }
    })

    if (slug) return data.find(post => post.slug === slug)
    if (filename) return data.find(post => post.filename === filename)

    return data
}

export default getMarkdownFiles;
