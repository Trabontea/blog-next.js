import client, { previewClient } from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

const blogFields = `
  title,
  subtitle,
  'category': category->{name},
  band,
  'slug':slug.current,
  date,
  coverImage,
  'author': author->{name, 'avatar': avatar.asset->url},
`;

const categoryField = `name`;

const builder = imageUrlBuilder(client);
// for preview
const getClient = (preview) => (preview ? previewClient : client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getAllBlogs() {
  // const results = await client.fetch(`*[_type == "blog"]{${blogFields}}`);
  // return results;
  return await client.fetch(`*[_type == "blog"] | 
  order(date desc) {${blogFields}}`);
}

const urlCategory = `*[_type == "category"]`;
export async function getCategories() {
  return await client.fetch(urlCategory);
}

const urlBlogByCategory = `*[_type =="category"]{
  name,
  "slug" : slug.current,
   "relatedBlog": *[_type=='blog' && references(^._id)]{ 
  	title,
  	slug,
  category
	}
}`;
//Get Blog by categories
export async function getBlogByCategories() {
  return await client.fetch(urlBlogByCategory);
}

// offset =  how many data you want to skip, limit = how many date you want to to fetch
export async function getPaginatedBlogs(
  { offset = 0, date = "desc" } = { offset: 0, date: "desc" }
) {
  // const results = await client.fetch(`*[_type == "blog"]{${blogFields}}`);
  // return results;
  return await client.fetch(`*[_type == "blog"] | 
  order(date ${date}) {${blogFields}}[${offset}...${offset + 6}]`);
}

// export blog and content
export async function getBlogBySlug(slug, preview) {
  const currentClient = getClient(preview);
  //  return await client
  return await currentClient
    .fetch(
      `*[_type == "blog" && slug.current == $slug] {
      ${blogFields}
      content[]{..., "asset": asset->}
    }`,
      { slug }
    )
    .then((res) => (preview ? (res?.[1] ? res[1] : res[0]) : res?.[0]));
}

