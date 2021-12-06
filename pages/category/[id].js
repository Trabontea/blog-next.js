import React, { useState } from "react";
import PageLayout from "components/PageLayout";
import { Col } from "react-bootstrap";
import { useRouter } from "next/router";
import { getCategories } from "lib/api";
import { getBlogByCategories } from "lib/api";
import Test from "../../components/Test";

const CategoryPost = ({ blog }) => {
  const router = useRouter();

  // if (router.isFallback) {
  //   // return <Loader />;
  // }
  const categoryName = router.query.id;

  console.log("blog", blog);

  return (
    <PageLayout className="home">
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <h1> {categoryName} </h1>
            <h2>HellO page</h2>

            {blog.map((item) => {
              //console.log("item", item, item.slug === categoryName);

              if (item.slug === categoryName) {
                return item.relatedBlog.map((blogItem, index) => (
                  //console.log('blogItem', blogItem.title)
                  <Test
                    key={blogItem._id}
                    slug={blogItem.slug.current}
                    title={blogItem.title}
                  />
                ));
              }
            })}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
export default CategoryPost;

export async function getStaticProps({ params }) {
  console.log("params", params);
  console.log("Loading detail Page");

  const blog = await getBlogByCategories(params.slug);
  return {
    props: { blog },
    unstable_revalidate: 1,
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map((category) => ({
      params: { id: category.slug.current },
    })),
    fallback: true,
  };
}
