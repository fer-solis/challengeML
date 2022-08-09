import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const DetailProduct = ({ product }) => {
  console.log({ product });
  const {
    condition = '',
    pictures = [],
    price = '',
    title = '',
  } = product;

  const img = pictures.length ? pictures[0].url : null;

  return (
    <Row className='bg-white containerDetails'>
      <Col className='product'>
        <div className='product-content d-flex flex-sm-column flex-lg-row'>
          <Col sm={ 12 } md={ 12 } lg={ 9 } >
            <Image src={ img } className='product-content-img img-fluid w-100' />
          </Col>
          <Col sm={ 12 } md={ 12 } lg={ 3 }>
            <div className='product-content-details'>
              <small>
                { condition === 'new' ? 'Nuevo' : null } - 2434 vendidos
              </small>
              <h1>
                { title }
              </h1>
              <h3>
                $ { price.toLocaleString('en') }
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
            Lorem ipsum dolor sit amet. Rem quas laborum ut excepturi facilis 33 temporibus cumque aut nostrum libero eos eligendi dolores. Est beatae magnam et voluptas perferendis et cumque unde! Est tempore dignissimos aut explicabo aperiam ut reiciendis inventore et minus magnam aut nihil eaque eum atque explicabo ut laborum autem?
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default DetailProduct;