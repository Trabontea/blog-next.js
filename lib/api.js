import client from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const blogFields = `
  title,
  subtitle,
  'slug':slug.current,
  date,
  coverImage,
  'author': author->{name, 'avatar': avatar.asset->url},
`;

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getAllBlogs({offset} = {offset: 0}) {
  // const results = await client.fetch(`*[_type == "blog"]{${blogFields}}`);
  // return results;
  return await client.fetch(`*[_type == "blog"] | order(_createdAt desc) {${blogFields}}[${offset}...${offset + 3}]`);
}

// export blog and content
export async function getBlogBySlug(slug) {
  const result = await client
      .fetch(`*[_type == "blog" && slug.current == $slug] {
        ${blogFields}
        content[]{..., "asset": asset->}
      }`, {slug}).then(res => res?.[0])

  return result;
}