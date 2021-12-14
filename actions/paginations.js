import { useSWRInfinite } from "swr";
import { getBlogs } from "actions";

// Similar to useSWR, this new Hook accepts a function that returns the request key,
//a fetcher function, and options. It returns all the values that useSWR returns,
// including 2 extra values: the page size and a page size setter, like a React state.

export const useGetBlogsPages = ({ filter }) => {
  const result = useSWRInfinite((index, previousPageData) => {
    if (index === 0) {
      return `/api/blogs?date=${filter.date.asc ? "asc" : "desc"}`;
    }

    if (!previousPageData.length) {
      return null;
    }

    return `/api/blogs?offset=${index * 6}&date=${
      filter.date.asc ? "asc" : "desc"
    }`;
  }, getBlogs);

  let hitEnd = false;
  const { data } = result;

  if (data) {
    hitEnd = data[data.length - 1].length === 0;
  }

  return { ...result, hitEnd };
};
