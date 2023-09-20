import { Fragment } from 'react';
import './App.css';
import Home from './component/Home.js/Home';
import Navs from './component/Navs/Navs';

function App() {
  return (
    <Fragment>
      <Navs></Navs>
      <Home></Home>
    </Fragment>
  );
}

export default App;
