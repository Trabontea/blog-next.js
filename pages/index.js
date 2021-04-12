import { Row, Col, Media, Image, Card } from 'react-bootstrap';
import PageLayout from "components/PageLayout";
import AuthorIntro from "components/AuthorIntro"
import CardListItem from "components/CardListItem";
import CardItem from "components/CardItem";

export default function Home() {

  return (
      <PageLayout className='home'>
        <AuthorIntro />
        <hr/>
        <Row className="mb-5">
          <Col md="10">
            <CardListItem />
          </Col>

          <Col md="4">
            <CardItem />
          </Col>
        </Row>
      </PageLayout >
  )
}

