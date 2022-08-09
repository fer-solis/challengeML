import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Helmet from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Bread from './breadcrumb';
import Product from './product';
import NavBar from './nav-bar';
import { getSearch } from '../actions/search'

const Results = () => {
  const {
    href,
  } = window.location;
  const url = new URL(href);
  var query = url.searchParams.get("search");

  const {
    categories = [],
    items = [],
  } = useSelector(state => state.search.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearch(query));
  }, [dispatch, query]);

  localStorage.setItem('breads',categories.join('-'));

  return (
    <>
      <Helmet>
          <title>Result | Mercado Libre</title>
          <meta name="description" content="Compre productos con Envío Gratis en el día en Mercado Libre México. Encuentre miles de marcas y productos a precios increíbles." />
          <meta name="keywords" content="palabra clave 1, palabra clave 2, palabra clave 3"/>
          <meta property="og:title" content="Result | Mercado Libre" />
          <meta property="og:description" content="Compre productos con Envío Gratis en el día en Mercado Libre México. Encuentre miles de marcas y productos a precios increíbles." />
          <meta property="og:image" content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2" />
          <meta property="og:url" content="https://www.mercadolibre.com.mx/" />
          <meta property="og:locale" content="es-MX" />
          <meta property="og:site_name" content="mercadolibre.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@mercadolibre" />
          <meta name="twitter:creator" content="@mercadolibre" />
          <meta name="twitter:title" content="Result | Mercado Libre" />
          <meta name="twitter:description" content="Compre productos con Envío Gratis en el día en Mercado Libre México. Encuentre miles de marcas y productos a precios increíbles." />
          <meta name="twitter:image" content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2" />
      </Helmet>
      <NavBar />
      <Container className='col-lg-10 offset-lg-1'>
        <Bread itemsBreads={ categories } />
        {items.length ? 
          items.map((item, key) => <Product item={ item } key={ key } />)
        : null}
      </Container>
    </>
  );
}

export default Results;