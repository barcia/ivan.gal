import {remark} from 'remark'
import html from 'remark-html'

export default async function parseMarkdown(markdown) {
  const result = await remark().use(html, {sanitize: false}).process(markdown)
  return result.toString()
}
