import Helmet from 'react-helmet';
import NavBar from "./nav-bar";

const Home = () => {
  return (
    <>
      <Helmet>
          <title>Home | Mercado Libre</title>
          <meta name="description" content="Compre productos con Envío Gratis en el día en Mercado Libre México. Encuentre miles de marcas y productos a precios increíbles." />
          <meta name="keywords" content="palabra clave 1, palabra clave 2, palabra clave 3"/>
          <meta property="og:title" content="Home | Mercado Libre" />
          <meta property="og:description" content="Compre productos con Envío Gratis en el día en Mercado Libre México. Encuentre miles de marcas y productos a precios increíbles." />
          <meta property="og:image" content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2" />
          <meta property="og:url" content="https://www.mercadolibre.com.mx/" />
          <meta property="og:locale" content="es-MX" />
          <meta property="og:site_name" content="mercadolibre.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@mercadolibre" />
          <meta name="twitter:creator" content="@mercadolibre" />
          <meta name="twitter:title" content="Home | Mercado Libre" />
          <meta name="twitter:description" content="Compre productos con Envío Gratis en el día en Mercado Libre México. Encuentre miles de marcas y productos a precios increíbles." />
          <meta name="twitter:image" content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2" />
      </Helmet>
      <NavBar />
    </>
  );
}

export default Home;