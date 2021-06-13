import sanityClient from '@sanity/client';

const options = {
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production'
  // use Cdn === true, gives you fast response, it will get you
  // cache data
  // use Cdn === false, give you little bit slower response, but latest data
}

export const previewClient =  sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_PREVIEW_TOKEN
})

export default sanityClient(options);