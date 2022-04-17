import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div>
       <Header></Header>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/home' element={<Home></Home>}></Route>
         <Route path='/login' element={<Home></Home>}></Route>
         <Route path='/register' element={<Home></Home>}></Route>
         <Route path='/checkout' element={<Home></Home>}></Route>
         <Route path='/notfound' element={<Home></Home>}></Route>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
