import {Col, Image, Media, Row} from "react-bootstrap";

export default function AuthorIntro() {
  return (
      <Row>
        <Col md="8">
          {/* AUTHOR INTRO STARTS */}
          <Media className="mb-4 admin-intro">
            <Image
                roundedCircle
                width={64}
                height={64}
                className="mr-3"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGa1cFsmBiVkg/profile-displayphoto-shrink_100_100/0/1520945915069?e=1624492800&v=beta&t=4BSFbAwqUvgjZHSiPJRySUajLJoaFtUKnwpvoan_gVg"
                alt="Generic placeholder"
            />
            <Media.Body>
              <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
              <p className="welcome-text">
                My name is Trabontea and I am an  software engineer and freelance developer.
                and this is my blog page.
              </p>
            </Media.Body>
          </Media>
          {/* AUTHOR INTRO ENDS */}
        </Col>
      </Row>
  )
}