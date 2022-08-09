import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
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
    filters = [],
    results = [],
  } = useSelector(state => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearch(query))
  }, []);

  const itemsBreads = [];

  if (filters.length) {
    const {
      values = [],
    } = filters[0];

    if (values.length) {
      const {
        path_from_root,
      } = values[0];

      path_from_root.map(item => itemsBreads.push(item.name));
    }
  }

  localStorage.setItem('breads',itemsBreads.join('-'));

  return (
    <>
      <NavBar />
      <Container className='col-lg-10 offset-lg-1'>
        <Bread itemsBreads={ itemsBreads } />
        {results.length ? 
          results.map((item, key) => <Product item={ item } key={ key } />)
        : null}
      </Container>
    </>
  );
}

export default Results;