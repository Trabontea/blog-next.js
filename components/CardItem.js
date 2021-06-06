import {Card} from "react-bootstrap";
import Link from 'next/link';
import {urlFor} from "../lib/api";
import moment from "moment";

const CardItem = ({title, subtitle, date, image, author, link, mode = 'normal'}) => {
  // console.log('author', author)
  return(
      <Card className={`fj-card ${mode}`}>
        <div className={`card-body-wrapper ${!image ? 'no-image' : ''} `}>
          <Card.Header
              className="d-flex flex-row">
            <img
                src={author?.avatar || 'https://via.placeholder.com/150'}
                className="rounded-circle mr-3"
                height="50px"
                width="50px"
                alt={author?.name || 'Nobody'}/>
            <div>
              { mode === 'placehoder' ?
                  <>
                    <Card.Title className="font-weight-bold mb-1">Title</Card.Title>
                    <Card.Text className="card-date">Date</Card.Text>
                  </>
                    :
                  <>
                    <Card.Title className="font-weight-bold mb-1">{author?.name || 'Nobody'}</Card.Title>
                    <Card.Text className="card-date">{moment(date).locale('ro').format('L')}</Card.Text>
                  </>
              }
            </div>
          </Card.Header>
          <div className="view overlay">
            { mode === 'placeholder' ?
              <div className='image-placeholder' />
              :
              image &&
              <Card.Img
                src={
                  urlFor(image)
                  .height(300)
                  .crop('center')
                  .fit('clip')
                  .url()}
                className='card-image-blog'
                alt="Card image cap"
              />
            }
          </div>
          <Card.Body>
            { mode === 'placeholder' ?
                <>
                  <Card.Title className="card-main-title">Placeholder Title</Card.Title>
                  <Card.Text>Placeholder Subtitle</Card.Text>
                </>
                :
                <>
                  <Card.Title className="card-main-title">{title}</Card.Title>
                  <Card.Text>{subtitle}</Card.Text>
                </>
            }
          </Card.Body>
        </div>
        {
          link &&
          <Link {...link}>
            <a className="card-button">
              Read More
            </a>
          </Link>
        }
      </Card>
  )
}

export default CardItem;