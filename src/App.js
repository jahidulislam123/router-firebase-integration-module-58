import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Products from './components/Products/Products';
import Orders from './Orders/Orders';
import RequirAuth from './RequireAuth/RequirAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route  path='/products' element={<Products></Products>} ></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/orders' element={<RequirAuth>
          <Orders></Orders>
        </RequirAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
