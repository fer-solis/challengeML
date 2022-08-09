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
    <Row>
      <Col className='product'>
        <div className='product-content d-flex'>
          <Image src={ img } className='product-content-img' />
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
            <Button variant="primary">Comprar</Button>
          </div>
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