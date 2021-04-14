import client from './sanity';

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  _createdAt,
  _id
`
export async function getAllBlogs() {
  // const results = await client.fetch(`*[_type == "blog"]{${blogFields}}`);
  // return results;
  return await client.fetch(`*[_type == "blog"]{${blogFields}}`);
}