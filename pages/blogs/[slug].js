import PageLayout from "components/PageLayout";
import { getBlogBySlug, getAllBlogs } from "../../lib/api";
import BlogHeader from 'components/BlogHeader';
import ErrorPage from 'next/error';
import { Row, Col } from 'react-bootstrap';
import { urlFor } from "../../lib/api";
import moment from 'moment';
import {useRouter} from "next/router";
import BlogContent from "../../components/BlogContent";
import React from "react";

const BlogDetail = ({blog}) => {
  const router = useRouter();

  if(!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode='404'/>
  }

  if(router.isFallback) {
    console.log('Loading fallback page')
    return (
      <PageLayout className="blog-detail-page">
        Loading..
      </PageLayout>
    )
  }

  console.log('blog', blog); // blog.content
  // const router = useRouter();
  // console.log('router', router);
  // const {query} = useRouter();
  // console.log('blog', blog);;
  return (
      <PageLayout className="blog-detail-page">
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <BlogHeader
                title={blog.title}
                subtitle={blog.subtitle}
                coverImage={urlFor(blog.coverImage).height(300).url()}
                author={blog.author}
                date={moment(blog.date).locale('ro').format('L')}
            />
            <hr/>
            {/* Blog Content Here */}
            { blog.content &&
            <BlogContent content={blog.content}/>
            }

          </Col>
        </Row>
      </PageLayout>
  )
}

// de aici ajunge in functia BlogDetail ca parametru / props
export async function getStaticProps({params}) {
  console.log('params', params);
  console.log('Loading detail Page');
  const blog = await getBlogBySlug(params.slug);
  return {
    props: {blog}
  }
}

// TOD introduce fallback
export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const paths = blogs?.map(b => (
      {
        params: { slug: b.slug }
      }
    )
  )
  console.log('paths', paths)
  return {
    paths,
    fallback: true
  }
}

export default BlogDetail;