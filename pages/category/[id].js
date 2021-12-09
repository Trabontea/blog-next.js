import React, { useState } from "react";
import PageLayout from "components/PageLayout";
import { useRouter } from "next/router";
import { getCategories } from "lib/api";
import { getBlogByCategories } from "lib/api";
import Test from "../../components/Test";
import Loader from "../../components/Loader";

const CategoryPost = ({ blog }) => {
  const router = useRouter();

  console.log(blog);

  if (router.isFallback) {
    return <Loader />;
  }
  const categoryName = router.query.id;

  return (
    <PageLayout className="home">
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <h1> {categoryName} </h1>
            <h2>This is a page with {categoryName} albums</h2>

            {blog.map((item) => {
              if (item.slug === categoryName) {
                return item.relatedBlog.map((blogItem, index) => (
                  <Test
                    key={index}
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
