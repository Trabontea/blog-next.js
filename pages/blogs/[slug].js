import PageLayout from "components/PageLayout";
// import { useRouter } from "next/router";
import { getBlogBySlug, getAllBlogs } from "../../lib/api";
import BlogHeader from 'components/BlogHeader';
import { Row, Col } from 'react-bootstrap';
import { urlFor } from "../../lib/api";

import BlogContent from "../../components/BlogContent";
import React from "react";

const BlogDetail = ({blog}) => {
  console.log('blog', blog); // blog.content
  // const router = useRouter();
  // console.log('router', router);
  // const {query} = useRouter();
  // console.log('blog', blog);
  return (
      <PageLayout className="blog-detail-page">
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <BlogHeader
                title={blog.title}
                subtitle={blog.subtitle}
                coverImage={urlFor(blog.coverImage).height(300).url()}
                author={blog.author}
                date={blog.date}
            />
            <hr/>

            {/* Blog Content Here */}
            <BlogContent content={blog.content}/>
          </Col>
        </Row>
      </PageLayout>
  )
}

// de aici ajunge in functia BlogDetail ca parametru / props
export async function getStaticProps({params}) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: {blog}
  }
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const paths = blogs?.map(b => (
      {
        params: { slug: b.slug }
      }
    )
  )
  return {
    paths,
    fallback: false
  }
}

export default BlogDetail;