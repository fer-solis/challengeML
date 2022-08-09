import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const DetailProduct = ({ product }) => {
  console.log({ product });
  const {
    condition = '',
    picture = '',
    description = '',
    price = {},
    sold_quantity = 0,
    title = '',
  } = product;

  const contructPrice = ({
    amount,
    decimals,
  }) => {
    return parseFloat(`${amount}.${decimals}`);
  }

  return (
    <Row className='bg-white containerDetails'>
      <Col className='product'>
        <div className='product-content d-flex flex-sm-column flex-lg-row'>
          <Col sm={ 12 } md={ 12 } lg={ 9 } >
            <Image src={ picture } className='product-content-img img-fluid w-100' />
          </Col>
          <Col sm={ 12 } md={ 12 } lg={ 3 }>
            <div className='product-content-details'>
              <small>
                { condition === 'new' ? 'Nuevo' : null } - { sold_quantity } vendidos
              </small>
              <h1>
                { title }
              </h1>
              <h3>
                $ { contructPrice(price).toLocaleString('en') }
              </h3>
              <Button variant="primary" className='w-100 btn-lg btn-buy'>Comprar</Button>
            </div>
          </Col>
        </div>
        <div className='product-description'>
          <h2 className='product-description-title'>
            Descripcion del producto
          </h2>
          <p className='product-description-body'>
            { description }
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default DetailProduct;