import {getBlogBySlug} from "lib/api";

const sanitySecret = process.env.SANITY_PREVIEW_SECRET

export default async function enablePreview(req, res) {
  if(req.query.secret !== sanitySecret || !req.query.slug) {
    return  res.status(401).json({message: 'Invalid Token'});
  }
  const blog = await getBlogBySlug(req.query.slug);

  if(!blog) {
    return  res.status(401).json({message: 'Invalid Slug'});
  }

  // setPreviewData will set cookies into your browser
  // __prerender_bypass __next_preview_data
  res.setPreviewData({message: 'Hello World'});
  res.writeHead(307, { Location: `/blogs/${blog.slug}`})
  res.end();
}