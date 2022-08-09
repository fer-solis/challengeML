import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import shipping from '../img/shipping.png'

const Product = ({ item }) => {
  const {
    address,
    id,
    price,
    title,
    thumbnail,
  } = item;
  
  const {
    city_name,
  } = address;
  console.log({ item });

  const viewDetail = (id) => {
    const site = window.location.origin;
    window.location.replace(`${site}/items/${id}`);
 }

  return (
    <Row>
      <Col className='d-flex itemProduct' onClick={() => viewDetail(id)}>
        <Image src={ thumbnail } className='itemProduct-item' />
        <div className='w-100'>
          <div className='d-flex justify-content-between'>
            <div>
              <span>
                $ {price.toLocaleString('en')}
              </span>
              <Image src={ shipping } />
            </div>
            <span className='me-lg-5'>
              { city_name }
            </span>
          </div>
          <div>
          { title }
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Product