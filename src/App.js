// import { Button, Container, Row, Col, Nav } from 'react-bootstrap'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from "react-redux";
import NavBar from './components/nav-bar';
import Results from './components/results';
import Details from './components/datails';
// import DetailProduct from './components/detail-product';
// import { getSearch } from './actions/search'

import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  /* const search = useSelector(state => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearch())
    console.log({ search });
  }, []); */
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <NavBar /> } />
        <Route path='/items' element={ <Results /> } />
        <Route path='/items/:id' element={ <Details /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
