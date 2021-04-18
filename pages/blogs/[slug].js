import PageLayout from "components/PageLayout";
import {useRouter} from "next/router";

const BlogDetail = () => {
  // const router = useRouter();
  // console.log('router', router);
  const {query} = useRouter();

  return (
      <PageLayout>
        <h1>Hello detail Page - {query.slug}</h1>
      </PageLayout>
  )
}

export default BlogDetail;