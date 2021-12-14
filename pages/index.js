import React, { useState } from "react";
import { Row, Button, Col } from "react-bootstrap";
import PageLayout from "components/PageLayout";
import AuthorIntro from "components/AuthorIntro";
import FilteringMenu from "components/FilteringMenu";
import Categories from "components/Categories";
import { getPaginatedBlogs } from "../lib/api";
import { useGetBlogsPages } from "actions/paginations";
import PreviewAlert from "components/PreviewAlert";
import CardItem from "components/CardItem";
import CardListItem from "components/CardListItem";
import CardItemBlank from "../components/CardItemBlank";
import CardListItemBlank from "../components/CardListItemBlank";

// [[1,2,3] [4,5,6]]
export const BlogList = ({ data, filter }) => {
  console.log("blogs from pagination", data);
  return data.map((page) =>
    page.map((blog) =>
      filter.view.list ? (
        <Col key={`${blog.slug}-list`} lg="9">
          <CardListItem
            author={blog.author}
            title={blog.title}
            subtitle={blog.subtitle}
            date={blog.date}
            category={blog.category.name}
            image={blog.coverImage}
            link={{
              href: "/blogs/[slug]",
              as: `/blogs/${blog.slug}`,
            }}
          />
        </Col>
      ) : (
        <Col key={blog.slug} md="6" lg="4">
          <CardItem
            author={blog.author}
            title={blog.title}
            subtitle={blog.subtitle}
            date={blog.date}
            category={blog.category.name}
            image={blog.coverImage}
            link={{
              href: "/blogs/[slug]",
              as: `/blogs/${blog.slug}`,
            }}
          />
        </Col>
      )
    )
  );
};

export default function Home({ blogs, preview }) {
  // console.log('blogs', blogs);

  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });

  // data: an array of fetch response values of each page
  // error: same as useSWR's error
  // isValidating: same as useSWR's isValidating
  // mutate: same as useSWR's bound mutate function but manipulates the data array
  // size: the number of pages that will be fetched and returned
  // setSize: set the number of pages that need to be fetched

  const { data, size, setSize, hitEnd, isValidating } = useGetBlogsPages({
    blogs,
    filter,
  });

  return (
    <PageLayout className="home">
      {preview && <PreviewAlert />}
      <AuthorIntro />
      <Categories />

      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          console.log("option::", option, "/ value", value);
          setFilter({ ...filter, [option]: value });
        }}
      />

      <hr />
      <Row className="mb-5">
        <BlogList data={data || [blogs]} filter={filter} />
        {isValidating &&
          Array(3)
            .fill(0)
            .map((_, i) =>
              filter.view.list ? (
                <Col key={i} md="9">
                  <CardListItemBlank />
                </Col>
              ) : (
                <Col key={`${i}-item`} md="6" lg="4">
                  <CardItemBlank />
                </Col>
              )
            )}
      </Row>
      <div className="text-center">
        <Button
          onClick={() => setSize(size + 1)}
          disabled={hitEnd}
          size="lg"
          variant="outline-secondary"
        >
          Load More
        </Button>
      </div>
    </PageLayout>
  );
}

// this function is called during the build (build time)
// Provides props to your page
// it will create static page

export async function getStaticProps({ preview = false }) {
  // console.log('Calling getStaticProps')
  const blogs = await getPaginatedBlogs({ offset: 0, date: "desc" });
  return {
    props: {
      blogs,
      preview,
    },
    unstable_revalidate: 1,
  };
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
