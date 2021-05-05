import { useSWRPages } from 'swr';
import {useGetBlogs} from "actions";

export const useGetBlogsPages = ({blogs}) => {
  return useSWRPages(
    'index-page',
    ({offset, withSWR}) => {
     const {data} = withSWR(useGetBlogs())
  }),
  // here you will compute offset that will get passed into previous callback function 'withSWR'
  // SWR: data you will get from 'withSWR' function
  // index: number of current page
  (SWR,index) => {
    return 0
  }
}