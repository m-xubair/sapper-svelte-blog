require('dotenv').config();
import contentful from 'contentful';

const {SPACE_ID, CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_ENV} = process.env;

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  environment: CONTENTFUL_ENV
});

export async function getPortfolio() {
    const portfolio = await client.getEntry('2sbuXHUgolSyvPbgXqP0VG');
    return portfolio;
}

export async function getPosts() {
  const posts = await client.getEntries({
    content_type: 'posts'
  });

  return posts;
}

export async function getPostBySlug(slug) {
  const post = await client.getEntries({
    content_type: 'posts',
    'fields.slug':slug
  });

  return post;
}