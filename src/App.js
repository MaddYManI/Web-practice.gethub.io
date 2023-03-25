import './App.css';
import { Routes,Route} from 'react-router-dom'
import Header from './Header';
import Nav from './Nav';
import Body from './Body';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <Body/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
