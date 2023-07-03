import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './components/home/Home';
import Header from './components/Layout/header/Header';
import Courses from './components/courses/Courses';
import Footer from './components/Layout/footer/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgetPassword from './components/auth/ForgetPassword';
import ResetPassword from './components/auth/ResetPassword';
import Contact from './components/contact/Contact'
import RequestCourse from './components/requestCourse/RequestCourse';
import About from './components/about/About';
function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/resetpassword/:token' element={<ResetPassword />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/request' element={<RequestCourse />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
