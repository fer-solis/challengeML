import Home from './components/home';
import Results from './components/results';
import Details from './components/datails';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='/items' element={ <Results /> } />
        <Route path='/items/:id' element={ <Details /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
