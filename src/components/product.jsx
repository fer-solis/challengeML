import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import imgShipping from '../img/shipping.png'

const Product = ({ item }) => {
  const {
    city_name,
    id,
    price,
    free_shipping,
    title,
    picture,
  } = item;
  
  console.log({ item });

  const viewDetail = (id) => {
    const site = window.location.origin;
    window.location.replace(`${site}/items/${id}`);
  }
  const contructPrice = ({
    amount,
    decimals,
  }) => {
    return parseFloat(`${amount}.${decimals}`);
  }

  return (
      <Row className='bg-white containerProducts'>
        <Col className='d-flex itemProduct' onClick={ () => viewDetail(id) }>
          <Image src={ picture } className='itemProduct-item' />
          <div className='w-100'>
            <div className='d-flex justify-content-between itemProduct-titleProducts'>
              <Col sm={ 9 }>
                <div>
                  <span className='productPrice'>
                    $ { contructPrice(price).toLocaleString('en') }
                  </span>
                  { free_shipping ? <Image src={ imgShipping } className='iconDelivery'/> : null}
                </div>
              </Col>
              <Col className='city-wrapper'>
                <span className='me-lg-5'>
                  { city_name }
                </span>
              </Col>
            </div>
            <div className='productDescription'>
            { title }
            </div>
          </div>
        </Col>
      </Row>
  );
}

export default Product