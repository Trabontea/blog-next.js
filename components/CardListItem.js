import {Card} from "react-bootstrap";
import Link from "next/link";
import moment from "moment";

const CardListItem = ({title, subtitle, date, author, link, mode='normal'}) => {
  return(
      <Card className={`fj-card fj-card-list ${mode}`}>
        <div className="card-body-wrapper">
          <Card.Header
            className="d-flex flex-row">
            <img
              src={author?.avatar || 'https://via.placeholder.com/150'}
              className="rounded-circle mr-3"
              height="50px"
              width="50px"
              alt="avatar"/>
            {mode === 'placeholder' ?
                <div>
                  <Card.Title className="font-weight-bold mb-1">Placeholder Author</Card.Title>
                  <Card.Text className="card-date">Placeholder Date</Card.Text>
                </div>
                :
                <div>
                  <Card.Title className="font-weight-bold mb-1">{author?.name}</Card.Title>
                  <Card.Text className="card-date">{moment(date).locale('ro').format('L')}</Card.Text>
                </div>
            }
          </Card.Header>
          <Card.Body>
            { mode === 'placeholder' ?
              <>
                <Card.Title className="card-main-title">PLaceholder title</Card.Title>
                <Card.Text>Placeholder subtitle</Card.Text>
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

export default CardListItem;