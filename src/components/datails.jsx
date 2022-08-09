import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import Bread from './breadcrumb';
import DetailProduct from './detail-product';
import NavBar from './nav-bar';
import { useParams } from 'react-router-dom';
import { getDetailProduct } from '../actions/product'

const Details = () => {
  const { id } = useParams();
  console.log({ id });
  const itemsBreads = localStorage.getItem('breads').split('-');

  const product = useSelector(state => state.product);
  const dispatch = useDispatch();

  const {
    title = '',
  } = product;

  itemsBreads.push(title);

  useEffect(() => {
    dispatch(getDetailProduct(id))
  }, []);

  return (
    <>
      <NavBar />
      <Container className='col-lg-10 offset-lg-1'>
        <Bread itemsBreads={ itemsBreads } />
        <DetailProduct product={ product } />
      </Container>
    </>
  );
}

export default Details;