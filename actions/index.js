import useSWR from 'swr';

const fetcher = url =>fetch(url).then(res => res.json())

// test example
export const useGetHello = () => {
  return useSWR('/api/hello', fetcher);
}

// api/blogs come from blogs.js
export const useGetBlogs = (initialData) => {
  return useSWR(`/api/blogs`, fetcher, {initialData})
}