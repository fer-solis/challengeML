import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Helmet from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Bread from './breadcrumb';
import DetailProduct from './detail-product';
import NavBar from './nav-bar';
import { useParams } from 'react-router-dom';
import { getDetailProduct } from '../actions/product'

const Details = () => {
  const { id } = useParams();
  let itemsBreads = localStorage.getItem('breads').split('-');
  const product = useSelector(state => state.product.item);

  const dispatch = useDispatch();

  const {
    picture = '',
    title = '',
  } = product;

  itemsBreads.push(title);

  itemsBreads = itemsBreads.filter(e => e);

  useEffect(() => {
    dispatch(getDetailProduct(id))
  }, [dispatch, id]);

  return (
    <>
      <Helmet>
        <title>{ title } | Mercado Libre</title>
        <meta name="description" content="Compre productos con Envío Gratis en el día en Mercado Libre México. Encuentre miles de marcas y productos a precios increíbles." />
        <meta name="keywords" content="palabra clave 1, palabra clave 2, palabra clave 3"/>
        <meta property="og:title" content={ `${title} | Mercado Libre` } />
        <meta property="og:description" content="Compre productos con Envío Gratis en el día en Mercado Libre México. Encuentre miles de marcas y productos a precios increíbles." />
        <meta property="og:image" content={ picture } />
        <meta property="og:url" content="https://www.mercadolibre.com.mx/" />
        <meta property="og:locale" content="es-MX" />
        <meta property="og:site_name" content="mercadolibre.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mercadolibre" />
        <meta name="twitter:creator" content="@mercadolibre" />
        <meta name="twitter:title" content={ `${title} | Mercado Libre` } />
        <meta name="twitter:description" content="Compre productos con Envío Gratis en el día en Mercado Libre México. Encuentre miles de marcas y productos a precios increíbles." />
        <meta name="twitter:image" content={ picture } />
      </Helmet>
      <NavBar />
      <Container className='col-lg-10 offset-lg-1'>
        <Bread itemsBreads={ itemsBreads } />
        <DetailProduct product={ product } />
      </Container>
    </>
  );
}

export default Details;