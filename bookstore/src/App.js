import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from "./pages/about";
import Login from "./pages/login";
import Books from "./pages/books";
import AddBook from "./pages/addbook";
import Register from "./pages/register";
import UpdateBook from "./pages/updatebook";
function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
        <Route path="/"element= {<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/books" element={<Books/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/addbook" element={<AddBook/>} />
        <Route path="/updatebook" element={<UpdateBook/>} />
        

        </Routes>
      </BrowserRouter>

      </div>
  );
}

export default App;






