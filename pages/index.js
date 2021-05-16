import {useState} from "react";
import { Row, Button } from 'react-bootstrap';
import PageLayout from "components/PageLayout";
import AuthorIntro from "components/AuthorIntro"
import FilteringMenu from "../components/FilteringMenu";
import { getAllBlogs } from "../lib/api";
import { useGetBlogsPages } from 'actions/paginations'

export default function Home({blogs}) {
  // console.log('hello world');
  // console.log('blogs', blogs);

  const [filter, setFilter] = useState({
    view: {list: 0}
  });

  // loadMore: to load more data
  // isLoadingMore: is true whenever we are making request to fetch data
  // isReachingEnd: is true when we loaded all of the data, data is empty (empty array)

  const {
    pages,
    isLoadingMore,
    isReachingEnd,
    loadMore
  } = useGetBlogsPages({blogs, filter})
  // memoizedProps:
  console.log('pages/index  -> blog', pages)

  return (
      <PageLayout className='home'>
        <AuthorIntro />

        <FilteringMenu
          filter ={filter}
          onChange={(option, value)=> {
            console.log('option::', option, '/ value', value)
            setFilter({...filter, [option]: value})
          }}
        />

        <hr/>
        <Row className="mb-5">
          {pages}
        </Row>
        <div className="text-center">
          <Button
              onClick={loadMore}
              disabled={isReachingEnd || isLoadingMore}
              size="lg"
              variant="outline-secondary"
          >
            {isLoadingMore ? '...' : isReachingEnd ? 'No more blogs': 'More Blogs'}
          </Button>
        </div>

      </PageLayout >
  )
}

// this function is called during the build (build time)
// Provides props to your page
// it will create static page

export async function getStaticProps() {
  // console.log('Calling getStaticProps')
  const blogs = await getAllBlogs({offset: 0});
  return {
    props: {
      blogs,
    }
  }
}



// This will be create dynamic page
// export async function getServerSideProps() {
//   // console.log('Calling getStaticProps')
//   const randomNumber = Math.random();
//   const blogs = await getAllBlogs();
//   return {
//     props: {
//       blogs,
//       randomNumber
//     }
//   }
// }

// Static Page
// Faster, can be cached using CDN
// Created at build time
// When we making the request we are always receiving the same html document

// Dynamic Page
// Created at request time (we can fetch data on server)
// Little bit slower, the time depends on data you are fetching