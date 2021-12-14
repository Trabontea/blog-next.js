import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const getBlogs = (url) => fetcher(url);

// test example
export const useGetHello = () => {
  return useSWR("/api/hello", fetcher);
};
