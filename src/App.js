import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/UserAccount/Login/Login';
import Register from './Pages/UserAccount/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Blog from './Pages/Home/Blog/Blog';
import About from './Pages/Home/About/About'
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import CheckOut from './Pages/Home/CheckOut/CheckOut'

function App() {
  return (
    <div>
       <Header></Header>
       <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        }></Route>
        <Route path='/home' element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        }></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/register' element={<Register></Register>}></Route>
         <Route path='/checkout' element={
            <RequireAuth>
                <CheckOut></CheckOut>
            </RequireAuth>        
          }></Route>
               
         <Route path='/blog' element={<Blog></Blog>}></Route>
         <Route path='/about' element={<About></About>}></Route>
         <Route path='*' element={<NotFound></NotFound>}></Route>
        
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
