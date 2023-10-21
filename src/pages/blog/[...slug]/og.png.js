import { getCollection } from 'astro:content';
import { galicianDate } from '../../../utils/date.js'
import fs from 'fs';
import path from 'path';
import { ImageResponse } from '@vercel/og';

 
export async function GET({ props }) {
  const { post } = props;
 
  const { day, monthInGalician, year } = galicianDate(post.data.pubDate)
 
  const html = {
    type: 'div',
    props: {
      style: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e1ddd4',
        fontSize: 32,
        fontWeight: 600,
        paddingLeft: 64,
        paddingRight: 64,
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              margin: 0,
              fontSize: 48,
              lineHeight: 1.5,
              color: '#383734',
              textAlign: 'center',
            },
            children: post.data.title,
          },
        },
        {
          type: 'div',
          props: {
            style: {
              marginTop: 48,
              fontSize: 32,
              color: '#8A867F',
            },
            children: `${day} ${monthInGalician} ${year}`,
          },
        },
        {
          type: 'div',
          props: {
            style: {
              marginTop: 24,
              fontSize: 32,
              color: '#8A867F',
            },
            children: 'Iván Barcia',
          },
        },
      ],
    },
  };

 
  return new ImageResponse(html, {
    width: 1200,
    height: 600,
  });
}
 
// to generate an image for each blog posts in a collection
export async function getStaticPaths() {
  const blogPosts = await getCollection('blog');
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}