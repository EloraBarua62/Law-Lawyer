import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/UserAccount/Login/Login';
import Register from './Pages/UserAccount/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
       <Header></Header>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/home' element={<Home></Home>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/register' element={<Register></Register>}></Route>
         <Route path='/checkout' element={<Home></Home>}></Route>
         <Route path='/notfound' element={<NotFound></NotFound>}></Route>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
