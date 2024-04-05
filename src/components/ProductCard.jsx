import { Col, Card } from 'react-bootstrap';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';

const ProductCard = (props) => {
  const { id, title, image, price, discountPercentage, amount, updateAmount } =
    props;
  return (
    <Col>
      <Card className="shadow-lg mb-3">
        <Card.Img rounded style={{ height: '200px' }} src={image} />
        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <span className="text-warning h3">
              $
              {((amount * (price * (100 - discountPercentage))) / 100).toFixed(
                2
              )}
            </span>
            <span className="h5 ps-2 text-dark text-decoration-line-through">
              ${price * amount}
            </span>
          </Card.Text>
          <Card.Text className="border border-1 border-dark shadow-lg d-flex justify-content-center align-items-center p-2">
            <FaMinusSquare
              onClick={() => {
                if (amount === 1) {
                  const res = confirm(
                    'You are about to remove product! Are you sure?'
                  );
                  if (!res) return;
                }
                updateAmount(id, -1);
              }}
            />
            <span className="mx-3">{amount}</span>
            <FaPlusSquare onClick={() => updateAmount(id, 1)} />
          </Card.Text>
          <Card.Text>
            <button
              onClick={() => updateAmount(id, -amount)}
              className="btn btn-danger btn-sm p-1"
            >
              <FaRegTrashCan /> Remove
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
